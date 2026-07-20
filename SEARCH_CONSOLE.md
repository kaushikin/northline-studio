# Google Search Console setup for gonorthline.uk

## Already live (no action needed)
- Sitemap: https://www.gonorthline.uk/sitemap.xml
- Robots: https://www.gonorthline.uk/robots.txt
- Canonical + schema SEO on homepage

## Recommended: verify with DNS (Cloudflare)

1. Open https://search.google.com/search-console
2. **Add property** → choose **Domain** → enter: `gonorthline.uk`
3. Google shows a **TXT** record (starts with `google-site-verification=...`)
4. Cloudflare → **gonorthline.uk** → **DNS** → **Add record**:
   - Type: **TXT**
   - Name: `@`
   - Content: paste Google’s full string
   - Proxy: **DNS only** (grey cloud)
5. Save → wait 1–5 minutes → click **Verify** in Search Console

## After verified

1. Left menu → **Sitemaps**
2. Add: `sitemap.xml`
3. Submit
4. Top bar → inspect `https://www.gonorthline.uk/` → **Request indexing**

## Optional: also add URL-prefix property

Add property type **URL prefix**: `https://www.gonorthline.uk`  
(Can use same DNS verification or HTML tag.)

## HTML meta tag method (if you prefer)

1. In Search Console, choose **URL prefix** → HTML tag
2. Copy the meta tag
3. Ask the agent to add it to `index.html` and redeploy
