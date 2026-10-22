// Bloom by Letter — front-end demo (no database).
// Product/catalog data and alphabet mapping are kept centrally in this file.

const flowerPhotos = {
  rose: "rose.png",
  tulip: "tulip.png",
  lily: "lily.png",
  peony: "peony.png",
  hydrangea: "Hydrangea.png",
  baby: "baby.png",
  sunflower: "sun.png",
  gerbera: "ger.png",
  carnation: "carnetion.png",
  chrysanthemum: "Chrysanthemum.png",
  orchid: "orc.png",
  lavender: "lav.png",
  sakura: "sak.png",
  magnolia: "mag.png",
  daisy: "dai.png",
  ranunculus: "ran.png",
  lisianthus: "lis.png",
  snapdragon: "snap.png",
  stock: "stock.png",
  statice: "sta.png",
  aster: "aster.png",
  iris: "iris.png",
  gladiolus: "gla.png",
  anthurium: "ant.png",
  camellia: "cam.png",
  tuberose: "tub.png",
  alstroemeria: "al.png",
  calla: "cal.png",
  waxflower: "wax.png",
  protea: "pro.png"
};

const flowers = [
  {id:"rose", name:"Rose", local:"Mawar", price:25000, color:"red", meaning:"Love & devotion", season:["Spring","Summer","Autumn","Winter"], occasion:["Anniversary","Proposal & Engagement","Birthday"], photo:flowerPhotos.rose},
  {id:"lily", name:"Lily", local:"Lili", price:32000, color:"white", meaning:"Grace & renewal", season:["Spring","Summer"], occasion:["Wedding","Sympathy & Condolences","Get Well Soon"], photo:flowerPhotos.lily},
  {id:"tulip", name:"Tulip", local:"Tulip", price:28000, color:"pink", meaning:"New beginnings", season:["Spring"], occasion:["Birthday","Congratulations","Anniversary"], photo:flowerPhotos.tulip},
  {id:"carnation", name:"Carnation", local:"Anyelir", price:18000, color:"pink", meaning:"Admiration & care", season:["Summer","Autumn"], occasion:["Mother’s Day","Thank You"], photo:flowerPhotos.carnation},
  {id:"chrysanthemum", name:"Chrysanthemum", local:"Krisan", price:22000, color:"yellow", meaning:"Joy & optimism", season:["Autumn"], occasion:["Birthday","Congratulations"], photo:flowerPhotos.chrysanthemum},
  {id:"gerbera", name:"Gerbera", local:"Gerbera", price:20000, color:"orange", meaning:"Cheerfulness", season:["Summer","Autumn"], occasion:["Birthday","Get Well Soon"], photo:flowerPhotos.gerbera},
  {id:"baby", name:"Baby’s Breath", local:"Gypsophila", price:15000, color:"white", meaning:"Pure love", season:["Summer"], occasion:["Wedding","Anniversary"], photo:flowerPhotos.baby},
  {id:"hydrangea", name:"Hydrangea", local:"Hortensia", price:45000, color:"blue", meaning:"Gratitude & heartfelt emotion", season:["Spring","Summer","Autumn"], occasion:["Thank You","Anniversary"], photo:flowerPhotos.hydrangea},
  {id:"orchid", name:"Orchid", local:"Anggrek", price:40000, color:"purple", meaning:"Elegance & strength", season:["Winter"], occasion:["Congratulations","Sympathy & Condolences"], photo:flowerPhotos.orchid},
  {id:"sunflower", name:"Sunflower", local:"Bunga Matahari", price:25000, color:"yellow", meaning:"Warmth & loyalty", season:["Summer"], occasion:["Birthday","Get Well Soon"], photo:flowerPhotos.sunflower},
  {id:"peony", name:"Peony", local:"Peony", price:48000, color:"pink", meaning:"Prosperity & romance", season:["Spring"], occasion:["Wedding","Anniversary","Proposal & Engagement"], photo:flowerPhotos.peony},
  {id:"ranunculus", name:"Ranunculus", local:"Ranunculus", price:35000, color:"peach", meaning:"Charm & attraction", season:["Spring","Summer"], occasion:["Anniversary","Just Because"], photo:flowerPhotos.ranunculus},
  {id:"alstroemeria", name:"Alstroemeria", local:"Alstroemeria", price:22000, color:"orange", meaning:"Friendship & support", season:["Summer","Autumn"], occasion:["Thank You","Congratulations"], photo:flowerPhotos.alstroemeria},
  {id:"lisianthus", name:"Lisianthus", local:"Eustoma", price:30000, color:"purple", meaning:"Appreciation & charm", season:["Autumn"], occasion:["Anniversary","Thank You"], photo:flowerPhotos.lisianthus},
  {id:"snapdragon", name:"Snapdragon", local:"Snapdragon", price:24000, color:"pink", meaning:"Strength & grace", season:["Summer","Autumn"], occasion:["Congratulations","Birthday"], photo:flowerPhotos.snapdragon},
  {id:"stock", name:"Stock", local:"Matthiola", price:23000, color:"purple", meaning:"Lasting beauty", season:["Spring"], occasion:["Wedding","Anniversary"], photo:flowerPhotos.stock},
  {id:"statice", name:"Statice", local:"Limonium", price:16000, color:"purple", meaning:"Remembrance", season:["Autumn"], occasion:["Sympathy & Condolences","Thank You"], photo:flowerPhotos.statice},
  {id:"aster", name:"Aster", local:"Aster", price:19000, color:"purple", meaning:"Hope & patience", season:["Summer","Autumn"], occasion:["Birthday","Just Because"], photo:flowerPhotos.aster},
  {id:"iris", name:"Iris", local:"Iris", price:27000, color:"blue", meaning:"Wisdom & hope", season:["Spring"], occasion:["Congratulations","Get Well Soon"], photo:flowerPhotos.iris},
  {id:"gladiolus", name:"Gladiolus", local:"Gladiol", price:26000, color:"pink", meaning:"Strength of character", season:["Summer"], occasion:["Congratulations","Graduation"], photo:flowerPhotos.gladiolus},
  {id:"anthurium", name:"Anthurium", local:"Anthurium", price:38000, color:"red", meaning:"Hospitality & boldness", season:["Winter"], occasion:["Congratulations","Just Because"], photo:flowerPhotos.anthurium},
  {id:"calla", name:"Calla Lily", local:"Calla Lily", price:36000, color:"white", meaning:"Elegance & devotion", season:["Spring","Summer"], occasion:["Wedding","Anniversary"], photo:flowerPhotos.calla},
  {id:"protea", name:"Protea", local:"Protea", price:42000, color:"peach", meaning:"Courage & transformation", season:["Autumn"], occasion:["Congratulations","Graduation"], photo:flowerPhotos.protea},
  {id:"waxflower", name:"Waxflower", local:"Waxflower", price:17000, color:"pink", meaning:"Enduring affection", season:["Summer"], occasion:["Wedding","Anniversary"], photo:flowerPhotos.waxflower},
  {id:"solidago", name:"Solidago", local:"Solidago", price:18000, color:"yellow", meaning:"Good fortune", season:["Autumn"], occasion:["Congratulations","Thank You"], photo:flowerPhotos.chrysanthemum},
  {id:"feverfew", name:"Feverfew", local:"Feverfew", price:16000, color:"white", meaning:"Cheerful simplicity", season:["Summer"], occasion:["Get Well Soon","Just Because"], photo:flowerPhotos.daisy},
  {id:"lavender", name:"Lavender", local:"Lavender", price:21000, color:"purple", meaning:"Calm & devotion", season:["Spring","Summer","Winter"], occasion:["Get Well Soon","Thank You"], photo:flowerPhotos.lavender},
  {id:"tuberose", name:"Tuberose", local:"Sedap Malam", price:28000, color:"white", meaning:"Pure intentions", season:["Winter"], occasion:["Wedding","Sympathy & Condolences"], photo:flowerPhotos.tuberose},
  {id:"sprayrose", name:"Spray Rose", local:"Spray Rose", price:23000, color:"pink", meaning:"Gentle affection", season:["Autumn","Winter"], occasion:["Birthday","Anniversary"], photo:flowerPhotos.rose},
  {id:"cymbidium", name:"Cymbidium Orchid", local:"Anggrek Cymbidium", price:50000, color:"green", meaning:"Respect & refinement", season:["Winter"], occasion:["Congratulations","Thank You"], photo:flowerPhotos.orchid}
];

// Central, deterministic A-Z mapping requested for Shop by Name.
const alphabetMapping = {
  A:"rose", B:"tulip", C:"lily", D:"peony", E:"lily", F:"hydrangea", G:"baby",
  H:"sunflower", I:"sunflower", J:"gerbera", K:"carnation", L:"chrysanthemum",
  M:"orchid", N:"lavender", O:"sakura", P:"magnolia", Q:"daisy", R:"ranunculus",
  S:"lisianthus", T:"snapdragon", U:"stock", V:"statice", W:"aster", X:"iris",
  Y:"gladiolus", Z:"anthurium"
};
const extraFlowers = {
  sakura: {id:"sakura", name:"Sakura (Cherry Blossom)", local:"Bunga Sakura", price:35000, color:"pink", meaning:"Renewal & the beauty of the moment", photo:flowerPhotos.sakura},
  magnolia: {id:"magnolia", name:"Magnolia", local:"Magnolia", price:38000, color:"white", meaning:"Dignity & perseverance", photo:flowerPhotos.magnolia},
  daisy: {id:"daisy", name:"Daisy", local:"Daisy", price:18000, color:"white", meaning:"Innocence & fresh starts", photo:flowerPhotos.daisy}
};
const getFlower = id => flowers.find(f => f.id === id) || extraFlowers[id];
const money = amount => new Intl.NumberFormat("id-ID", {style:"currency", currency:"IDR", maximumFractionDigits:0}).format(amount);
let activeColor = "all";
let activeSeason = "All";
let maxBudget = null;
let cart = [];
let currentNameBouquet = null;
let toastTimer;

const productGrid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");
const resultsNote = document.getElementById("resultsNote");
const budgetRange = document.getElementById("budgetRange");
const budgetValue = document.getElementById("budgetValue");
const budgetHint = document.getElementById("budgetHint");
const nameInput = document.getElementById("nameInput");
const nameError = document.getElementById("nameError");
const nameResult = document.getElementById("nameResult");
const studioEmpty = document.getElementById("studioEmpty");

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[char]));
}

function renderProducts() {
  const query = searchInput.value.trim().toLowerCase();
  let filtered = flowers.filter(f => {
    const matchesSearch = `${f.name} ${f.local} ${f.meaning}`.toLowerCase().includes(query);
    const matchesColor = activeColor === "all" || activeColor === "custom" || f.color === activeColor;
    const matchesSeason = activeSeason === "All" || f.season.includes(activeSeason);
    const matchesBudget = maxBudget === null || f.price <= maxBudget;
    return matchesSearch && matchesColor && matchesSeason && matchesBudget;
  });
  const sort = sortSelect.value;
  if (sort === "price-low") filtered.sort((a,b) => a.price-b.price);
  if (sort === "price-high") filtered.sort((a,b) => b.price-a.price);
  if (sort === "name") filtered.sort((a,b) => a.name.localeCompare(b.name));
  productGrid.innerHTML = filtered.map(f => `
    <article class="product-card">
      <div class="product-image">
        <img src="${f.photo}" alt="${escapeHtml(f.name)} flower" loading="lazy">
        <span class="product-tag">${escapeHtml(f.color)}</span>
        <button class="quick-add" data-add="${f.id}" aria-label="Add ${escapeHtml(f.name)} to bag">+</button>
      </div>
      <div class="product-meta"><h3>${escapeHtml(f.name)}</h3><strong>${money(f.price)}</strong></div>
      <p class="product-detail">${escapeHtml(f.local)} · ${escapeHtml(f.meaning)}</p>
    </article>`).join("");
  resultsNote.textContent = `${filtered.length} flower${filtered.length === 1 ? "" : "s"} found${activeSeason !== "All" ? ` for ${activeSeason}` : ""}${maxBudget !== null ? ` within ${money(maxBudget)}` : ""}.`;
  if (!filtered.length) productGrid.innerHTML = '<p class="empty-results">No flowers match those filters. Try another colour or budget.</p>';
}

function setColor(color) {
  activeColor = color;
  maxBudget = null;
  budgetHint.textContent = "Choose a budget to narrow down the catalogue.";
  document.querySelectorAll(".filter-chip").forEach(btn => btn.classList.toggle("active", btn.dataset.filter === color));
  renderProducts();
  document.getElementById("shop").scrollIntoView({behavior:"smooth"});
}
function setSeason(season) {
  activeSeason = season;
  activeColor = "all";
  maxBudget = null;
  document.querySelectorAll(".filter-chip").forEach(btn => btn.classList.toggle("active", btn.dataset.filter === "all"));
  renderProducts();
  document.getElementById("shop").scrollIntoView({behavior:"smooth"});
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
}
function addToCart(item) {
  const key = `${item.id}-${item.customName || ""}-${item.wrapping || ""}-${item.ribbon || ""}`;
  const existing = cart.find(entry => entry.key === key);
  if (existing) existing.qty += item.qty || 1;
  else cart.push({...item, key, qty:item.qty || 1});
  renderCart();
  showToast(`${item.name} added to your bag.`);
}
function renderCart() {
  const totalQty = cart.reduce((sum,item) => sum + item.qty, 0);
  const subtotal = cart.reduce((sum,item) => sum + item.price*item.qty, 0);
  document.getElementById("cartCount").textContent = totalQty;
  document.getElementById("cartHeaderCount").textContent = `(${totalQty})`;
  document.getElementById("cartSubtotal").textContent = money(subtotal);
  document.getElementById("cartItems").innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.photo}" alt="${escapeHtml(item.name)}">
      <div><h3>${escapeHtml(item.name)}</h3><small>${escapeHtml(item.detail || "Fresh flowers")}</small><small>Qty: ${item.qty}</small><strong>${money(item.price*item.qty)}</strong></div>
      <button class="remove-item" data-remove="${item.key}" aria-label="Remove ${escapeHtml(item.name)}">×</button>
    </div>`).join("");
  document.getElementById("cartEmpty").style.display = cart.length ? "none" : "flex";
  document.getElementById("cartItems").style.display = cart.length ? "block" : "none";
}
function openCart() {
  const overlay = document.getElementById("cartOverlay");
  overlay.classList.add("open");
  overlay.setAttribute("aria-hidden","false");
  document.body.style.overflow = "hidden";
}
function closeCart() {
  const overlay = document.getElementById("cartOverlay");
  overlay.classList.remove("open");
  overlay.setAttribute("aria-hidden","true");
  document.body.style.overflow = "";
}

function createNameBouquet(event) {
  event.preventDefault();
  nameError.textContent = "";
  const rawName = nameInput.value.trim();
  const normalized = rawName.toUpperCase().replace(/[^A-Z]/g, "");
  if (!rawName || !normalized) {
    nameError.textContent = "Please enter a name using letters A–Z first.";
    nameInput.focus();
    return;
  }
  if (normalized.length > 20) {
    nameError.textContent = "Please use a name with up to 20 letters for this preview.";
    return;
  }
  const stems = [...normalized].map((letter,index) => {
    const flowerId = alphabetMapping[letter];
    const flower = getFlower(flowerId);
    if (!flower) throw new Error(`No flower is configured for letter ${letter}.`);
    return {letter, index, flower};
  });
  currentNameBouquet = {rawName, normalized, stems};
  renderNameBouquet();
}
function renderNameBouquet() {
  if (!currentNameBouquet) return;
  const {rawName, stems} = currentNameBouquet;
  studioEmpty.classList.add("hidden");
  nameResult.classList.remove("hidden");
  document.getElementById("bouquetTitle").textContent = `${rawName}’s bouquet`;
  document.getElementById("stemCount").textContent = `${stems.length} stem${stems.length === 1 ? "" : "s"}`;
  document.getElementById("bouquetPreview").innerHTML = stems.map((stem,index) => `
    <div class="preview-stem" title="${escapeHtml(stem.letter)} — ${escapeHtml(stem.flower.name)}">
      <img src="${stem.flower.photo}" alt="${escapeHtml(stem.flower.name)}">
      <span style="height:${30 + (index % 4)*9}px"></span>
    </div>`).join("");
  document.getElementById("letterFlowerGrid").innerHTML = stems.map(stem => `
    <article class="letter-flower-card">
      <span class="letter-badge">${escapeHtml(stem.letter)}</span>
      <img src="${stem.flower.photo}" alt="${escapeHtml(stem.flower.name)}">
      <div><strong>${escapeHtml(stem.flower.name)}</strong><small>${escapeHtml(stem.flower.meaning)}</small></div>
    </article>`).join("");
  document.getElementById("namePrice").textContent = money(calculateNamePrice());
}
function calculateNamePrice() {
  if (!currentNameBouquet) return 0;
  // One stem per letter + a fixed arrangement/wrapping fee.
  return currentNameBouquet.stems.reduce((sum,stem) => sum + stem.flower.price, 0) + 45000;
}
function addNameToCart() {
  if (!currentNameBouquet) {
    nameError.textContent = "Create your bouquet first.";
    return;
  }
  const wrapping = document.getElementById("wrappingSelect").value;
  const ribbon = document.getElementById("ribbonSelect").value;
  const {rawName, stems} = currentNameBouquet;
  const photo = stems[0]?.flower.photo || flowerPhotos.rose;
  addToCart({
    id:`name-bouquet-${currentNameBouquet.normalized}`,
    name:`${rawName}’s Name Bouquet`,
    customName:rawName,
    price:calculateNamePrice(),
    qty:1,
    photo,
    wrapping,
    ribbon,
    detail:`${stems.map(s => s.flower.name).join(", ")} · ${wrapping} wrap · ${ribbon} ribbon`
  });
}
function checkoutViaWhatsApp() {
  if (!cart.length) {
    showToast("Your bag is empty — add a flower first.");
    return;
  }
  const lines = cart.map(item => `• ${item.name} x${item.qty} — ${money(item.price*item.qty)}${item.detail ? ` (${item.detail})` : ""}`);
  const subtotal = cart.reduce((sum,item) => sum + item.price*item.qty,0);
  const message = `Hello Bloom by Letter! I would like to order:\n${lines.join("\n")}\n\nSubtotal: ${money(subtotal)}\nPlease confirm availability and delivery.`;
  // Replace this sample number with the florist's WhatsApp number in international format.
  window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(message)}`, "_blank", "noopener");
}

searchInput.addEventListener("input", renderProducts);
sortSelect.addEventListener("change", renderProducts);
document.getElementById("activeFilters").addEventListener("click", event => {
  const btn = event.target.closest("[data-filter]");
  if (btn) { activeSeason = "All"; setColor(btn.dataset.filter); }
});
document.querySelectorAll("[data-color]").forEach(btn => btn.addEventListener("click", () => setColor(btn.dataset.color)));
document.querySelectorAll("[data-season]").forEach(btn => btn.addEventListener("click", () => {
  setSeason(btn.dataset.season);
  document.getElementById("mainNav").classList.remove("open");
}));
document.querySelectorAll("[data-occasion]").forEach(btn => btn.addEventListener("click", () => {
  const occasion = btn.dataset.occasion;
  activeSeason = "All";
  activeColor = "all";
  maxBudget = null;
  const matching = flowers.filter(f => f.occasion.includes(occasion));
  productGrid.innerHTML = matching.map(f => `
    <article class="product-card"><div class="product-image"><img src="${f.photo}" alt="${escapeHtml(f.name)}" loading="lazy"><span class="product-tag">${escapeHtml(occasion)}</span><button class="quick-add" data-add="${f.id}" aria-label="Add ${escapeHtml(f.name)}">+</button></div><div class="product-meta"><h3>${escapeHtml(f.name)}</h3><strong>${money(f.price)}</strong></div><p class="product-detail">${escapeHtml(f.meaning)}</p></article>`).join("");
  resultsNote.textContent = `${matching.length} flower options for ${occasion}.`;
  document.getElementById("shop").scrollIntoView({behavior:"smooth"});
}));
productGrid.addEventListener("click", event => {
  const btn = event.target.closest("[data-add]");
  if (!btn) return;
  const flower = getFlower(btn.dataset.add);
  if (flower) addToCart({id:flower.id,name:flower.name,price:flower.price,photo:flower.photo,detail:flower.meaning,qty:1});
});
budgetRange.addEventListener("input", () => budgetValue.textContent = money(Number(budgetRange.value)));
document.getElementById("applyBudget").addEventListener("click", () => {
  maxBudget = Number(budgetRange.value);
  activeColor = "all";
  activeSeason = "All";
  budgetHint.textContent = `Showing flowers priced at or below ${money(maxBudget)}.`;
  document.querySelectorAll(".filter-chip").forEach(btn => btn.classList.toggle("active",btn.dataset.filter === "all"));
  renderProducts();
  document.getElementById("shop").scrollIntoView({behavior:"smooth"});
});
document.getElementById("nameForm").addEventListener("submit", createNameBouquet);
document.getElementById("addNameBouquet").addEventListener("click", addNameToCart);
document.getElementById("wrappingSelect").addEventListener("change", () => {
  if (currentNameBouquet) document.getElementById("namePrice").textContent = money(calculateNamePrice());
});
document.getElementById("openCart").addEventListener("click", openCart);
document.getElementById("closeCart").addEventListener("click", closeCart);
document.getElementById("closeCartBackdrop").addEventListener("click", closeCart);
document.getElementById("cartItems").addEventListener("click", event => {
  const btn = event.target.closest("[data-remove]");
  if (!btn) return;
  cart = cart.filter(item => item.key !== btn.dataset.remove);
  renderCart();
});
document.getElementById("checkoutButton").addEventListener("click", checkoutViaWhatsApp);
document.getElementById("menuToggle").addEventListener("click", () => {
  const nav = document.getElementById("mainNav");
  const isOpen = nav.classList.toggle("open");
  document.getElementById("menuToggle").setAttribute("aria-expanded", String(isOpen));
});
document.querySelectorAll("#mainNav a").forEach(link => link.addEventListener("click", () => document.getElementById("mainNav").classList.remove("open")));
document.addEventListener("keydown", event => { if (event.key === "Escape") closeCart(); });
document.getElementById("year").textContent = new Date().getFullYear();

renderProducts();
renderCart();



const seasonGrid = document.querySelector(".season-grid");

seasonGrid.innerHTML = seasons.map(season => `
  <a href="#flowers"
     class="season-card"
     data-season="${season.name}">

    <img
      src="${season.photo}"
      alt="${season.name} flowers"
      loading="lazy"
    >

    <span class="season-number">${season.number}</span>

    <div class="season-copy">
      <h2>${season.title}</h2>
      <p>${season.flowers}</p>
    </div>

  </a>
`).join("");