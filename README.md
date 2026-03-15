# Smalcopedia

Smalcopedia to wolna encyklopedia poświęcona przygodom Smalca i jego dziwnym historiom. Projekt jest inspirowany Wikipedią, ale skupia się na oryginalnych treściach związanych z postacią Smalca.

## Opis projektu

Smalcopedia to statyczna strona internetowa zbudowana przy użyciu HTML, CSS i JavaScript. Artykuły są pisane w formacie Markdown i konwertowane na HTML za pomocą biblioteki Marked.js. Strona zawiera funkcjonalności takie jak wyszukiwarka, losowy artykuł i statystyki projektu.

## Struktura projektu

- `index.html` - Strona główna
- `pages/` - Indywidualne strony artykułów (HTML)
- `artykuly/` - Źródła artykułów w formacie Markdown
- `code/` - Skrypty JavaScript (articles.js, script.js, markdown.js, statistics.js)
- `styles/` - Arkusze stylów CSS
- `zdjecia/` - Zdjęcia i multimedia
- `docs/` - Dokumentacja projektu

## Jak uruchomić lokalnie

1. Sklonuj repozytorium: `git clone https://github.com/Frytasowyyy/smalcopedia.git`
2. Otwórz `index.html` w przeglądarce internetowej.
3. Dla pełnej funkcjonalności, uruchom serwer lokalny (np. za pomocą Python: `python -m http.server` w folderze projektu).

## Jak dodać artykuł

Zobacz dokumentację w `docs/jak-dodac-artykul.md`.

## Deploy na GitHub Pages

Projekt jest skonfigurowany do automatycznego deployu na GitHub Pages. Wystarczy push do głównego brancha.

## Licencja

Projekt jest dostępny na licencji MIT.

## Kontakt

Dla pytań lub sugestii, skontaktuj się przez GitHub Issues.
