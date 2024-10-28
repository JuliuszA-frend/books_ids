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

let allDisplayedProducts = new Set();

function displayCategoriesAndProducts(data) {
  const container = document.createElement("div");
  container.className = "carousel-container";

  if (data.categories && data.categories.length > 0) {
    data.categories.forEach((category) => {
      const categoryElement = document.createElement("div");
      categoryElement.className = "category";
      const categoryName = document.createElement("h2");
      const customCategoryName = categoryNames[category.category_id];

      if (customCategoryName) {
        categoryName.textContent = customCategoryName;
      } else {
        categoryName.textContent = `${category.name_pl} - Może zainteresuje Cię jeszcze coś z tej kategorii`;
      }

      categoryElement.appendChild(categoryName);

      const productsContainer = document.createElement("div");
      productsContainer.className = "products-carousel";

      if (category.products && category.products.length > 0) {
        category.products.forEach((product) => {
          console.log(`Produkt ID: ${product.products_id}, Nazwa: ${product.name_pl}, Ilość: ${product.quantity}`);
        });

        // Filtrujemy produkty, aby uwzględnić tylko te z quantity > 0
        const availableProducts = category.products.filter(
          (product) => product.quantity > 0
        );

        console.log(`Znaleziono ${availableProducts.length} produktów dostępnych w kategorii ${category.name_pl}.`);

        // Wypisujemy do loga szczegóły każdego produktu dostępnego (z quantity > 0)
        availableProducts.forEach((product) => {
          console.log(`Produkt ID: ${product.products_id}, Nazwa: ${product.name_pl}, Ilość: ${product.quantity}`);
        });
        const randomProducts = getRandomProducts(availableProducts, 8);

        randomProducts.forEach((product) => {
          if (product.products_id !== productId && !allDisplayedProducts.has(product.products_id)) {
           console.log(`Wyświetlam produkt: ${product.products_id} - ${product.name_pl}`);
             const productElement = createProductElement(product);
            productsContainer.appendChild(productElement);
            allDisplayedProducts.add(product.products_id);
          }
        });
      } else {
        console.log(`Brak produktów w kategorii ${category.name_pl}.`);
      }

      categoryElement.appendChild(productsContainer);
      container.appendChild(categoryElement);
    });
  } else {
    console.log("Brak kategorii w danych.");
  }

  document.getElementById("content").appendChild(container);
}

function createProductElement(product) {
  const productElement = document.createElement("div");
  productElement.className = "product-box";

  // Link do strony produktu
  const productLink = document.createElement("a");
  productLink.href = product.url;

  // Tworzenie obrazu produktu
  const productImage = document.createElement("img");
  productImage.src = product.main_image;
  productImage.alt = product.name_pl;
  productImage.className = "product-image";

  // Dodanie obrazu do linku, bez h3
  productLink.appendChild(productImage);
  productElement.appendChild(productLink);

  // Tworzenie sekcji na dodatkowe informacje
  const productContent = document.createElement("div");
  productContent.className = "custom-product-box-content";

  // Przeniesienie nagłówka h3 z nazwą produktu i opakowanie go w link
  const productNameLink = document.createElement("a");
  productNameLink.href = product.url;

  const productName = document.createElement("h3");
  productName.textContent = product.name_pl;

  productNameLink.appendChild(productName);
  productContent.appendChild(productNameLink); // Dodanie linku z nazwą produktu do sekcji content

  const productPrice = document.createElement("p");
  productPrice.textContent = `Cena: ${product.promotions_price_brutto} PLN`;
  productPrice.className = `custom-container-price`;
  productContent.appendChild(productPrice);

  const marketPrice = document.createElement("p");
  const marketPriceText = document.createElement("span");
  marketPriceText.textContent = `${product.gross_price} PLN`;
  marketPriceText.style.textDecoration = "line-through";
  marketPrice.textContent = "Cena rynkowa: ";
  marketPrice.appendChild(marketPriceText);
  productContent.appendChild(marketPrice);

  const addToCartButton = createAddToCartButton(product);

  productContent.appendChild(addToCartButton);
  productElement.appendChild(productContent);

  return productElement;
}

function createAddToCartButton(product) {
  const addToCartButton = document.createElement("a");
  addToCartButton.id = "custom-add-to-cart";
  addToCartButton.setAttribute("data-product-id", product.products_id);
  addToCartButton.setAttribute("data-item-count", "1");
  addToCartButton.className = "add-to-cart-button";

  const buttonText = document.createElement("span");
  buttonText.textContent = "Dodaj do koszyka";
  addToCartButton.appendChild(buttonText);

  const cartIcon = document.createElement("span");
  cartIcon.className = "mdi mdi-shopping";
  cartIcon.style.marginLeft = "10px";
  addToCartButton.appendChild(cartIcon);

  addToCartButton.addEventListener("click", function () {
    const pid = this.getAttribute("data-product-id");
    const ct = this.getAttribute("data-item-count");
    const item = ct > 0 ? ct : 1;
    const pict = "fb";
    console.log(`Dodawanie produktu ${pid} do koszyka. Ilość: ${item}`);

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
          console.log(`Nie znaleziono danych dla produktu ${pid}. Przekierowanie.`);
          window.location.href = "/p/0/" + pid + "/.html";
        } else {
          const d = data.split("~");
          console.log(`Odpowiedź z serwera po dodaniu do koszyka: ${data}`);
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
              document.getElementById("rc_window_opt_body").innerHTML = d[1];
              break;
            default:
              items_cart("products_quantity" + ct + "_" + pid, 0, ct, pict);
              break;
          }
        }
      },
    }).send();
  });

  return addToCartButton;
}

function getRandomProducts(products, count) {
  const shuffled = products.slice();
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, count);
}

});