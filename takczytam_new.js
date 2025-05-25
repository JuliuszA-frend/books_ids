
    var categoriesTree = document.getElementById("categories-tree");
    if (categoriesTree) {
        categoriesTree.style.display = "block";
    } else {
        console.warn("Element 'categories-tree' nie został znaleziony.");
    }


    window.addEventListener("load", function () {
      var filterContent = document.querySelector(".filter-content");
      if (filterContent) {
          filterContent.setAttribute("aria-expanded", "false");
          filterContent.style.display = "none";
      } else {
          console.error("Element .filter-content nie został znaleziony.");
      }
  });


  if (window.innerWidth <= 990) {
    var rowElement = document.querySelector(
      ".category-description > *:not(.row-vertical-block):not(:first-child)"
    );
    if (rowElement) {  // Sprawdzamy, czy rowElement jest znaleziony
        var containerElement = document.querySelector("#container");
        var footerElement = document.querySelector("#footer");

        rowElement.style.border = "1px solid #e1e1e1";
        rowElement.style.padding = "20px 20px 20px 20px";
        rowElement.style.textAlign = "left";
        rowElement.style.margin = "2rem auto";
        rowElement.style.width = "97.5%";

        // Sprawdzamy, czy containerElement i footerElement istnieją
        if (containerElement && footerElement) {
            containerElement.parentNode.insertBefore(rowElement, footerElement);
        }
    }
}


  function addCartIcon(className) {
    var aTags = document.querySelectorAll("a." + className);
    aTags.forEach(function (aTag) {
      var spanTag = document.createElement("span");
      spanTag.classList.add("cart-icon");
      aTag.appendChild(spanTag);
    });
  }
  addCartIcon("pinfo-to-cart");
  addCartIcon("pinfo-complementary-to-cart");


  const phoneElement = document.querySelector('li[itemprop="telephone"]');
  const phoneNumber = phoneElement.textContent.trim().match(/[0-9]+/)[0];
  const phoneLink = document.createElement("a");
  phoneLink.setAttribute("href", "tel:" + phoneNumber);
  phoneLink.textContent = "501-310-083";
  phoneElement.innerHTML = "";
  phoneElement.appendChild(phoneLink);
  phoneElement.appendChild(document.createTextNode(" Pon-Pt 8:00 - 16:00"));


  document.addEventListener("click", function (event) {
    if (event.target.matches(".view_stock_info_text_not")) {
      var modalElement = document.getElementById("rc_window5_title");
      if (modalElement) {
        modalElement.innerHTML = "Powiadom mnie o dostępności";
      }
    }
  });


  var element = document.querySelector('span[itemprop="gtin12"]');
  if (element) {
    element.removeAttribute("itemprop");
  }


  var divElement = document.querySelector(".view_stock_qauntity_info");
if (divElement) { // Sprawdzamy, czy element istnieje
  var quantityText = divElement.textContent.trim();
  var spanElement = document.createElement("span");
  spanElement.className = "quantity_info_text";
  spanElement.textContent = " w sklepie internetowym";
  divElement.appendChild(spanElement);
} else {
  console.log("Element .view_stock_qauntity_info nie został znaleziony.");
}


  var authorLinks = document.getElementsByClassName("pinfo-author");
  for (var i = authorLinks.length - 1; i >= 0; i--) {
    var authorLink = authorLinks[i];
    var authorNames = authorLink.innerText.split(", ");
    authorLink.innerText = "";
    var authorsDiv = document.createElement("div");
    authorsDiv.classList.add("pinfo-authors");
    function removeDiacritics(str) {
      var map = {
        ą: "a",
        ć: "c",
        ę: "e",
        ł: "l",
        ń: "n",
        ó: "o",
        ś: "s",
        ź: "z",
        ż: "z",
        Ą: "A",
        Ć: "C",
        Ę: "E",
        Ł: "L",
        Ń: "N",
        Ó: "O",
        Ś: "S",
        Ź: "Z",
        Ż: "Z",
        à: "a",
        á: "a",
        â: "a",
        ã: "a",
        ä: "a",
        å: "a",
        æ: "ae",
        À: "A",
        Á: "A",
        Â: "A",
        Ã: "A",
        Ä: "A",
        Å: "A",
        Æ: "AE",
        ç: "c",
        Ç: "C",
        è: "e",
        é: "e",
        ê: "e",
        ë: "e",
        È: "E",
        É: "E",
        Ê: "E",
        Ë: "E",
        ì: "i",
        í: "i",
        î: "i",
        ï: "i",
        Ì: "I",
        Í: "I",
        Î: "I",
        Ï: "I",
        ñ: "n",
        Ñ: "N",
        ò: "o",
        ó: "o",
        ô: "o",
        õ: "o",
        ö: "o",
        ø: "o",
        Ò: "O",
        Ó: "O",
        Ô: "O",
        Õ: "O",
        Ö: "O",
        Ø: "O",
        ù: "u",
        ú: "u",
        û: "u",
        ü: "u",
        Ù: "U",
        Ú: "U",
        Û: "U",
        Ü: "U",
        ý: "y",
        ÿ: "y",
        Ý: "Y",
        Ÿ: "Y",
        ß: "ss",
        œ: "oe",
        Œ: "OE",
        č: "c",
        Č: "C",
        ď: "d",
        Ď: "D",
        ě: "e",
        Ě: "E",
        ľ: "l",
        Ľ: "L",
        ň: "n",
        Ň: "N",
        ř: "r",
        Ř: "R",
        š: "s",
        Š: "S",
        ť: "t",
        Ť: "T",
        ů: "u",
        Ů: "U",
        ž: "z",
        Ž: "Z",
      };
      return str.replace(
        /[ąćęłńóśźżĄĆĘŁŃÓŚŹŻàáâãäåæÀÁÂÃÄÅÆçÇèéêëÈÉÊËìíîïÌÍÎÏñÑòóôõöøÒÓÔÕÖØùúûüÙÚÛÜýÿÝŸßœŒčČďĎěĚľĽňŇřŘšŠťŤůŮžŽ'".()&]/g,
        function (match) {
          return map[match] || "";
        }
      );
    }
    for (var j = 0; j < authorNames.length; j++) {
      var authorName = authorNames[j];
      var names = authorName.split(" ");
      var firstName = names[0];
      var lastName = names.slice(1).join("-");
      firstName = removeDiacritics(firstName);
      lastName = removeDiacritics(lastName);
      firstName = firstName.split(".").join("");
      lastName = lastName.split(".").join("");
      firstName = firstName.split("'").join("");
      lastName = lastName.split("'").join("");
      firstName = firstName.split("(").join("");
      lastName = lastName.split("(").join("");
      firstName = firstName.split(")").join("");
      lastName = lastName.split(")").join("");
      firstName = firstName.toLowerCase();
      lastName = lastName.toLowerCase();
      var newAuthorLink = document.createElement("a");
      var authorUrl = "autor-" + encodeURIComponent(firstName);
      if (lastName) {
        authorUrl += "-" + encodeURIComponent(lastName);
      }
      newAuthorLink.href = authorUrl;
      newAuthorLink.innerText = authorName;
      newAuthorLink.classList.add("pinfo-author");
      authorsDiv.appendChild(newAuthorLink);
      if (j < authorNames.length - 1) {
        authorsDiv.appendChild(document.createTextNode(", "));
      }
    }
    authorLink.parentNode.insertBefore(authorsDiv, authorLink);
    authorLink.parentNode.removeChild(authorLink);
  }


  
  var technicalRow = document.querySelector(
    "#tab-2 > div > ul.technical-row:nth-of-type(2)"
  );
  if (!technicalRow) {
    technicalRow = document.querySelector("ul.technical-row:only-child");
  }
  if (technicalRow) {
    var firstLiDesc = technicalRow.querySelector(
      "li.technical-data > p.technical-desc"
    );
    var firstLiAuthors = firstLiDesc.textContent.split(",");
    createAuthorLinks(firstLiAuthors, firstLiDesc);
    var secondLi = technicalRow.querySelector("li:nth-of-type(2)");
    if (secondLi) {
      var secondLiDesc = secondLi.querySelector("p.technical-desc");
      var secondLiPublisher = secondLiDesc.textContent.trim();
      createPublisherLink(secondLiPublisher, secondLiDesc);
    }
  }
  function removeDiacriticsAndSpecialChars(str) {
    var map = {
      ą: "a",
      ć: "c",
      ę: "e",
      ł: "l",
      ń: "n",
      ó: "o",
      ś: "s",
      ź: "z",
      ż: "z",
      Ą: "A",
      Ć: "C",
      Ę: "E",
      Ł: "L",
      Ń: "N",
      Ó: "O",
      Ś: "S",
      Ź: "Z",
      Ż: "Z",
      à: "a",
      á: "a",
      â: "a",
      ã: "a",
      ä: "a",
      å: "a",
      æ: "ae",
      À: "A",
      Á: "A",
      Â: "A",
      Ã: "A",
      Ä: "A",
      Å: "A",
      Æ: "AE",
      ç: "c",
      Ç: "C",
      è: "e",
      é: "e",
      ê: "e",
      ë: "e",
      È: "E",
      É: "E",
      Ê: "E",
      Ë: "E",
      ì: "i",
      í: "i",
      î: "i",
      ï: "i",
      Ì: "I",
      Í: "I",
      Î: "I",
      Ï: "I",
      ñ: "n",
      Ñ: "N",
      ò: "o",
      ó: "o",
      ô: "o",
      õ: "o",
      ö: "o",
      ø: "o",
      Ò: "O",
      Ó: "O",
      Ô: "O",
      Õ: "O",
      Ö: "O",
      Ø: "O",
      ù: "u",
      ú: "u",
      û: "u",
      ü: "u",
      Ù: "U",
      Ú: "U",
      Û: "U",
      Ü: "U",
      ý: "y",
      ÿ: "y",
      Ý: "Y",
      Ÿ: "Y",
      ß: "ss",
      œ: "oe",
      Œ: "OE",
      č: "c",
      Č: "C",
      ď: "d",
      Ď: "D",
      ě: "e",
      Ě: "E",
      ľ: "l",
      Ľ: "L",
      ň: "n",
      Ň: "N",
      ř: "r",
      Ř: "R",
      š: "s",
      Š: "S",
      ť: "t",
      Ť: "T",
      ů: "u",
      Ů: "U",
      ž: "z",
      Ž: "Z",
    };
    return str.replace(
      /[ąćęłńóśźżĄĆĘŁŃÓŚŹŻàáâãäåæÀÁÂÃÄÅÆçÇèéêëÈÉÊËìíîïÌÍÎÏñÑòóôõöøÒÓÔÕÖØùúûüÙÚÛÜýÿÝŸßœŒčČďĎěĚľĽňŇřŘšŠťŤůŮžŽ'".()&]/g,
      function (match) {
        return map[match] || "";
      }
    );
  }
  function createAuthorLinks(authors, container) {
    container.innerHTML = "";
    for (var i = 0; i < authors.length; i++) {
      var author = authors[i].trim();
      var cleanedAuthor = removeDiacriticsAndSpecialChars(author);
      cleanedAuthor = cleanedAuthor.toLowerCase();
      var nameParts = cleanedAuthor.split(" ");
      var firstName = nameParts[0];
      var lastName = nameParts.slice(1).join("-");
      var link = document.createElement("a");
      var authorUrl = "/autor-" + encodeURIComponent(firstName);
      if (lastName) {
        authorUrl += "-" + encodeURIComponent(lastName);
      }
      link.href = authorUrl;
      link.textContent = author;
      container.appendChild(link);
      if (i < authors.length - 1) {
        var separator = document.createTextNode(", ");
        container.appendChild(separator);
      }
    }
  }
  function replacePolishLetters(text) {
    var polishLetters = {
      ą: "a",
      ć: "c",
      ę: "e",
      ł: "l",
      ń: "n",
      ó: "o",
      ś: "s",
      ż: "z",
      ź: "z",
    };
    return text.replace(/[ąćęłńóśżź]/g, function (match) {
      return polishLetters[match];
    });
  }
  function createPublisherLink(publisher, container) {
    container.innerHTML = "";
    var formattedPublisher = replacePolishLetters(publisher.toLowerCase());
    var link = document.createElement("a");
    link.href =
      "/wydawnictwo-" +
      formattedPublisher
        .split("&")
        .join("-")
        .split(" ")
        .join("-")
        .split("!")
        .join("")
        .split(".")
        .join("");
    link.textContent = publisher;
    container.appendChild(link);
  }


  
  var informDivs = document.querySelectorAll(".view_stock_info_text_not");
informDivs.forEach(function (informDiv) {
  if (
    informDiv &&
    informDiv.textContent.trim() === "Poinformuj mnie o ponownej dostępności"
  ) {
    var productInside = informDiv.closest(".product-inside");
    if (productInside) { // Sprawdzamy, czy znaleziono element .product-inside
      var priceElement = productInside.querySelector(".view_price_global");
      var hasPrice = priceElement && priceElement.querySelector(".view_price");
      if (!hasPrice) {
        var imgElement = productInside.querySelector(".product-photo img");
        if (imgElement) {
          imgElement.style.opacity = "0.5";
          var unavailableText = document.createElement("div");
          unavailableText.textContent = "Produkt niedostępny";
          unavailableText.classList.add("unavailable-text");
          unavailableText.style.position = "absolute";
          unavailableText.style.top = "50%";
          unavailableText.style.left = "50%";
          unavailableText.style.transform = "translate(-50%, -50%)";
          unavailableText.style.fontWeight = "600";
          unavailableText.style.fontSize = "1.6rem";
          unavailableText.style.color = "#fff";
          unavailableText.style.backgroundColor = "#07350a";
          unavailableText.style.padding = "5px";
          unavailableText.style.opacity = ".9";
          productInside
            .querySelector(".product-photo")
            .appendChild(unavailableText);
        }
      } else {
        var imgElement = productInside.querySelector(".product-photo img");
        if (imgElement) {
          imgElement.style.opacity = "0.9";
          var lastPieceText = document.createElement("div");
          lastPieceText.textContent = "Ostatnie egzemplarze";
          lastPieceText.classList.add("last-piece-text");
          lastPieceText.style.position = "absolute";
          lastPieceText.style.top = "50%";
          lastPieceText.style.left = "50%";
          lastPieceText.style.transform = "translate(-50%, -50%)";
          lastPieceText.style.fontWeight = "600";
          lastPieceText.style.fontSize = "1.6rem";
          lastPieceText.style.color = "#fff";
          lastPieceText.style.backgroundColor = "#d9534f";
          lastPieceText.style.padding = "5px";
          lastPieceText.style.opacity = ".9";
          productInside
            .querySelector(".product-photo")
            .appendChild(lastPieceText);
        }
      }
    } else {
      console.log("Element .product-inside nie został znaleziony.");
    }
  }
});


  var pinfoContainerItem = document.querySelector(".view_price_shipping");
  if (pinfoContainerItem && pinfoContainerItem.innerHTML.trim() === "") {
    pinfoContainerItem.style.display = "none";
  }

  var listingSorting = document.querySelector(".container-fluid.listing-sorting");

  // Sprawdź, czy element istnieje
  if (listingSorting) {
    var newFilterBox = document.createElement("div");
    newFilterBox.className = "filter-box";

    var newFilterTitle = document.createElement("h5");
    newFilterTitle.className = "filter-title";
    newFilterTitle.style.cssText =
      "font-size:2rem;color:#fff;background-color:#101828;padding: .7rem;";
    newFilterTitle.setAttribute("data-toggle", "collapse");
    newFilterTitle.setAttribute("data-target", "#newFilterContent");
    newFilterTitle.innerHTML =
      "Wyłącz produkty niedostępne oraz ostatnie egzemplarze <a class='filter-collapse' href='javascript:;' style='font-size:3.5rem;color:#fff;'></a>";

    var newFilterContent = document.createElement("div");
    newFilterContent.className = "filter-content collapse fade";
    newFilterContent.id = "newFilterContent";

    var newCheckbox = document.createElement("input");
    newCheckbox.type = "checkbox";
    newCheckbox.id = "newCheckbox";
    newCheckbox.name = "newCheckbox";
    newCheckbox.value = "newCheckbox";

    var newLabel = document.createElement("label");
    newLabel.setAttribute("for", "newCheckbox");
    newLabel.innerHTML =
      "Pokaż produkty dostępne od ręki w magazynie sklepu internetowego";
    newLabel.style.cssText = "font-size:1.55rem;color:#101828;";

    newFilterContent.appendChild(newCheckbox);
    newFilterContent.appendChild(newLabel);

    newFilterBox.appendChild(newFilterTitle);
    newFilterBox.appendChild(newFilterContent);

    var nextContainer = listingSorting.nextElementSibling;
    listingSorting.parentNode.insertBefore(newFilterBox, nextContainer);
  } else {
    console.info(
      "Element '.container-fluid.listing-sorting' nie istnieje na tej stronie."
    );
  }



  var currentURL = window.location.href;

  // Usuń stan checkboxa dla określonych stron
  if (
    currentURL.includes("https://takczytam.com/q/") ||
    currentURL === "https://takczytam.com/ostatnie-egzemplarze" ||
    currentURL === "https://takczytam.com/produkty-niedostepne"
  ) {
    localStorage.removeItem("checkboxState");
  }
  
  // Znajdź checkbox w DOM
  var checkbox = document.getElementById("newCheckbox");
  var productDivs = document.querySelectorAll(
    ".one.carusel-item.product-one.product-item.panel.col-xs-24.col-md-6"
  );
  
  // Jeśli checkbox istnieje, wykonaj odpowiednie operacje
  if (checkbox) {
    var isChecked = localStorage.getItem("checkboxState") === "true";
    var unavailableProducts = document.querySelectorAll(".unavailable-text");
    var lastPieceProducts = document.querySelectorAll(".last-piece-text");
  
    if (isChecked) {
      checkbox.checked = true; // Zaznacz checkbox
      hideUnavailableProducts(); // Ukryj niedostępne produkty
    }
  
    // Obsługa zdarzenia zmiany stanu checkboxa
    checkbox.addEventListener("change", function () {
      localStorage.setItem("checkboxState", checkbox.checked);
      if (checkbox.checked) {
        hideUnavailableProducts();
      } else {
        showAllProducts();
      }
    });
  } else {
    console.info("Checkbox o ID 'newCheckbox' nie istnieje na tej stronie.");
  }
  
  function hideUnavailableProducts() {
    unavailableProducts.forEach(function (unavailableProduct) {
      var productDiv = unavailableProduct.closest(
        ".one.carusel-item.product-one.product-item.panel.col-xs-24.col-md-6"
      );
      if (productDiv) {
        productDiv.style.display = "none";
      }
    });
    lastPieceProducts.forEach(function (lastPieceProduct) {
      var productDiv = lastPieceProduct.closest(
        ".one.carusel-item.product-one.product-item.panel.col-xs-24.col-md-6"
      );
      if (productDiv) {
        productDiv.style.display = "none";
      }
    });
  }
  function showAllProducts() {
    unavailableProducts.forEach(function (unavailableProduct) {
      var productDiv = unavailableProduct.closest(
        ".one.carusel-item.product-one.product-item.panel.col-xs-24.col-md-6"
      );
      if (productDiv && productDiv.style.display === "none") {
        productDiv.style.display = "block";
      }
    });
    lastPieceProducts.forEach(function (lastPieceProduct) {
      var productDiv = lastPieceProduct.closest(
        ".one.carusel-item.product-one.product-item.panel.col-xs-24.col-md-6"
      );
      if (productDiv && productDiv.style.display === "none") {
        productDiv.style.display = "block";
      }
    });
  }

  
  

  var spanElement = document.querySelector("#invoice_div label.rc-rc span");
  if (spanElement) {
    spanElement.textContent =
      "Proszę o załączenie faktury VAT z odroczonym terminem płatności (14 dni - OPCJA TYLKO DLA SZKÓŁ I INSTYTUCJI PUBLICZNYCH)";
  } else {
    console.error(
      'Nie można znaleźć elementu span lub input o id "receiver[14d_payment]" wewnątrz diva o id "invoice_div".'
    );
  }


  var cenaElement1 = document.querySelector('[itemprop="price"]');
var cenaElement2 = document.querySelector(".pinfo-price__omnibus strong");

if (cenaElement1) { // Sprawdzenie, czy cenaElement1 istnieje
  var cenaValue = cenaElement1.getAttribute("content");
  if (cenaValue) { // Sprawdzenie, czy cenaValue istnieje
    var formattedCena = parseFloat(cenaValue).toFixed(2) + " PLN";
    if (cenaElement2) { // Sprawdzenie, czy cenaElement2 istnieje
      cenaElement2.innerText = formattedCena;
    }
  }
}


  
  var productInfoElements = document.querySelectorAll(".product-info");
  productInfoElements.forEach(function (productInfo) {
    var stockInfoElement = productInfo.querySelector(
      ".product-quantity .view_stock_info_text_not"
    );
    if (
      stockInfoElement &&
      stockInfoElement.textContent.trim() ===
        "Poinformuj mnie o ponownej dostępności"
    ) {
      var priceElement = productInfo.querySelector(".view_price_global");
      var hasPrice = priceElement && priceElement.querySelector(".view_price");
      if (hasPrice) {
        var productNameElement = productInfo.querySelector(".product-name a");
        var productHref = productNameElement.getAttribute("href");
        var newLink = document.createElement("a");
        newLink.setAttribute("href", productHref);
        newLink.setAttribute("data-toggle", "tooltip");
        newLink.setAttribute(
          "data-original-title",
          "Kliknij przycisk ZAMÓW Z INNEJ KSIĘGARNI na karcie produktu, sprawdź dostępność w wybranej księgarni i zamów, jeśli produkt jest dostępny."
        );
        newLink.textContent = "Zamów z księgarni stacjonarnej";
        Object.assign(newLink.style, { color: "#0a0735", fontSize: "16px" });
        var headerElement = productInfo.querySelector("header");
        headerElement.appendChild(newLink);
      } else {
        console.log("Produkt niedostępny, link nie został utworzony.");
      }
    }
  });


  
  window.onload = function () {
    var stockInfoElementNot = document.querySelector(
      ".view_stock_info_text_not"
    );
    var stockInfoElementOk = document.querySelector(".view_stock_info_text_ok");
    if (stockInfoElementNot || stockInfoElementOk) {
      var technicalRowOrder = document.querySelector(
        "ul.technical-row:nth-child(1)"
      );
      if (technicalRowOrder) {
        var quantityElements = technicalRowOrder.querySelectorAll(
          "li.technical-data p.technical-desc"
        );
        var available = !1;
        quantityElements.forEach(function (element) {
          var quantity = parseInt(element.textContent, 10);
          if (quantity > 0) {
            available = !0;
          }
        });
        var priceContainerMobile = document.querySelector(
          "div.row.hidden-md.hidden-lg.visible-xs.visible-sm div.pinfo-top.col-xs-24 div.pinfo-price.price_produsts_info div.view_price_global"
        );
        var priceContainerDesktop = document.querySelector(
          "div.pinfo-top-copy.hidden-sm.hidden-xs.visible-md.visible-lg div.pinfo-price.price_produsts_info div.view_price_global"
        );
        if (!priceContainerMobile && !priceContainerDesktop) {
          console.warn(
            "Nie znaleziono odpowiedniego kontenera .view_price_global"
          );
        } else {
          function addOrderButton(container, isMobile) {
            if (!stockInfoElementNot) return;
            var buttonOrder = document.createElement("a");
            buttonOrder.innerHTML =
                'ZAMÓW Z INNEJ KSIĘGARNI TAK CZYTAM<span class="mdi mdi-store" style="margin-left: 4px;"></span>';
            buttonOrder.classList.add(
                "button",
                "button-light",
                "order-stock-btn"
            );
            buttonOrder.setAttribute("data-toggle", "tooltip");
            buttonOrder.setAttribute(
                "data-original-title",
                "Ostatnie egzemplarze. Sprawdź dostępność w wybranej księgarni TAK CZYTAM i zamów."
            );
            buttonOrder.setAttribute("href", "javascript:;");
            buttonOrder.style.backgroundColor = "#FFA726";
            buttonOrder.style.color = "#07350a";
            buttonOrder.style.maxWidth = "max-content";
            buttonOrder.style.margin = "15px 0px";
            buttonOrder.style.fontWeight = "bold";
            if (isMobile) {
                buttonOrder.style.display = "block";
                buttonOrder.style.margin = "15px auto";
                buttonOrder.style.maxWidth = "100%";
            } else {
                buttonOrder.style.maxWidth = "max-content";
                buttonOrder.style.margin = "15px 0";
            }
            
            buttonOrder.addEventListener("click", function () {
                var overlay = document.createElement("div");
                overlay.classList.add("modal-overlay");
                overlay.style.position = "fixed";
                overlay.style.top = "0";
                overlay.style.left = "0";
                overlay.style.width = "100%";
                overlay.style.height = "100%";
                overlay.style.backgroundColor = "#07350a";
                overlay.style.opacity = "0.5";
                overlay.style.zIndex = "1049";
                var modal = document.createElement("div");
                modal.classList.add("modal");
                var clonedTechnicalRowOrder = technicalRowOrder.cloneNode(true);
        
                // Zamiast ukrywania przycisków, zastępujemy je nowymi
                var linksToReplace = clonedTechnicalRowOrder.querySelectorAll(
                    "ul:nth-child(1) > li > p > a"
                );
                linksToReplace.forEach(function (link) {
                    var newButton = document.createElement("a");
                    newButton.textContent = "Zamów";
                    newButton.classList.add("button", "button-primary");
                    newButton.setAttribute('id', "order_last_stock");
                    newButton.style.backgroundColor = "#FFA726";
                    newButton.style.color = "#07350a";
                    newButton.style.fontWeight = "bold";
                    newButton.style.cursor = "pointer";
                    newButton.style.padding = "6px 12px";
                    newButton.style.fontSize = "12px";
                    link.parentNode.replaceChild(newButton, link);
                });
        
                modal.innerHTML = `<div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header" style="position: relative;">
                                            <div style="margin-right: 25px;">
                                                <h3 class="modal-title" style="font-size: 2rem;">Sprawdź dostępność w wybranej księgarni i zamów z wysyłką</h3>
                                                <p style="font-size: 1.5rem;">Jeśli książka jest dostępna w którejś z poniższych księgarni, to możemy ją do Ciebie wysłać.</p>
                                                <p>Kliknij przycisk ZAMÓW przy danej księgarni i dodaj książkę do widgetu zamówienia ostatnich egzemplarzy.</p>
                                                <p>Możesz dodać wiele różnych produktów, pod warunkiem, że pochodzą one z jednej księgarni.</p>
                                            </div>
                                            <button type="button" class="close" data-dismiss="modal" style="font-size: 40px;position: absolute;top: 0;right: 5px;opacity: 1;">×</button>
                                        </div>
                                        <div class="modal-body" style="max-height: 50vh; overflow: auto;">${clonedTechnicalRowOrder.outerHTML}</div>
                                        <div class="modal-footer" style="padding: 0; text-align: center;">
                                        </div>
                                    </div>
                                </div>`;
                document.body.appendChild(overlay);
                document.body.appendChild(modal);
                var closeButton = modal.querySelector(".close");
                closeButton.addEventListener("click", function () {
                    modal.style.display = "none";
                    document.body.removeChild(modal);
                    document.body.removeChild(overlay);
                });
                modal.addEventListener("click", function (event) {
                    if (!event.target.closest(".modal-content")) {
                        modal.style.display = "none";
                        document.body.removeChild(modal);
                        document.body.removeChild(overlay);
                    }
                });
                modal.style.display = "block";
                overlay.style.display = "block";
            });
            container.appendChild(buttonOrder);
        }
        
          function createBadge(isMobile) {
            var badge = document.createElement("span");
            badge.innerHTML =
              '<span class="mdi mdi-alert" style="margin-right: 4px;"></span>Tego produktu nie znajdziesz już w naszych księgarniach!';
            badge.classList.add("badge", "badge-danger");
            badge.style.backgroundColor = "#d9534f";
            badge.style.color = "white";
            badge.style.padding = "10px";
            badge.style.margin = "15px 0";
            badge.style.display = "inline-block";
            badge.style.borderRadius = "4px";
            if (isMobile) {
              badge.style.fontSize = "14px";
              badge.style.padding = "8px";
              badge.style.margin = "15px auto";
              badge.style.textAlign = "center";
            } else {
              badge.style.fontSize = "16px";
              badge.style.width = "fit-content";
            }
            return badge;
          }
          if (available) {
            if (priceContainerMobile) {
              addOrderButton(priceContainerMobile, !0);
            }
            if (priceContainerDesktop) {
              addOrderButton(priceContainerDesktop, !1);
            }
          } else {
            if (priceContainerMobile) {
              priceContainerMobile.appendChild(createBadge(!0));
            }
            if (priceContainerDesktop) {
              priceContainerDesktop.appendChild(createBadge(!1));
            }
          }
        }
      }
      if (stockInfoElementNot || stockInfoElementOk) {
        var priceContainerMobile = document.querySelector(
          "div.row.hidden-md.hidden-lg.visible-xs.visible-sm div.pinfo-top.col-xs-24 div.pinfo-price.price_produsts_info div.view_price_global"
        );
        var priceContainerDesktop = document.querySelector(
          "div.pinfo-top-copy.hidden-sm.hidden-xs.visible-md.visible-lg div.pinfo-price.price_produsts_info div.view_price_global"
        );
        var badgeExists = document.querySelector(".badge-danger");
        var additionalButtonsContainer = document.querySelector(
          ".additional-buttons-container"
        );
        function addReservationButton(container, isMobile) {
          if (badgeExists) return;
          var button = document.createElement("a");
          button.innerHTML =
            'REZERWACJA NA MIEJSCU<span class="mdi mdi-email" style="margin-left: 4px;"></span>';
          button.classList.add("button", "button-light", "stock-info-btn");
          button.setAttribute("data-toggle", "tooltip");
          button.setAttribute(
            "data-original-title",
            "Sprawdź dostępność w wybranej księgarni i zarezerwuj produkt"
          );
          button.setAttribute("href", "javascript:;");
          button.style.backgroundColor = "var(--emerald-green)";
          button.style.color = "white";
          button.style.maxWidth = "max-content";
          button.style.margin = "15px 0px";
          button.style.fontWeight = "bold";
          if (isMobile) {
            button.style.display = "block";
            button.style.margin = "15px auto";
            button.style.maxWidth = "100%";
          } else {
            button.style.maxWidth = "max-content";
            button.style.margin = "15px 0";
          }
          button.addEventListener("click", function () {
            var overlay = document.createElement("div");
            overlay.classList.add("modal-overlay");
            overlay.style.position = "fixed";
            overlay.style.top = "0";
            overlay.style.left = "0";
            overlay.style.width = "100%";
            overlay.style.height = "100%";
            overlay.style.backgroundColor = "rgba(7, 53, 10, 0.5)";
            overlay.style.zIndex = "1049";
            overlay.style.display = "flex";
            overlay.style.justifyContent = "center";
            overlay.style.alignItems = "center";
            var modal = document.createElement("div");
            modal.classList.add("modal");
            var clonedTechnicalRow = technicalRowOrder.cloneNode(!0);
            modal.innerHTML = `<div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header" style="position: relative;">
                                    <div style="margin-right: 25px;">
                                        <h3 class="modal-title" style="font-weight: bold; margin-bottom: 8px; text-align: center;">
      Sprawdź dostępność w wybranej księgarni i zarezerwuj
    </h3><div style="height: 140px;overflow-y: auto;padding: 10px;">
    <p style="font-size: 1em; line-height: 1.6; color: #333; margin-bottom: 10px;">
      Jeśli książka jest dostępna, kliknij <span style="color: #07350a; font-weight: bold;">zielony przycisk</span> obok ilości i dodaj produkt do koszyka rezerwacji. Przycisk nie wyświetla się, gdy stan wynosi 0.
    </p>
    <p style="color: #d25257; font-weight: bold; font-size: 1.1em; margin-top: 20px; margin-bottom: 10px;">
      Ważne informacje dotyczące rezerwacji:
    </p>
    <p style="font-size: 1em; line-height: 1.6; color: #444; margin-bottom: 8px;">
      Rezerwujemy wyłącznie produkty, które są dostępne na miejscu w danej księgarni. Nie przenosimy produktów między księgarniami.
    </p>
    <p style="font-size: 1em; line-height: 1.6; color: #444; margin-bottom: 10px;">
      Stany magazynowe aktualizowane są <span style="font-weight: bold; color: #d25257;">co 24 godziny</span>, jednak rezerwacja nie gwarantuje pełnej dostępności produktu. W czasie rzeczywistym książki pozostają w sprzedaży stacjonarnej, dlatego istnieje możliwość, że produkt zostanie zakupiony przed zrealizowaniem rezerwacji.
    </p>
    <p style="font-size: 1em; line-height: 1.6; color: #333; font-style: italic; margin-top: 15px;">
      Dziękujemy za wyrozumiałość i zapraszamy do kontaktu w razie dodatkowych pytań.
    </p></div></div><button type="button" class="close" data-dismiss="modal" style="font-size: 40px;position: absolute;top: 0;right: 5px;opacity: 1;">×</button>
                                </div>
                                <div class="modal-body" style="max-height: 50vh; overflow: auto;">
                                    ${clonedTechnicalRow.outerHTML}
                                </div>
                                <div class="modal-footer">
                                </div>
                            </div>
                        </div>`;
            overlay.appendChild(modal);
            document.body.appendChild(overlay);
            var closeButton = modal.querySelector(".close");
            closeButton.addEventListener("click", function () {
              document.body.removeChild(overlay);
            });
            overlay.addEventListener("click", function (event) {
              if (!event.target.closest(".modal-content")) {
                document.body.removeChild(overlay);
              }
            });
            modal.style.display = "block";
            overlay.style.display = "block";
          });
          container.appendChild(button);
        }
        if (!badgeExists) {
          if (
            stockInfoElementOk &&
            !stockInfoElementNot &&
            additionalButtonsContainer
          ) {
            addReservationButton(additionalButtonsContainer, !1);
          }
          if (stockInfoElementNot) {
            if (priceContainerMobile) {
              addReservationButton(priceContainerMobile, !0);
            }
            if (priceContainerDesktop) {
              addReservationButton(priceContainerDesktop, !1);
            }
          }
        }
      }
    }
  };

  
  document.addEventListener("DOMContentLoaded", () => {
    console.log("Skrypt został załadowany.");
    const headerWishlist = document.getElementById("header_wishlist");
    const headerShoppingCart = document.getElementById("header_shopping_cart");
    if (headerWishlist && headerShoppingCart) {
      console.log(
        "Znaleziono elementy header_wishlist i header_shopping_cart."
      );
      const reservationBox = createReservationBox();
      headerWishlist.parentNode.insertBefore(
        reservationBox,
        headerShoppingCart
      );
      let reservations = loadReservations();
      document.addEventListener("updateReservation", (event) => {
        reservations = event.detail.reservations;
        updateReservationCounter();
        renderReservations();
      });
      updateReservationCounter();
      function renderReservations() {
        const reservationList = document.getElementById("reservation_list");
        reservationList.innerHTML = "";
        Object.entries(reservations).forEach(([city, products]) => {
          const cityHeader = document.createElement("h4");
          cityHeader.textContent = city;
          cityHeader.style.fontWeight = "bold";
          cityHeader.style.fontSize = "1.5rem";
          reservationList.appendChild(cityHeader);
          products.forEach(({ title, quantity, maxQuantity }, index) => {
            const productItem = document.createElement("li");
            productItem.classList.add("technical-data");
            productItem.style.display = "flex";
            productItem.style.justifyContent = "space-between";
            productItem.style.alignItems = "center";
            productItem.style.borderBottom = "1.2px solid #bebebe";
            productItem.style.paddingBottom = "7px";
            productItem.style.fontSize = "1.5rem";
            const productText = document.createElement("span");
            productText.textContent = `${title}: ${quantity}/${maxQuantity} egz.`;
            productItem.appendChild(productText);
            const decreaseButton = document.createElement("button");
            decreaseButton.textContent = "-";
            decreaseButton.style.marginLeft = "5px";
            decreaseButton.disabled = quantity === 1;
            decreaseButton.addEventListener("click", () => {
              handleQuantityChange(products, index, -1);
            });
            const increaseButton = document.createElement("button");
            increaseButton.textContent = "+";
            increaseButton.style.marginLeft = "5px";
            increaseButton.addEventListener("click", () => {
              handleQuantityChange(products, index, 1);
            });
            const removeButton = document.createElement("a");
            removeButton.classList.add(
              "button",
              "waves-effect",
              "remove-from-cart"
            );
            removeButton.textContent = "Usuń";
            removeButton.style.marginLeft = "10px";
            removeButton.addEventListener("click", () => {
              products.splice(index, 1);
              if (products.length === 0) {
                delete reservations[city];
              }
              saveReservations(reservations);
              updateReservationCounter();
              renderReservations();
              const event = new CustomEvent("updateReservation", {
                detail: { reservations },
              });
              document.dispatchEvent(event);
            });
            productItem.appendChild(decreaseButton);
            productItem.appendChild(increaseButton);
            productItem.appendChild(removeButton);
            reservationList.appendChild(productItem);
          });
        });
      }
      function addProduct(event) {
        event.preventDefault();
        const parentLi = event.target.closest("li");
        const cityName = parentLi
          .querySelector(".technical-title")
          ?.textContent.trim();
        const availableQuantity = parseInt(
          parentLi.querySelector(".technical-desc")?.textContent.trim(),
          10
        );
        const productTitle = document
          .querySelector("h1.pinfo-name")
          ?.textContent.trim();
        const priceElement = document.querySelector("span[itemprop='price']");
        const productPrice = priceElement?.getAttribute("content") || null;
        const imageElement = document.querySelector(
          "a#link_img_main_0 img[itemprop='image']"
        );
        const imageUrl = imageElement?.getAttribute("data-zoom-image") || null;
        const symbolNumber = document.querySelector('.pinfo_model')?.textContent.trim();
        if (!productTitle || !cityName || isNaN(availableQuantity)) {
          salert_mini(
            "Nie udało się dodać rezerwacji. Brak wymaganych danych.",
            "warning"
          );
          return;
        }
        if (Object.keys(reservations).length > 0 && !reservations[cityName]) {
          salert_mini(
            "Możesz rezerwować produkty tylko w jednym mieście! Usuń rezerwacje z wybranego wcześniej miasta",
            "warning"
          );
          return;
        }
        if (!reservations[cityName]) {
          reservations[cityName] = [];
        }
        const existingProduct = reservations[cityName].find(
          (item) => item.title === productTitle
        );
        if (existingProduct) {
          if (existingProduct.quantity < existingProduct.maxQuantity) {
            existingProduct.quantity++;
          } else {
            salert_mini(
              "Osiągnięto maksymalną ilość produktu do rezerwacji w danym miejscu.",
              "warning"
            );
            return;
          }
        } else {
          reservations[cityName].push({
            title: productTitle,
            quantity: 1,
            maxQuantity: availableQuantity,
            price: productPrice,
            imageUrl: imageUrl,
            symbol: symbolNumber,
          });
        }
        saveReservations(reservations);
        updateReservationCounter();
        renderReservations();
        salert_mini("Dodano produkt do koszyka rezerwacji.", "success");
      }
      document
        .getElementById("send_reservation")
        .addEventListener("click", () => {
          if (Object.keys(reservations).length === 0) {
            salert_mini("Brak rezerwacji do wysłania!", "warning");
            return;
          }
          window.location.href = "https://takczytam.com/formularz-rezerwacji";
        });
      document
        .querySelectorAll("ul.technical-row > li > p > a")
        .forEach((button) => {
          button.addEventListener("click", addProduct);
        });
      document.addEventListener("click", (event) => {
        const modal = document.querySelector(".modal");
        if (modal && modal.contains(event.target)) {
          const button = event.target.closest("a");
          if (button && button.classList.contains("button-dark")) {
            addProduct(event);
          }
        }
      });
      function createReservationBox() {
        const reservationBox = document.createElement("div");
        reservationBox.id = "reservation_box";
        reservationBox.className =
          "vertical-center account col-xxs-4 col-xs-3 col-sm-2 col-md-1 text-center";
        reservationBox.style.position = "relative";
        reservationBox.style.display = "inline-block";
        reservationBox.style.color = "#07350a";
        reservationBox.style.fontSize = "25px";
        const reservationIcon = document.createElement("i");
        reservationIcon.className = "mdi mdi-store";
        reservationIcon.id = "reservation_icon";
        reservationIcon.style.cursor = "pointer";
        reservationBox.appendChild(reservationIcon);
        const reservationCounter = document.createElement("span");
        reservationCounter.id = "reservation_counter";
        reservationCounter.className = "ajax-items-wishlist-badge";
        reservationCounter.style.fontSize = "1.2rem";
        reservationCounter.style.fontWeight = "700";
        reservationCounter.style.color = "#fff";
        reservationCounter.style.boxShadow = "0 0 2px 0 rgba(0,0,0,.36)";
        reservationCounter.style.backgroundColor = "#d25257";
        reservationCounter.style.borderRadius = "50%";
        reservationCounter.style.width = "18px";
        reservationCounter.style.height = "18px";
        reservationCounter.style.display = "inline-block";
        reservationBox.appendChild(reservationCounter);
        const reservationDropdown = document.createElement("div");
        reservationDropdown.id = "reservation_dropdown";
        reservationDropdown.style.position = "absolute";
        reservationDropdown.style.top = "100%";
        reservationDropdown.style.left = "50%";
        reservationDropdown.style.transform = "translateX(-50%)";
        reservationDropdown.style.zIndex = "1000";
        reservationDropdown.style.backgroundColor = "white";
        reservationDropdown.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
        reservationDropdown.style.padding = "10px";
        reservationDropdown.style.borderRadius = "4px";
        reservationDropdown.style.display = "none";
        reservationDropdown.style.width = "350px";
        reservationDropdown.style.maxHeight = "50vh";
        reservationDropdown.style.overflowY = "auto";
        const reservationHeader = document.createElement("h4");
        reservationHeader.textContent = "Lista rezerwacji";
        reservationDropdown.appendChild(reservationHeader);
        const reservationList = document.createElement("ul");
        reservationList.id = "reservation_list";
        reservationDropdown.appendChild(reservationList);
        const sendReservationButton = document.createElement("a");
        sendReservationButton.className = "button button-light stock-info-btn";
        sendReservationButton.id = "send_reservation";
        sendReservationButton.textContent = "Przejdź do formularza rezerwacji";
        sendReservationButton.style.backgroundColor = "var(--emerald-green)";
        sendReservationButton.style.color = "white";
        sendReservationButton.style.maxWidth = "max-content";
        sendReservationButton.style.margin = "15px 0px";
        sendReservationButton.style.fontWeight = "bold";
        sendReservationButton.style.fontSize = "1.5rem";
        sendReservationButton.style.cursor = "pointer";
        reservationDropdown.appendChild(sendReservationButton);
        reservationBox.appendChild(reservationDropdown);
        reservationIcon.addEventListener("click", () => {
          reservationDropdown.style.display =
            reservationDropdown.style.display === "none" ||
            !reservationDropdown.style.display
              ? "block"
              : "none";
        });
        document.addEventListener("click", (event) => {
          const isInsideReservationBox = reservationBox.contains(event.target);
          const isReservationButton = event.target.id === "send_reservation";
          const isRemoveButton =
            event.target.classList.contains("remove-from-cart");
          const isQuantityButton =
            event.target.tagName === "BUTTON" &&
            (event.target.textContent === "+" ||
              event.target.textContent === "-");
          const isAddButton = event.target.closest(
            "a.button.button-dark.button-small"
          );
          if (
            !isInsideReservationBox &&
            !isReservationButton &&
            !isRemoveButton &&
            !isAddButton &&
            !isQuantityButton
          ) {
            reservationDropdown.style.display = "none";
          }
        });
        return reservationBox;
      }
      function handleQuantityChange(products, index, delta) {
        const product = products[index];
        if (delta === -1 && product.quantity === 1) return;
        product.quantity += delta;
        if (product.quantity > product.maxQuantity) {
          product.quantity = product.maxQuantity;
          salert_mini("Osiągnięto maksymalną ilość produktu.", "warning");
        }
        saveReservations(reservations);
        updateReservationCounter();
        renderReservations();
        const event = new CustomEvent("updateReservation", {
          detail: { reservations },
        });
        document.dispatchEvent(event);
      }
      function updateReservationCounter() {
        const totalCount = Object.values(reservations).reduce(
          (sum, products) => {
            return (
              sum +
              products.reduce((count, product) => count + product.quantity, 0)
            );
          },
          0
        );
        const counter = document.getElementById("reservation_counter");
        if (counter) {
          counter.textContent = totalCount;
        }
      }
      function saveReservations(reservations) {
        localStorage.setItem("reservations", JSON.stringify(reservations));
      }
      function loadReservations() {
        return JSON.parse(localStorage.getItem("reservations")) || {};
      }
      renderReservations();
    }
  });

 
  var technicalDataItems = document.getElementsByClassName("technical-data");
  for (var i = 0; i < technicalDataItems.length; i++) {
    var technicalDescElement =
      technicalDataItems[i].getElementsByClassName("technical-desc")[0];
    var value = technicalDescElement.innerText.trim();
    if (parseInt(value) <= 0) {
      var buttonElement = technicalDescElement.querySelector(".button-dark");
      if (buttonElement) {
        buttonElement.remove();
      }
    }
  }


 
  const urlFragments = ["https://takczytam.com/autor-"];
  function isUrlInList(url) {
    return urlFragments.some((fragment) => url.includes(fragment));
  }
  function stopElementLoading() {
    const element = document.querySelector(".box.rc-box-categories-more");
    if (element) {
      element.remove();
    }
  }
  if (isUrlInList(window.location.href)) {
    document.addEventListener("DOMContentLoaded", stopElementLoading);
  }

 
  document.addEventListener("DOMContentLoaded", function () {
    var pinfoBuy = document.querySelector(".pinfo-buy");
    var pinfoTopCopy = document.querySelector(".pinfo-top-copy");
    var pinfoOptions = document.querySelector(".pinfo-options");
    if (pinfoBuy && pinfoTopCopy && pinfoOptions) {
      pinfoTopCopy.parentNode.insertBefore(pinfoBuy, pinfoOptions);
    }
  });

  
  function transformElement(sectionNumber, linkUrl) {
    var selector = `#products_${sectionNumber} > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > span:nth-child(1)`;
    var spanElement = document.querySelector(selector);
    if (spanElement) {
      var linkElement = document.createElement("a");
      linkElement.href = linkUrl;
      linkElement.textContent = spanElement.textContent;
      spanElement.parentNode.replaceChild(linkElement, spanElement);
    }
  }

  transformElement(149, "https://takczytam.com/c/52/nowosci.html");
  transformElement(117, "https://takczytam.com/c/491/dla-dzieci-i-mlodziezy.html");
  transformElement(191, "https://takczytam.com/c/498/0-2-lata-podzial-wiekowy-dziecieca-i-mlodziezowa.html");
  transformElement(192, "https://takczytam.com/c/499/3-4-lata-podzial-wiekowy-dziecieca-i-mlodziezowa.html");
  transformElement(193, "https://takczytam.com/c/500/5-6-lat-podzial-wiekowy-dziecieca-i-mlodziezowa.html");
  transformElement(194, "https://takczytam.com/c/501/7-8-lat-podzial-wiekowy-dziecieca-i-mlodziezowa.html");
  transformElement(126, "https://takczytam.com/c/185/mamy-.html");
  transformElement(142, "https://takczytam.com/c/165/dla-liceow-i-technikow-oferta-dla-szkol-przedszkoli-i-placowek-psychologiczno-pedagogicznych.html");
  transformElement(143, "https://takczytam.com/c/196/szkola-podstawowa-oferta-dla-szkol-przedszkoli-i-placowek-psychologiczno-pedagogicznych.html");
  transformElement(145, "https://takczytam.com/c/301/jezyki-obce-ksiazka-niebeletrystyczna.html");
  transformElement(94, "https://takczytam.com/c/391/komiks.html");
  transformElement(139, "https://takczytam.com/c/296/historia-polski-historia-ksiazka-niebeletrystyczna.html");
  transformElement(131, "https://takczytam.com/c/265/beletrystyka.html");
  transformElement(129, "https://takczytam.com/c/388/polska-albumy-krajoznawcze-podroze-przewodniki-i-albumy-krajoznawcze-mapy-ksiazka-niebeletrystyczna.html");


  
  document.addEventListener("DOMContentLoaded", function () {
    let currentProgressPercent = 0;
    function updateProgress() {
      const freeShippingThreshold = 250.0;
      const cartValueElement = document.querySelector(".ajax-items-cart-value");
      const progressBar = document.querySelector(".progress-bar");
      const progressText = document.querySelector(".progress-text");
      if (cartValueElement && progressBar && progressText) {
        let cartValue = parseFloat(cartValueElement.textContent.trim());
        if (isNaN(cartValue)) {
          console.error("Invalid cart value detected. Defaulting to 0.");
          cartValue = 0.0;
        }
        const newProgressPercent = Math.min(
          (cartValue / freeShippingThreshold) * 100,
          100
        );
        if (newProgressPercent !== currentProgressPercent) {
          currentProgressPercent = newProgressPercent;
          animateProgressBar(newProgressPercent);
          updateProgressText(cartValue, freeShippingThreshold);
          updateTooltips(cartValue);
        }
      } else {
        console.error(
          "Required elements not found. Make sure .ajax-items-cart-value, .progress-bar, and .progress-text exist on the page."
        );
      }
    }
    function animateProgressBar(targetPercent) {
      const progressBar = document.querySelector(".progress-bar");
      const startPercent = parseFloat(progressBar.style.width) || 0;
      function step(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const duration = 400;
        const progressPercent = Math.min(
          startPercent + (targetPercent - startPercent) * (progress / duration),
          targetPercent
        );
        progressBar.style.width = progressPercent + "%";
        if (progress < duration) {
          requestAnimationFrame(step);
        }
      }
      let start;
      requestAnimationFrame(step);
    }
    function closeTooltip(event) {
      const tooltip = event.target.closest(".tooltip_progress");
      if (tooltip) {
        tooltip.style.display = "none";
      }
    }
    document.querySelectorAll(".close-tooltip").forEach((button) => {
      button.addEventListener("click", closeTooltip);
    });
    function updateProgressText(cartValue, threshold) {
      const progressText = document.querySelector(".progress-text");
      if (progressText) {
        if (currentProgressPercent < 100) {
          const amountLeft = threshold - cartValue;
          progressText.textContent = `Dodaj książki za ${amountLeft.toFixed(
            2
          )} PLN do Twojego koszyka, aby mieć darmową przesyłkę!`;
        } else {
          progressText.textContent = `Gratulacje! Nie płacisz nic a nic za wysyłkę!`;
        }
      }
    }
    function updateTooltips(cartValue) {
      const progressPoints = document.querySelectorAll(".progress-point");
      progressPoints.forEach((point) => {
        const value = parseFloat(point.getAttribute("data-value"));
        if (cartValue >= value) {
          point.classList.add("active");
        } else {
          point.classList.remove("active");
        }
      });
    }
    if (window.location.href === "https://takczytam.com/_cart/index/") {
      setTimeout(updateProgress, 5000);
      document.body.addEventListener("click", function (event) {
        const targetElement = event.target.closest(".increase, .decrease");
        if (targetElement) {
          setTimeout(updateProgress, 5000);
        }
      });
    } else {
      console.log(
        "Script is not running because the current page is not the cart page."
      );
    }
  });

  
  document.addEventListener("DOMContentLoaded", function () {
    function updateCartInfo() {
      var cartValueElement = document.querySelector(".ajax-items-cart-value");
      var cartValue = parseFloat(
        cartValueElement ? cartValueElement.textContent : "0"
      );
      var freeShippingThreshold = 250.0;
      var remainingAmount = freeShippingThreshold - cartValue;
      var freeShippingInfoDiv = document.getElementById("free-shipping-info");
      if (remainingAmount > 0) {
        freeShippingInfoDiv.querySelector(".cart-value-info").textContent =
          "Brakuje " + remainingAmount.toFixed(2) + " PLN do darmowej wysyłki!";
      } else if (cartValue > 0) {
        freeShippingInfoDiv.querySelector(".cart-value-info").textContent =
          "Masz darmową wysyłkę!";
      } else {
        freeShippingInfoDiv.querySelector(".cart-value-info").textContent = "";
      }
      freeShippingInfoDiv.style.display = "block";
    }
    function createAndInsertFreeShippingInfo() {
      var existingDiv = document.getElementById("free-shipping-info");
      if (existingDiv) {
        existingDiv.remove();
      }
      var titleDiv = document.querySelector(
        "div#header_cart.cart-preview.basket.cart-preview-sticky div.title"
      );
      var freeShippingInfoDiv = document.createElement("div");
      freeShippingInfoDiv.id = "free-shipping-info";
      freeShippingInfoDiv.style.display = "block";
      freeShippingInfoDiv.style.color = "red";
      freeShippingInfoDiv.style.fontWeight = "bold";
      freeShippingInfoDiv.style.marginTop = "10px";
      freeShippingInfoDiv.style.textAlign = "center";
      var p1 = document.createElement("p");
      p1.textContent =
        "Darmowa wysyłka od 250 zł dla niezarejestrowanych klientów!";
      p1.style.margin = "5px 0";
      p1.style.color = "#07350a";
      var p2 = document.createElement("p");
      p2.textContent =
        "Darmowa wysyłka od 100 zł z kontem TakCzytam+ (po spełnieniu określonych warunków)";
      p2.style.margin = "5px 0";
      p2.style.color = "#07350a";
      var cartValueInfo = document.createElement("p");
      cartValueInfo.className = "cart-value-info";
      cartValueInfo.style.margin = "5px 0";
      freeShippingInfoDiv.appendChild(p1);
      freeShippingInfoDiv.appendChild(p2);
      freeShippingInfoDiv.appendChild(cartValueInfo);
      if (titleDiv) {
        titleDiv.insertAdjacentElement("afterend", freeShippingInfoDiv);
      }
      updateCartInfo();
      observeCartValueChanges();
    }
    function observeCartValueChanges() {
      var targetNode = document.querySelector(".ajax-items-cart-value");
      var config = { childList: !0, characterData: !0, subtree: !0 };
      var observer = new MutationObserver(function (mutationsList) {
        mutationsList.forEach(function (mutation) {
          if (
            mutation.type === "childList" ||
            mutation.type === "characterData"
          ) {
            updateCartInfo();
          }
        });
      });
      if (targetNode) {
        observer.observe(targetNode, config);
      }
    }
    document.querySelector(".show-cart").addEventListener("click", function () {
      setTimeout(createAndInsertFreeShippingInfo, 100);
    });
    document.addEventListener("click", function (event) {
      if (event.target.closest(".remove-from-cart")) {
        setTimeout(function () {
          createAndInsertFreeShippingInfo();
        }, 1000);
      }
    });
  });

  
  if (window.location.href.includes("https://takczytam.com/_account/index")) {
    const containerTitle = document.querySelector(".container-title");
    const ordersContainer = document.querySelector(
      ".conteiner-cms.account-orders"
    );
    const ordersTable = document.querySelector(".table-responsive tbody");
    let completedOrdersCount = 0;
    let minOrderValue = 58.99;
    let eligibleOrders = 0;
    if (ordersTable) {
      const rows = ordersTable.querySelectorAll("tr");
      rows.forEach((row) => {
        const orderStatus = row.cells[4].textContent.trim();
        if (
          orderStatus === "Produkt wysłany" ||
          orderStatus === "Produkt wysłany z innej księgarni" ||
          orderStatus === "2a) Potwierdzenie rezerwacji" ||
          orderStatus === "Wysłano pierwsze zamówienie"
        ) {
          const orderValue = parseFloat(
            row.cells[3].textContent.replace("PLN", "").trim()
          );
          if (orderValue >= minOrderValue) {
            eligibleOrders++;
          }
          completedOrdersCount++;
        }
      });
    }
    const reminderDiv = document.createElement("div");
    reminderDiv.style.padding = "10px";
    reminderDiv.style.backgroundColor = "#f5f5f5";
    reminderDiv.style.border = "1px solid #ccc";
    reminderDiv.style.margin = "15px 0";
    let eligibleOrdersText = `<p><strong>Zamówienia o większej wartości, które mogą kwalifikować się do zliczenia w ramach darmowej wysyłki od 100 zł:</strong> <strong>${eligibleOrders}</strong></p>`;
    if (eligibleOrders >= 5) {
      eligibleOrdersText += `<p style="color: red;"><strong>Sprawdź czy masz już kod do darmowej wysyłki od 100 zł.</strong></p>`;
    }
    reminderDiv.innerHTML = `
                    <p><strong>Zrealizowane zamówienia: </strong><strong>${completedOrdersCount}</strong></p>
                    ${eligibleOrdersText}
                    <p>Po zrealizowaniu 5 zamówień o wartości minimum 50 zł (wartość książek), zyskasz darmową wysyłkę od 100 zł z indywidualnym kodem rabatowym.</p>
                    <p>Jak liczymy zamówienia?</p>
                    <p>Przyjmujemy, że zamówienia powinny mieć minimum 50 zł samej wartości książek, bez kosztów wysyłki.</p>
                    <p><strong>Podana w tabeli wartość wskazuje kwotę razem z kosztami przesyłki. Dlatego licznik zamówień należy przyjąć za orientacyjny.</strong></p>
                    <p><strong>Jeśli licznik wskazuje 5 zamóweń powyżej 50 zł i nie trafił do Państwa kod rabatowy na darmową wysyłkę, prosimy o kontakt.</strong></p>
                    <p>Można również samemu zweryfikować zamówienia klikając przycisk "Zobacz" w kolumnie "Szczegóły"</p>
                `;
    if (containerTitle && ordersContainer) {
      containerTitle.parentNode.insertBefore(reminderDiv, ordersContainer);
    }
  }

  
  console.log("Skrypt uruchomiony - rozpoczęcie dodawania odznak zniżek.");
  const productElements = document.querySelectorAll(".product-item");
  console.log(`Znaleziono ${productElements.length} produktów.`);
  productElements.forEach((productElement, index) => {
    console.log(`Przetwarzanie produktu nr ${index + 1}...`);
    const currentPriceElement = productElement.querySelector(
      ".view_price .price_1"
    );
    const currentPriceCentsElement = productElement.querySelector(
      ".view_price .price_2"
    );
    const oldPriceElement = productElement.querySelector(".view_price_old");
    if (currentPriceElement) {
      console.log(`Cena główna: ${currentPriceElement.textContent}`);
    } else {
      console.warn(`Nie znaleziono ceny głównej dla produktu nr ${index + 1}`);
    }
    if (currentPriceCentsElement) {
      console.log(`Cena w groszach: ${currentPriceCentsElement.textContent}`);
    } else {
      console.warn(
        `Nie znaleziono ceny w groszach dla produktu nr ${index + 1}`
      );
    }
    if (oldPriceElement) {
      console.log(`Stara cena: ${oldPriceElement.textContent}`);
    } else {
      console.warn(`Nie znaleziono starej ceny dla produktu nr ${index + 1}`);
    }
    if (currentPriceElement && currentPriceCentsElement && oldPriceElement) {
      const currentPrice = parseFloat(
        currentPriceElement.textContent.replace(",", ".") +
          currentPriceCentsElement.textContent.replace(",", ".")
      );
      const oldPrice = parseFloat(
        oldPriceElement.textContent.replace("PLN", "").replace(",", ".").trim()
      );
      console.log(`Cena aktualna: ${currentPrice}, Stara cena: ${oldPrice}`);
      const discountPercentage = Math.round(
        ((oldPrice - currentPrice) / oldPrice) * 100
      );
      console.log(`Obliczony procent zniżki: ${discountPercentage}%`);
      const discountBadge = document.createElement("div");
      discountBadge.classList.add("discount-badge");
      discountBadge.textContent = `-${discountPercentage}%`;
      discountBadge.style.position = "absolute";
      discountBadge.style.top = "10px";
      discountBadge.style.right = "10px";
      discountBadge.style.backgroundColor = "#07350a";
      discountBadge.style.color = "white";
      discountBadge.style.borderRadius = "50%";
      discountBadge.style.padding = "10px";
      discountBadge.style.fontSize = "14px";
      discountBadge.style.fontWeight = "bold";
      discountBadge.style.width = "50px";
      discountBadge.style.height = "50px";
      discountBadge.style.display = "flex";
      discountBadge.style.justifyContent = "center";
      discountBadge.style.alignItems = "center";
      discountBadge.style.zIndex = "1";
      productElement.style.position = "relative";
      const productImageContainer =
        productElement.querySelector('a[itemprop="url"]');
      if (productImageContainer) {
        productImageContainer.style.position = "relative";
        productImageContainer.appendChild(discountBadge);
        console.log(`Odznaka zniżki dodana do produktu nr ${index + 1}`);
      } else {
        console.warn(
          `Nie znaleziono kontenera obrazu dla produktu nr ${index + 1}`
        );
      }
    } else {
      console.warn(
        `Nie można obliczyć zniżki dla produktu nr ${
          index + 1
        } - brakujące dane.`
      );
    }
  });
  console.log("Skrypt zakończył działanie.");


  
  document.addEventListener("DOMContentLoaded", function (event) {
    const productElement = document.getElementById("rc_pid");
    let productId;  // Deklaracja zmiennej przed blokiem if

    if (productElement) {
        console.log("Element znaleziony:", productElement);
        productId = productElement.getAttribute("data-id");
        console.log("Product ID:", productId);
    } else {
        console.error("Element o id 'rc_pid' nie został znaleziony.");
    }
    
    const requestBody = JSON.stringify({
      products: [{ products_id: productId }],
    });
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
          if (
            response.products &&
            Array.isArray(response.products) &&
            response.products.length > 0
          ) {
            const productData = response.products[0];
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
          console.log("Id kategorie:", categoryIds);
          const compatibleCategoryIds = getCompatibleCategories(categoryIds);
          console.log("Kompatybilne kategorie:", compatibleCategoryIds);
          fetchCompatibleCategories(compatibleCategoryIds);
        })
        .catch((error) => {
          console.error(
            "Błąd podczas pobierania informacji o produkcie:",
            error
          );
        });
    function getCompatibleCategories(categoryIds) {
      const uniqueCompatibleCategoryIds = new Set();
      categoryIds.forEach((categoryId) => {
        const compatibleIds = compatibleCategories[categoryId];
        if (compatibleIds) {
          compatibleIds.forEach((id) => uniqueCompatibleCategoryIds.add(id));
        }
      });
      return Array.from(uniqueCompatibleCategoryIds);
    }
    function fetchCompatibleCategories(compatibleCategoryIds) {
      console.log(
        `Rozpoczynam pobieranie produktów dla unikalnych kompatybilnych kategorii: ${compatibleCategoryIds}`
      );
      compatibleCategoryIds.forEach((categoryId) => {
        fetchCategoryAndProducts(categoryId);
      });
    }
    function fetchCategoryAndProducts(categoryId) {
      console.log(`Pobieranie produktów dla kategorii: ${categoryId}`);
      const category = categoriesData.categories.find(
        (cat) => cat.category_id === categoryId
      );
      if (category) {
        console.log(`Znaleziono kategorię: ${categoryId}`, category);
        if (category.products && category.products.length > 0) {
          console.log(
            `Liczba produktów w kategorii ${categoryId}: ${category.products.length}`
          );
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
              console.log(
                `Produkt ID: ${product.products_id}, Nazwa: ${product.name_pl}, Ilość: ${product.quantity}`
              );
            });
            const availableProducts = category.products.filter(
              (product) => product.quantity > 0
            );
            console.log(
              `Znaleziono ${availableProducts.length} produktów dostępnych w kategorii ${category.name_pl}.`
            );
            availableProducts.forEach((product) => {
              console.log(
                `Produkt ID: ${product.products_id}, Nazwa: ${product.name_pl}, Ilość: ${product.quantity}`
              );
            });
            const randomProducts = getRandomProducts(availableProducts, 8);
            console.log(
              `Wylosowano ${randomProducts.length} produktów z kategorii ${category.name_pl}.`
            );
            randomProducts.forEach((product) => {
              if (
                product.products_id !== productId &&
                !allDisplayedProducts.has(product.products_id)
              ) {
                console.log(
                  `Wyświetlam produkt: ${product.products_id} - ${product.name_pl}`
                );
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
      const productLink = document.createElement("a");
      productLink.href = product.url;
      const productImage = document.createElement("img");
      productImage.src = product.main_image;
      productImage.alt = product.name_pl;
      productImage.className = "product-image";
      productLink.appendChild(productImage);
      productElement.appendChild(productLink);
      const productContent = document.createElement("div");
      productContent.className = "custom-product-box-content";
      const productNameLink = document.createElement("a");
      productNameLink.href = product.url;
      const productName = document.createElement("h3");
      productName.textContent = product.name_pl;
      productNameLink.appendChild(productName);
      productContent.appendChild(productNameLink);
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
              console.log(
                `Nie znaleziono danych dla produktu ${pid}. Przekierowanie.`
              );
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
                    useOverlay: !0,
                    width: 665,
                    height: 300,
                    title: def.index.window_opt_title,
                    contentHTML: d[1],
                  });
                  document.getElementById("rc_window_opt_body").innerHTML =
                    d[1];
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

  
  if (window.location.href === "https://takczytam.com/_cart/index/") {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        const buttons = document.querySelectorAll(
          ".mapPoint__confirm, .ruch_widget_p"
        );
        buttons.forEach((button) => {
          if (!button.dataset.listenerAdded) {
            button.addEventListener("click", () => {
              salert_mini("Prawidłowo wybrano punkt odbioru!");
              const pointNameInput = document.getElementById("point_name");
              const orlenDiv = document.getElementById(
                "paczkaWRuchuSelectedPoint"
              );
              if (pointNameInput || orlenDiv) {
                pointNameInput.type = "text";
                pointNameInput.setAttribute("readonly", !0);
                pointNameInput.style.width = "100%";
                pointNameInput.style.textAlign = "center";
                pointNameInput.style.fontSize = "2rem";
                orlenDiv.style.display = "block";
                orlenDiv.style.fontSize = "2rem";
              }
            });
            button.dataset.listenerAdded = "true";
          }
        });
      });
    });
    observer.observe(document.body, { childList: !0, subtree: !0 });
  }

  
  document.addEventListener("DOMContentLoaded", function () {
    if (window.location.href === "https://takczytam.com/_cart/guest/") {
      const inputElement = document.getElementById("checkboxes_4");
      if (inputElement) {
        const labelElement = inputElement.closest("label");
        if (labelElement) {
          labelElement.style.display = "none";
        }
        inputElement.classList.remove("fValidate['required']");
      }
    }
  });

  
  document.addEventListener("DOMContentLoaded", function () {
    if (window.location.href === "https://takczytam.com/_cart/step2/") {
      const buttonElement = document.querySelector(
        'a.button[href="/_cart/guest/"]'
      );
      if (buttonElement) {
        const stepElement = document.querySelector(
          "div.step.active .hidden-xs"
        );
        if (stepElement) {
          stepElement.textContent =
            "2. Kupuj z rejestracją lub bez rejestracji";
        }
      }
    }
  });


 
  document.addEventListener("DOMContentLoaded", () => {
    function changeTableHeader() {
      if (window.location.pathname !== "/_account/shipping_address/") {
        console.info("Nie znajdujesz się na odpowiedniej stronie.");
        return;
      }
      try {
        const tableHeader = document.querySelector(
          "div.table-responsive table.table-striped.table-hover thead tr th"
        );
        if (tableHeader) {
          tableHeader.textContent = "Dane adresowe";
          console.log("Tekst nagłówka tabeli został zmieniony.");
        } else {
          console.warn("Nagłówek tabeli nie został znaleziony.");
        }
      } catch (error) {
        console.error("Wystąpił błąd podczas zmiany tekstu:", error);
      }
    }
    changeTableHeader();
  });

  
  document.addEventListener("DOMContentLoaded", function () {
    var elements = document.querySelectorAll(".technical-title");
    elements.forEach(function (element) {
      if (element.textContent.includes("Kraków - Ul. Floriańska 15:")) {
        element.parentElement.style.display = "none";
      }
    });
  });
