let lang = "en";

const ui = {
  en:{title:"Anfield Cafe Pub",welcome:"Welcome to Anfield Cafe Pub — food, drinks, shisha and great moments in Taksim.",search:"Search in menu...",category:"Menu Categories",contact:"Contact & Links",items:"items",back:"← Back"},
  ar:{title:"أنفيلد كافيه باب",welcome:"أهلاً بكم في أنفيلد — طعام، مشروبات، أرجيلة وأجواء رائعة في تقسيم.",search:"ابحث في المنيو...",category:"أقسام المنيو",contact:"التواصل والروابط",items:"أصناف",back:"→ رجوع"},
  tr:{title:"Anfield Cafe Pub",welcome:"Anfield Cafe Pub’a hoş geldiniz — Taksim’de yemek, içecek, nargile ve keyifli anlar.",search:"Menüde ara...",category:"Menü Kategorileri",contact:"İletişim ve Linkler",items:"ürün",back:"← Geri"}
};

function setLang(l, btn){
  lang=l;
  document.body.dir = l==="ar" ? "rtl" : "ltr";
  document.querySelectorAll(".langs button").forEach(b=>b.classList.remove("active"));
  btn.classList.add("active");
  updateText();
  renderCategories();
}

function updateText(){
  siteTitle.textContent=ui[lang].title;
  welcomeText.textContent=ui[lang].welcome;
  searchInput.placeholder=ui[lang].search;
  categoryTitle.textContent=ui[lang].category;
  contactTitle.textContent=ui[lang].contact;
}

function countItems(id){
  return menuItems.filter(i=>i.category===id).length;
}

function renderCategories(){
  categoriesGrid.innerHTML="";
  categories.forEach(cat=>{
    const card=document.createElement("div");
    card.className="category-card";
    card.onclick=()=>openCategory(cat.id);
    card.innerHTML=`
      <img src="${cat.image}">
      <span>${cat.name[lang]}<small>${countItems(cat.id)} ${ui[lang].items}</small></span>
    `;
    categoriesGrid.appendChild(card);
  });
}

function openCategory(id){
  const cat=categories.find(c=>c.id===id);
  const items=menuItems.filter(i=>i.category===id);

  menuContent.innerHTML=`
    <button class="back" onclick="backHome()">${ui[lang].back}</button>
    <h2 class="menu-title">${cat.name[lang]}</h2>
    <div class="items-grid">
      ${items.map(item=>`
        <div class="item">
          <div class="item-top">
            <div class="item-name">
              ${item.name[lang]}
              ${item.best ? '<span class="badge">Best</span>' : ''}
            </div>
            <div class="item-price">${item.price}</div>
          </div>
          <div class="item-desc">${item.description[lang]}</div>
        </div>
      `).join("")}
    </div>
  `;
  menuContent.scrollIntoView({behavior:"smooth"});
}

function backHome(){
  menuContent.innerHTML="";
  document.querySelector(".category-section").scrollIntoView({behavior:"smooth"});
}

function searchMenu(){
  const q=searchInput.value.toLowerCase().trim();
  if(!q){menuContent.innerHTML="";return;}

  const results=menuItems.filter(item =>
    item.name.en.toLowerCase().includes(q) ||
    item.name.ar.toLowerCase().includes(q) ||
    item.name.tr.toLowerCase().includes(q)
  );

  menuContent.innerHTML=`
    <h2 class="menu-title">Search Results</h2>
    <div class="items-grid">
      ${results.map(item=>`
        <div class="item">
          <div class="item-top">
            <div class="item-name">${item.name[lang]}</div>
            <div class="item-price">${item.price}</div>
          </div>
          <div class="item-desc">${item.description[lang]}</div>
        </div>
      `).join("")}
    </div>
  `;
}

updateText();
renderCategories();
