(function () {
  var btn = document.querySelector(".menu-btn");
  var menu = document.getElementById("menu");
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
  if (!btn || !menu) return;
  function setOpen(open) {
    menu.classList.toggle("open", open);
    btn.setAttribute("aria-expanded", String(open));
  }
  btn.addEventListener("click", function () {
    setOpen(!menu.classList.contains("open"));
  });
  menu.addEventListener("click", function (e) {
    if (e.target.tagName === "A") setOpen(false);
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") setOpen(false);
  });
})();
