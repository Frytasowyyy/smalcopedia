/**
 * Skrypt pobierający statystyki projektu prosto z repozytorium GitHub.
 */
document.addEventListener("DOMContentLoaded", function () {
  const repoOwner = "Frytasowyyy";
  const repoName = "smalcopedia";
  const apiBase = `https://api.github.com/repos/${repoOwner}/${repoName}`;

  const articleCountEl = document.getElementById("articleCount");
  const lastUpdateEl = document.getElementById("lastUpdate");

  if (!articleCountEl || !lastUpdateEl) return;

  // 1. Pobieranie daty ostatniego "pusha" (aktualizacji)
  fetch(apiBase)
    .then((response) => {
      if (!response.ok) throw new Error("Błąd pobierania danych z GitHub API");
      return response.json();
    })
    .then((data) => {
      const lastPush = new Date(data.pushed_at);
      const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      };
      lastUpdateEl.textContent = lastPush.toLocaleDateString("pl-PL", options);
    })
    .catch((err) => {
      console.error(err);
      lastUpdateEl.textContent = "Nie udało się pobrać daty";
    });

  // 2. Pobieranie liczby artykułów
  // Używamy articleList.length dla prostoty i kompatybilności lokalnej
  articleCountEl.textContent = articleList.length;
});
