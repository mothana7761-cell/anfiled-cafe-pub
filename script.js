let currentLanguage = "en";
let currentCategory = null;

const uiText = {
  en: {
    title: "Anfield Cafe Pub",
    welcome:
      "Welcome to Anfield Cafe Pub — food, drinks, shisha and great moments in Taksim.",
    search: "Search in menu...",
    categoryTitle: "Menu Categories",
    contact: "Contact & Links",
    empty: "Items will be added soon.",
    items: "Items",
    back: "Back to Categories"
  },
  ar: {
    title: "أنفيلد كافيه باب",
    welcome:
      "أهلاً بكم في أنفيلد — طعام، مشروبات، أرجيلة وأجواء رائعة في تقسيم.",
    search: "ابحث في المنيو...",
    categoryTitle: "أقسام المنيو",
    contact: "التواصل والروابط",
    empty: "سيتم إضافة الأصناف قريبًا.",
    items: "أصناف",
    back: "الرجوع للأقسام"
  },
  tr: {
    title: "Anfield Cafe Pub",
    welcome:
      "Anfield Cafe Pub’a hoş geldiniz — Taksim’de yemek, içecek, nargile ve keyifli anlar.",
    search: "Menüde ara...",
    categoryTitle: "Menü Kategorileri",
    contact: "İletişim ve Linkler",
    empty: "Ürünler yakında eklenecek.",
    items: "Ürün",
    back: "Kategorilere Dön"
  }
};

function setLanguage(language, button) {
  currentLanguage = language;

  document.body.dir = language === "ar" ? "rtl" : "ltr";

  document.querySelectorAll(".language-buttons button").forEach((btn) => {
    btn.classList.remove("active");
  });

  button.classList.add("active");

  updateStaticText();
  renderCategories();

  if (currentCategory) {
    openCategory(currentCategory);
  }
}

function updateStaticText() {
  document.getElementById("siteTitle").textContent =
    uiText[currentLanguage].title;

  document.getElementById("welcomeText").textContent =
    uiText[currentLanguage].welcome;

  document.getElementById("searchInput").placeholder =
    uiText[currentLanguage].search;

  document.getElementById("categoryTitle").textContent =
    uiText[currentLanguage].categoryTitle;

  document.getElementById("contactTitle").textContent =
    uiText[currentLanguage].contact;
}

function getCategoryItemCount(categoryId) {
  return menuItems.filter((item) => item.category === categoryId).length;
}

function renderCategories() {
  const grid = document.getElementById("categoriesGrid");
  grid.innerHTML = "";

  categories.forEach((category) => {
    const count = getCategoryItemCount(category.id);

    const card = document.createElement("div");
    card.className = "category-card";
    card.onclick = () => openCategory(category.id);

    card.innerHTML = `
      <img 
        src="${category.image}" 
        alt="${category.name[currentLanguage]}"
        onerror="this.src='https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=900&q=80'"
      />
      <span>
        ${category.name[currentLanguage]}
        <small>${count} ${uiText[currentLanguage].items}</small>
      </span>
    `;

    grid.appendChild(card);
  });
}

function openCategory(categoryId) {
  currentCategory = categoryId;

  const category = categories.find((cat) => cat.id === categoryId);
  const items = menuItems.filter((item) => item.category === categoryId);

  const menuContent = document.getElementById("menuContent");

  const itemsHtml =
    items.length > 0
      ? items
          .map(
            (item) => `
        <div class="menu-item">
          ${
            item.image
              ? <img class="item-image" src="${item.image}" alt="${item.name[currentLanguage]}" />
              : ""
          }

          <div class="item-top">
            <div class="item-name">
              ${item.name[currentLanguage]}
              ${
                item.bestSeller
                  ? <span class="badge best">Best Seller</span>
                  : ""
              }
              ${item.new ? <span class="badge new">New</span> : ""}
            </div>

            <div class="item-price">${item.price || "Ask"}</div>
          </div>

          <div class="item-desc">
            ${item.description[currentLanguage] || ""}
          </div>
        </div>
      `
          )
          .join("")
      : <div class="empty-message">${uiText[currentLanguage].empty}</div>;

  menuContent.innerHTML = `
    <section class="menu-section active">
      <button class="back-btn" onclick="backToCategories()">
        ← ${uiText[currentLanguage].back}
      </button>

      <h2>${category.name[currentLanguage]}</h2>

      <div class="items-grid">
        ${itemsHtml}
      </div>
    </section>
  `;

  document.getElementById("menuContent").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

function backToCategories() {
  currentCategory = null;
  document.getElementById("menuContent").innerHTML = "";

  document.querySelector(".categories-area").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

function searchMenu() {
  const searchValue = document
    .getElementById("searchInput")
    .value.toLowerCase()
    .trim();

  const menuContent = document.getElementById("menuContent");

  if (!searchValue) {
    if (currentCategory) {
      openCategory(currentCategory);
    } else {
      menuContent.innerHTML = "";
    }
    return;
  }

  currentCategory = null;

  const results = menuItems.filter((item) => {
    return (
      item.name.en.toLowerCase().includes(searchValue) ||
      item.name.ar.toLowerCase().includes(searchValue) ||
      item.name.tr.toLowerCase().includes(searchValue) ||
      item.description.en.toLowerCase().includes(searchValue) ||
      item.description.ar.toLowerCase().includes(searchValue) ||
      item.description.tr.toLowerCase().includes(searchValue)
    );
  });

  const resultsHtml =
    results.length > 0
      ? results
          .map(
            (item) => `
        <div class="menu-item">
          ${
            item.image
              ? <img class="item-image" src="${item.image}" alt="${item.name[currentLanguage]}" />
              : ""
          }

          <div class="item-top">
            <div class="item-name">${item.name[currentLanguage]}</div>
            <div class="item-price">${item.price || "Ask"}</div>
          </div>

          <div class="item-desc">
            ${item.description[currentLanguage] || ""}
          </div>
        </div>
      `
          )
          .join("")
      : <div class="empty-message">${uiText[currentLanguage].empty}</div>;

  menuContent.innerHTML = `
    <section class="menu-section active">
      <h2>Search Results</h2>
      <div class="items-grid">
        ${resultsHtml}
      </div>
    </section>
  `;
}

updateStaticText();
renderCategories();
