/**
 * Lista artykułów dostępnych w Smalcopedii.
 */
const articles = [
  {
    title: "Drops - pies bohater",
    url: "dropsie.html",
    description: "Historia bohaterskiego psa, który obronił swojego pana przed aligatorem."
  },
  {
    title: "Sylwek - ojciec smalca",
    url: "sylwek.html",
    description: "Postać kluczowa dla historii smalca, znana z wędrówek po bagrach."
  },
  {
    title: "Dywan z Barana",
    url: "dywanzbarana.html",
    description: "Legendarny artefakt o nieznanym pochodzeniu i wielu warstwach znaczeń."
  },
  {
    title: "Smalcologia",
    url: "#",
    description: "Nauka o smalcach, ich zwyczajach i strukturze społecznej."
  },
  {
    title: "Historia smalców",
    url: "#",
    description: "Kronika dziejów rodu smalców od czasów najdawniejszych."
  },
  {
    title: "Egipt",
    url: "egipt.html",
    description: "Egipt to przyszła destynacja Sylwka.",
  },
  {
    title: "Imperium Osmańskie",
    url: "imperiumosmanskie.html",
    description: "Imperium Osmańskie to jedno z ulubionych miejsce wakacji Sylwka i Moniki.",
  },
  {
    title: "Telefon Smalca",
    url: "telefonsmalca.html",
    description: "Telefon Smalca urzadzenie bez uzyteczne.",
  },
];

// Zachowujemy kompatybilność wsteczną dla starszych skryptów (np. losowego artykułu)
const articleList = articles.filter(a => a.url !== "#").map(a => a.url);
