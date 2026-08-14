/**
 * Northline Picks — affiliate catalog
 *
 * YouTube / ads: https://www.gonorthline.uk/shop/item.html?p=SLUG
 * Never auto-redirect. Visitor must click a store button.
 *
 * Amazon only for now (Associates tag kaushikbn-21).
 * ExtraPe / Flipkart / Myntra / Meesho can wait.
 */
window.NORTHLINE_AFFILIATE = {
  amazonTag: "kaushikbn-21",
  flipkartId: "YOUR_FLIPKART_ID",
  myntraId: "YOUR_MYNTRA_ID",
  clickbankHop: "YOURHOP.clickbank.net",
};

window.NORTHLINE_PRODUCTS = [
  {
    slug: "minimalist-sunscreen",
    name: "Minimalist Sunscreen SPF 50 PA++++",
    category: "Beauty",
    featured: true,
    image: "../assets/shop/minimalist-sunscreen.png",
    stores: ["amazon"],
    priceNote: "30g tube · often on offer on Amazon",
    blurb: "Everyday face sunscreen from Minimalist — SPF 50, PA++++, niacinamide and multi-vitamins. Lightweight cream for dry and mixed Indian skin.",
    take: "This is our first Northline Pick. Minimalist’s SPF 50 PA++++ is the tube a lot of people in India actually finish — unscented, sold by Minimalist Inc, and easy to use under a morning routine. Reviews sit around 4.1 from 35,000+ ratings: most people say it protects and feels light; a smaller group finds it oily, a bit sweaty in heat, or says it does not suit acne-prone skin. We would use it as a daily city sunscreen, not as a beach / all-day outdoor sport cream. Patch-test if your skin breaks out easily. Listing is often marked not returnable, so check size (30g vs 50g) before you tap buy.",
    who: "Men and women who want a simple daily SPF 50 for Bangalore / Indian sun, including drier skin",
    skip: "Very oily or reactive skin until you have patch-tested; anyone needing a water-sport / sweat-proof sport sunscreen",
    links: {
      amazon: "https://www.amazon.in/dp/B0CW5BK193?tag=kaushikbn-21",
    },
  },
];

window.northlineAffiliateUrl = function northlineAffiliateUrl(store, rawUrl) {
  const cfg = window.NORTHLINE_AFFILIATE || {};
  try {
    const u = new URL(rawUrl);
    if (store === "amazon" && cfg.amazonTag) {
      u.searchParams.set("tag", cfg.amazonTag);
    }
    if (store === "flipkart" && cfg.flipkartId && cfg.flipkartId !== "YOUR_FLIPKART_ID") {
      u.searchParams.set("affid", cfg.flipkartId);
    }
    return u.toString();
  } catch {
    return rawUrl;
  }
};
