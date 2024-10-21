<script src="//cdn.jsdelivr.net/gh/JuliuszA-frend/books_ids@v1.0.12-a/categories.js"></script>;

document.addEventListener("DOMContentLoaded", function (event) {
  const productElement = document.getElementById("rc_pid");
  const productId = productElement.getAttribute("data-id");
  console.log(`Znaleziono ID produktu: ${productId}`);

  const requestBody = JSON.stringify({
    products: [{ products_id: productId }],
  });

  // Pobranie informacji o produkcie
  window.fetch &&
    fetch("/ajax.php?p=conversion&f=products_info&ssl=1", {
      method: "POST",
      body: requestBody,
      credentials: "same-origin",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        console.log("Odpowiedź z serwera:", response);
        const categoryIds = [];

        // Sprawdzenie, czy produkty istnieją
        if (
          response.products &&
          Array.isArray(response.products) &&
          response.products.length > 0
        ) {
          const productData = response.products[0];

          // Sprawdzenie, czy categoriesPaths istnieje
          if (
            productData.categoriesPaths &&
            Array.isArray(productData.categoriesPaths)
          ) {
            productData.categoriesPaths.forEach((pathArray) => {
              pathArray.forEach((category) => {
                if (category.id) {
                  categoryIds.push(category.id);
                  console.log(`Znaleziono id kategorii: ${category.id}`);
                }
              });
            });
          }
        } else {
          console.log("Brak produktów w odpowiedzi.");
        }

        // Wyświetlenie zebranych identyfikatorów kategorii
        console.log("Id kategorie:", categoryIds);

        // Uzyskanie unikalnych kompatybilnych kategorii
        const compatibleCategoryIds = getCompatibleCategories(categoryIds);
        console.log("Kompatybilne kategorie:", compatibleCategoryIds);

        // Wywołanie funkcji fetch dla kompatybilnych kategorii
        fetchCompatibleCategories(compatibleCategoryIds);
      })
      .catch((error) => {
        console.error("Błąd podczas pobierania informacji o produkcie:", error);
      });

  // Funkcja, która pobiera unikalne kompatybilne kategorie
  function getCompatibleCategories(categoryIds) {
    const uniqueCompatibleCategoryIds = new Set(); // Używamy Set, aby usunąć duplikaty

    categoryIds.forEach((categoryId) => {
      const compatibleIds = compatibleCategories[categoryId];
      if (compatibleIds) {
        compatibleIds.forEach((id) => uniqueCompatibleCategoryIds.add(id)); // Dodajemy wszystkie kompatybilne kategorie
      }
    });

    return Array.from(uniqueCompatibleCategoryIds); // Zwracamy jako tablicę
  }

  // Funkcja fetch dla unikalnych kompatybilnych kategorii
  function fetchCompatibleCategories(compatibleCategoryIds) {
    console.log(
      `Rozpoczynam pobieranie produktów dla unikalnych kompatybilnych kategorii: ${compatibleCategoryIds}`
    );
    compatibleCategoryIds.forEach((categoryId) => {
      // Tworzymy zapytanie fetch dla każdej unikalnej kompatybilnej kategorii
      fetchCategoryAndProducts(categoryId);
    });
  }

  // Funkcja fetch dla każdej kategorii osobno
  function fetchCategoryAndProducts(categoryId) {
    console.log(`Pobieranie produktów dla kategorii: ${categoryId}`);

    // Szukamy produktów dla danej kategorii w categoriesData
    const category = categoriesData.categories.find(
      (cat) => cat.category_id === categoryId
    );

    if (category) {
      console.log(`Znaleziono kategorię: ${categoryId}`, category);

      if (category.products && category.products.length > 0) {
        console.log(
          `Liczba produktów w kategorii ${categoryId}: ${category.products.length}`
        );

        // Tworzymy zapytanie fetch dla danej kategorii
        fetch("/ajax.php?p=conversion&f=categories_info&ssl=1", {
          method: "POST",
          body: JSON.stringify({
            categories: [
              { category_id: categoryId, products: category.products },
            ],
          }),
          credentials: "same-origin",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        })
          .then((response) => {
            console.log(
              `Odpowiedź serwera dla kategorii ${categoryId}:`,
              response
            );
            return response.json();
          })
          .then((data) => {
            console.log(`Dane kategorii ${categoryId}:`, data);
            // Wyświetlamy produkty dla każdej kategorii
            displayCategoriesAndProducts(data);
          })
          .catch((error) => {
            console.error(
              `Błąd podczas pobierania danych dla kategorii ${categoryId}:`,
              error
            );
          });
      } else {
        console.log(`Brak produktów dla kategorii ${categoryId}.`);
      }
    } else {
      console.log(`Nie znaleziono kategorii o ID: ${categoryId}`);
    }
  }

  // Funkcja wyświetlania kategorii i produktów
  function displayCategoriesAndProducts(data) {
    const container = document.createElement("div");
    container.className = "carousel-container"; // Kontener dla karuzeli

    if (data.categories && data.categories.length > 0) {
      const displayedProducts = new Set(); // Zbiór wyświetlonych produktów, aby uniknąć duplikatów

      data.categories.forEach((category) => {
        const categoryElement = document.createElement("div");
        categoryElement.className = "category";

        const categoryName = document.createElement("h2");
        // Sprawdzamy, czy kategoria ma przypisany tytuł w categoryNames
        const customCategoryName = categoryNames[category.category_id];

        if (customCategoryName) {
          categoryName.textContent = customCategoryName; // Ustawiamy niestandardowy tytuł
        } else {
          categoryName.textContent = `${category.name_pl} - Może zainteresuje Cię jeszcze coś z tej kategorii`; // Domyślny tytuł
        }

        categoryElement.appendChild(categoryName);
        const productsContainer = document.createElement("div");
        productsContainer.className = "products-carousel"; // Kontener dla karuzeli produktów

        if (category.products && category.products.length > 0) {
          console.log(
            `Znaleziono ${category.products.length} produktów w kategorii ${category.name_pl}.`
          );

          // Pobranie 10 losowych produktów z tej kategorii
          const randomProducts = getRandomProducts(category.products, 10);
          console.log(
            `Wylosowano ${randomProducts.length} produktów z kategorii ${category.name_pl}.`
          );

          randomProducts.forEach((product) => {
            // Sprawdzamy, czy produkt jest głównym produktem, dla którego generujemy rekomendacje
            if (
              product.products_id !== productId &&
              !displayedProducts.has(product.products_id)
            ) {
              const productElement = document.createElement("div");
              productElement.className = "product-box"; // Klasa dla pudełka produktowego

              // Tworzenie linku do produktu
              const productLink = document.createElement("a");
              productLink.href = product.url; // Ustawiamy adres URL produktu

              // Zdjęcie produktu
              const productImage = document.createElement("img");
              productImage.src = product.main_image;
              productImage.alt = product.name_pl;
              productImage.className = "product-image"; // Klasa dla obrazu
              productLink.appendChild(productImage); // Dodajemy obraz do linku

              // Nazwa produktu
              const productName = document.createElement("h3");
              productName.textContent = product.name_pl;
              productLink.appendChild(productName); // Dodajemy nazwę do linku

              productElement.appendChild(productLink); // Dodajemy link do elementu produktu

              // Cena produktu
              const productPrice = document.createElement("p");
              productPrice.textContent = `Cena: ${product.promotions_price_brutto} PLN`;
              productElement.appendChild(productPrice);

              // Cena rynkowa
              const marketPrice = document.createElement("p");
              const marketPriceText = document.createElement("span"); // Tworzymy span dla ceny rynkowej
              marketPriceText.textContent = `${product.gross_price} PLN`; // Ustawiamy tekst
              marketPriceText.style.textDecoration = "line-through"; // Przekreślenie ceny

              marketPrice.textContent = "Cena rynkowa: "; // Tekst opisowy
              marketPrice.appendChild(marketPriceText); // Dodajemy przekreśloną cenę do paragrafu
              productElement.appendChild(marketPrice); // Dodajemy wszystko do pudełka produktowego

              // Przyciski dodania do koszyka
              const addToCartButton = document.createElement("button");
              addToCartButton.id = "custom-add-to-cart";
              addToCartButton.setAttribute(
                "data-product-id",
                product.products_id
              );
              addToCartButton.setAttribute("data-item-count", "1");
              addToCartButton.textContent = "Dodaj do koszyka";
              addToCartButton.className = "add-to-cart-button";

              // Obsługa dodawania do koszyka (twoja funkcja)
              addToCartButton.addEventListener("click", function () {
                const pid = this.getAttribute("data-product-id");
                const ct = this.getAttribute("data-item-count");
                const item = ct > 0 ? ct : 1;
                const pict = "fb";

                console.log(
                  `Dodawanie produktu ${pid} do koszyka. Ilość: ${item}`
                );

                new Request({
                  method: "post",
                  url: "/ajax/pinfo/addcart/",
                  data: {
                    pid: pid,
                    item: item,
                    pict: pict,
                    checkOptions: 1,
                    type: 0,
                    ct: ct,
                  },
                  onComplete: function (data) {
                    if (!data) {
                      console.log(
                        `Nie znaleziono danych dla produktu ${pid}. Przekierowanie.`
                      );
                      window.location.href = "/p/0/" + pid + "/.html";
                    } else {
                      const d = data.split("~");
                      console.log(
                        `Odpowiedź z serwera po dodaniu do koszyka: ${data}`
                      );
                      switch (d[0]) {
                        case "1":
                        case "2":
                          const rc_w = new rc_windows({
                            id: "rc_window_opt",
                            container: document.body,
                            useOverlay: true,
                            width: 665,
                            height: 300,
                            title: def.index.window_opt_title,
                            contentHTML: d[1],
                          });
                          document.getElementById(
                            "rc_window_opt_body"
                          ).innerHTML = d[1];
                          break;
                        default:
                          items_cart(
                            "products_quantity" + ct + "_" + pid,
                            0,
                            ct,
                            pict
                          );
                          break;
                      }
                    }
                  },
                }).send();
              });

              productElement.appendChild(addToCartButton); // Dodajemy przycisk do pudełka produktowego
              displayedProducts.add(product.products_id); // Dodajemy ID produktu do zbioru
              productsContainer.appendChild(productElement); // Dodajemy element produktu do kontenera
            }
          });
        } else {
          console.log(`Brak produktów w kategorii ${category.name_pl}.`);
        }

        categoryElement.appendChild(productsContainer); // Dodajemy kontener produktów do kategorii
        container.appendChild(categoryElement); // Dodajemy kategorię do kontenera
      });
    } else {
      console.log("Brak kategorii w danych.");
    }

    document.getElementById("content").appendChild(container);
  }

  // Funkcja do losowania produktów
  function getRandomProducts(products, count) {
    const shuffled = products.slice(); // Kopiujemy tablicę produktów
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Przechodzimy przez tablicę, losując elementy
    }
    return shuffled.slice(0, count); // Zwracamy wylosowane produkty
  }
});
