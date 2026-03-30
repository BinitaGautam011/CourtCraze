/* shared.js — injects navbar + footer, manages active links, mobile menu */
(function () {
  const path = window.location.pathname;
  const inPanel = path.includes("client-panel");
  const file = path.split("/").pop() || "dashboard.html";

  /* ── NAV LINKS ── */
  const panelLinks = [
    { href: "dashboard.html", icon: "fa-gauge", label: "Dashboard" },
    { href: "Book.html", icon: "fa-calendar-plus", label: "Book" },
    { href: "history.html", icon: "fa-history", label: "History" },
    { href: "reward.html", icon: "fa-coins", label: "Rewards" },
    { href: "rating.html", icon: "fa-star", label: "Reviews" },
  ];

  /* ── FOOTER HTML ── */
  const footerHTML = `
<footer class="site-footer">
  <div class="footer-grid">
    <div class="footer-brand">
      <span class="footer-logo">CourtCraze</span>
      <p>Premium futsal experience in Bhaktapur District. Where passion meets precision.</p>
    </div>
    <div class="footer-col">
      <h4>Contact</h4>
      <ul>
        <li><i class="fas fa-map-marker-alt"></i> BSOA, Bhaktapur District</li>
        <li><i class="fas fa-phone"></i> 9744556763</li>
        <li><i class="fas fa-envelope"></i> info@courtcraze.com</li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Hours</h4>
      <ul>
        <li><i class="fas fa-sun"></i> Mon–Fri: 7 AM – 6 PM</li>
        <li><i class="fas fa-moon"></i> Sat–Sun: 6 AM – 7 PM</li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">© 2024 CourtCraze. Crafted with excellence for champions.</div>
</footer>`;

  /* ── BUILD APP NAV ── */
  if (inPanel) {
    const linksHTML = panelLinks
      .map(
        (l) =>
          `<a href="${l.href}" class="${file === l.href ? "active" : ""}">
         <i class="fas ${l.icon}"></i> ${l.label}
       </a>`,
      )
      .join("");

    const navHTML = `
<nav class="app-nav" id="appNav">
  <a href="dashboard.html" class="brand">CourtCraze</a>
  <div class="links" id="navLinks">${linksHTML}</div>
  <button class="ham" id="hamBtn" aria-label="Menu">
    <span></span><span></span><span></span>
  </button>
</nav>
<div class="mob-links" id="mobLinks">${linksHTML}</div>`;

    document.body.insertAdjacentHTML("afterbegin", navHTML);

    document.getElementById("hamBtn").addEventListener("click", () => {
      document.getElementById("mobLinks").classList.toggle("open");
    });
  }

  /* ── INJECT FOOTER ── */
  const footerEl = document.getElementById("site-footer");
  if (footerEl) footerEl.outerHTML = footerHTML;
})();
