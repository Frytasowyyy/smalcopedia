# Smalcopedia — szablon strony wiki

To jest prosty, lokalny szablon strony "Smalcopedia" wzorowany na układzie wiki (pasek boczny, wyszukiwarka, artykuły), przygotowany jako punkt startowy.

Pliki w projekcie:
- `index.html` — strona główna / przykładowy artykuł
- `styles.css` — style wyglądu
- `script.js` — mała logika wyszukiwania lokalnej listy artykułów

Jak uruchomić
1. Otwórz `index.html` w przeglądarce (dwuklik w Eksploratorze plików lub `Ctrl+O` w przeglądarce i wybierz plik).

Uwagi prawne i etyczne
- Ten szablon NIE kopiuje logo ani treści Wikipedii. Tworzy jedynie podobny układ interfejsu użytkownika. Prawa autorskie i znaki towarowe Wikipedii/WMF pozostają własnością odpowiednich właścicieli.
- Jeśli chcesz uruchomić prawdziwe wiki z funkcjami edycji, historii wersji i wyszukiwarką, rozważ instalację MediaWiki (https://www.mediawiki.org) lub użycie gotowego CMS z modułem wiki.

Następne kroki (opcjonalne)
- Dodać backend do przechowywania artykułów (MediaWiki, headless CMS + REST API, itp.).
- Dodać mechanizm edycji artykułów i historię wersji.
- Dodać pełnotekstową wyszukiwarkę (Elasticsearch, Meilisearch lub wyszukiwarka SQL).

Jeśli chcesz, mogę:
- Zainstalować i skonfigurować MediaWiki w środowisku serwera (instrukcje + pliki konfiguracyjne).
- Albo rozbudować ten szablon do prostego SPA (React/Next) z backendem Node/SQLite.

Napisz, w którą stronę mam dalej iść — prosty front-end, czy pełne wiki z MediaWiki?