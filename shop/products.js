/**
 * HOW TO ADD AN AMAZON PRODUCT (no Grok needed)
 *
 * 1. Put a square/packshot image here:
 *    assets/shop/your-product.png
 *
 * 2. Copy the block below, paste it AFTER the sunscreen product
 *    (keep the comma between products).
 *
 * 3. Change only: slug, name, image filename, blurb, take, who, skip,
 *    and the Amazon link.
 *    slug = short-kebab-name  e.g. "boat-earbuds"
 *
 * 4. YouTube / ads / comment link is always:
 *    https://www.gonorthline.uk/shop/item.html?p=YOUR-SLUG
 *
 * 5. Save, then git add / commit / push (or tell Grok "push picks").
 *
 * Amazon tag kaushikbn-21 is added automatically if missing.
 * Never auto-redirect. Visitor must tap Amazon.
 *
 * TEMPLATE (uncomment and edit):
 *
 *  {
 *    slug: "new-product",
 *    name: "Product name",
 *    category: "Beauty",
 *    image: "../assets/shop/new-product.png",
 *    stores: ["amazon"],
 *    priceNote: "Size · typical price band",
 *    blurb: "One or two honest sentences.",
 *    take: "Your real opinion. Who it is for. Any catch.",
 *    who: "Who should buy",
 *    skip: "Who should skip",
 *    links: {
 *      amazon: "https://www.amazon.in/dp/ASIN?tag=kaushikbn-21",
 *    },
 *  },
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
  {
    slug: "vilvah-skin-finish-sunscreen",
    name: "Vilvah Skin Finish Sunscreen SPF 50 PA++++",
    category: "Beauty",
    image: "../assets/shop/vilvah-skin-finish-sunscreen.jpg",
    stores: ["amazon"],
    priceNote: "50ml · usually around ₹549–599",
    blurb: "Lightweight gel-cream SPF 50 PA++++ from Vilvah — rice milk, ectoin, and new-age UV filters. Made for Indian skin and humidity. No white-cast claim.",
    take: "Second Northline Pick, and the one you shared. This is Vilvah’s newer Skin Finish tube (not the older Melt-in-Milk). Amazon listing is ASIN B0GPDC2S47: SPF 50 PA++++, water-resistant, unisex, rice milk + ectoin + brown algae + mulberry. Ratings sit around 4.3 from 140+ Amazon reviews; Vilvah’s own site has a few hundred more, mostly on no white cast and a skin-like finish. We would use it as a daily city / commute sunscreen under humidity, including under makeup. Reapply after sweat or a few hours — water-resistant is not all-day beach sport cover. Patch-test if your skin is reactive. Check you are buying Skin Finish SPF 50 PA++++, not the older Melt-in-Milk SPF 50 PA+++ listing.",
    who: "People who want a no-white-cast daily SPF 50 for Indian weather, including oily and mixed skin",
    skip: "Anyone needing a certified sport / water-sport sunscreen, or anyone who has not patch-tested sensitive skin",
    links: {
      amazon: "https://www.amazon.in/dp/B0GPDC2S47?tag=kaushikbn-21",
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
