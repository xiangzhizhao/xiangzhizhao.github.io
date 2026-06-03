<script>
  window.addEventListener("scroll", function () {
    const nav = document.querySelector(".topnav");
    if (nav) {
      if (window.scrollY > 10) {
        nav.classList.add("scrolled");
      } else {
        nav.classList.remove("scrolled");
      }
    }
  });

  const toggleBtn = document.getElementById("theme-toggle");

  function updateThemeButton() {
    if (!toggleBtn) return;
    const isDark = document.body.classList.contains("dark-mode");
    toggleBtn.textContent = isDark ? "☾" : "☀";
    toggleBtn.setAttribute("aria-pressed", String(isDark));
  }

  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
  }

  updateThemeButton();

  if (toggleBtn) {
    toggleBtn.addEventListener("click", function () {
      document.body.classList.toggle("dark-mode");
      localStorage.setItem(
        "theme",
        document.body.classList.contains("dark-mode") ? "dark" : "light"
      );
      updateThemeButton();
    });
  }
</script>
