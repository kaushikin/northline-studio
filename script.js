const nav = document.getElementById("nav");
const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");

window.addEventListener("scroll", () => {
  nav?.classList.toggle("scrolled", window.scrollY > 12);
});

menuBtn?.addEventListener("click", () => {
  const open = mobileNav.classList.toggle("open");
  menuBtn.innerHTML = open ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
  menuBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
});

mobileNav?.querySelectorAll("[data-close], a").forEach((el) => {
  el.addEventListener("click", () => {
    mobileNav.classList.remove("open");
    if (menuBtn) menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
  });
});

const form = document.getElementById("quoteForm");
form?.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const need = document.getElementById("need").value;
  const location = document.getElementById("location")?.value || "";
  const msg = document.getElementById("msg").value.trim();
  const text = [
    "Hi Northline, I want a quote.",
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Need: ${need}`,
    location ? `Location: ${location}` : "",
    msg ? `Brief: ${msg}` : "",
  ].filter(Boolean).join("\n");
  window.open(`https://wa.me/919483874076?text=${encodeURIComponent(text)}`, "_blank", "noopener");
});
