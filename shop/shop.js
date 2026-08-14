const STORE_META = {
  amazon: { label: "Amazon", icon: "fa-brands fa-amazon", className: "store-amazon" },
  flipkart: { label: "Flipkart", icon: "fa-solid fa-bag-shopping", className: "store-flipkart" },
  myntra: { label: "Myntra", icon: "fa-solid fa-shirt", className: "store-myntra" },
  meesho: { label: "Meesho", icon: "fa-solid fa-store", className: "store-meesho" },
  clickbank: { label: "ClickBank", icon: "fa-solid fa-globe", className: "store-clickbank" },
};

function productBySlug(slug) {
  return (window.NORTHLINE_PRODUCTS || []).find((p) => p.slug === slug);
}

function storeButtons(product) {
  return (product.stores || [])
    .map((store) => {
      const meta = STORE_META[store];
      if (!meta || !product.links?.[store]) return "";
      const href = window.northlineAffiliateUrl(store, product.links[store]);
      return `<a class="btn ${meta.className}" href="${href}" target="_blank" rel="nofollow sponsored noopener">
        <i class="${meta.icon}"></i> ${meta.label}
      </a>`;
    })
    .join("");
}

function renderCatalog() {
  const grid = document.getElementById("shopGrid");
  if (!grid) return;
  const filter = document.querySelector(".shop-filter.active")?.dataset.store || "all";
  const items = (window.NORTHLINE_PRODUCTS || []).filter(
    (p) => filter === "all" || p.stores.includes(filter)
  );
  grid.innerHTML = items
    .map(
      (p) => `
      <article class="shop-card">
        ${p.image ? `<img class="shop-card-img" src="${p.image}" alt="${p.name}" />` : ""}
        <div class="shop-card-top">
          <span class="tag">${p.category}</span>
          <div class="shop-store-pills">
            ${p.stores.map((s) => `<span class="store-pill ${s}">${STORE_META[s]?.label || s}</span>`).join("")}
          </div>
        </div>
        <h3>${p.name}</h3>
        <p>${p.blurb}</p>
        <p class="shop-price">${p.priceNote}</p>
        <div class="work-links">
          <a href="item.html?p=${encodeURIComponent(p.slug)}">Open pick →</a>
        </div>
      </article>`
    )
    .join("");
}

function renderProduct() {
  const root = document.getElementById("productRoot");
  if (!root) return;
  const slug = new URLSearchParams(location.search).get("p");
  const product = productBySlug(slug);
  if (!product) {
    root.innerHTML = `<div class="section-head"><h1>Pick not found</h1><p><a href="index.html">Back to all picks</a></p></div>`;
    return;
  }
  document.title = `${product.name} | Northline Picks`;
  const canon = `https://www.gonorthline.uk/shop/item.html?p=${product.slug}`;
  const desc = document.querySelector('meta[name="description"]');
  if (desc) desc.setAttribute("content", product.take);
  const og = document.querySelector('meta[property="og:title"]');
  if (og) og.setAttribute("content", product.name + " — Northline Picks");

  root.innerHTML = `
    <p class="eyebrow"><span class="dot"></span> Northline Pick · ${product.category}</p>
    ${product.image ? `<img class="shop-hero-img" src="${product.image}" alt="${product.name}" />` : ""}
    <h1>${product.name}</h1>
    <p class="hero-lead">${product.blurb}</p>
    <p class="shop-price">${product.priceNote}</p>
    <div class="shop-take">
      <h2>Our take</h2>
      <p>${product.take}</p>
      <ul class="shop-who">
        <li><strong>Good for:</strong> ${product.who}</li>
        <li><strong>Skip if:</strong> ${product.skip}</li>
      </ul>
    </div>
    <p class="shop-cta-label">Choose a store — you leave Northline and buy there.</p>
    <div class="shop-store-row">${storeButtons(product)}</div>
    <p class="form-note">Affiliate links. We may earn a commission if you buy. Same price for you.</p>
    <p class="shop-share">YouTube / ads: use <code>${canon}</code></p>
    <p><a href="index.html">← All picks</a></p>
  `;
}

document.querySelectorAll(".shop-filter").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".shop-filter").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    renderCatalog();
  });
});

renderCatalog();
renderProduct();
