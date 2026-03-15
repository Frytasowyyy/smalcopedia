# Jak dodać artykuł do Smalcopedii

## Krok 1: Napisz artykuł w Markdown

1. Utwórz nowy plik w folderze `artykuly/` z rozszerzeniem `.md`.
2. Nazwa pliku powinna być w formacie `nazwa-artykulu.md` (bez polskich znaków, małe litery, myślniki zamiast spacji).
3. Napisz treść artykułu w formacie Markdown. Przykład struktury:

```markdown
# Tytuł artykułu

## Wstęp

Treść wstępu...

## Sekcja 1

Treść sekcji...

## Sekcja 2

Treść sekcji...
```

## Krok 2: Utwórz stronę HTML

1. Skopiuj plik `pages/template.html` do nowego pliku w `pages/` o nazwie `nazwa-artykulu.html`.
2. W nowym pliku HTML zmień:
   - `<title>` na tytuł artykułu.
   - W `<article class="article" data-markdown="../artykuly/nazwa-artykulu.md">` ustaw poprawną ścieżkę do pliku Markdown.
3. Dodaj linki nawigacyjne, jeśli potrzebne.

## Krok 3: Dodaj do listy artykułów

1. Otwórz plik `code/articles.js`.
2. Dodaj nowy obiekt do tablicy `articles`. Każdy artykuł powinien zawierać tytuł, URL oraz krótki opis, który pozwoli wyszukiwarce na lepsze działanie:

```javascript
const articles = [
  // ... istniejące artykuły ...
  {
    title: "Tytuł Twojego Artykułu",
    url: "nazwa-artykulu.html",
    description: "Krótki opis treści, który pojawi się w wynikach wyszukiwania."
  }
];
```

*Ważne: Opis powinien być zwięzły i zawierać słowa kluczowe, po których użytkownicy mogą szukać Twojego artykułu.*

## Krok 4: Dodaj zdjęcia (opcjonalnie)

1. Umieść zdjęcia w folderze `zdjecia/`.
2. W Markdown użyj składni: `![Alt text](zdjecia/nazwa-zdjecia.jpg)`

## Krok 5: Testuj

1. Otwórz stronę lokalnie.
2. Sprawdź, czy artykuł ładuje się poprawnie.
3. Przetestuj wyszukiwarkę i losowy artykuł.

## Krok 6: Wyślij zmiany przez Git (dla współtwórców)

Jeśli chcesz dodać artykuł do głównego projektu, wykonaj te proste kroki. Potrzebujesz zainstalowanego Git (można pobrać za darmo z internetu).

### Przygotowanie

1. Otwórz terminal lub wiersz polecenia na swoim komputerze.
2. Przejdź do folderu z projektem: `cd ścieżka/do/smalcopedia`

### Krok 1: Stwórz nowy branch

Branch to jak oddzielna wersja projektu. Wpisz:

```
git checkout -b moj-nowy-artykul
```

(Zamień "moj-nowy-artykul" na nazwę swojego artykułu, np. "artykul-o-smalcu")

### Krok 2: Dodaj pliki

Powiedz Gitowi, które pliki dodać:

```
git add .
```

To dodaje wszystkie nowe pliki.

### Krok 3: Zapisz zmiany

Utwórz "commit" (zapis zmian) z opisem:

```
git commit -m "Dodaję nowy artykuł: [nazwa artykułu]"
```

(Zamień [nazwa artykułu] na tytuł swojego artykułu)

### Krok 4: Wyślij do GitHub

Wyślij branch na GitHub:

```
git push origin moj-nowy-artykul
```

(Zamień "moj-nowy-artykul" na nazwę swojego brancha)

### Krok 5: Stwórz Pull Request

1. Otwórz przeglądarkę i przejdź do https://github.com/Frytasowyyy/smalcopedia
2. Kliknij "Compare & pull request" obok swojego brancha.
3. Napisz krótki opis zmian.
4. Kliknij "Create pull request".

Administrator sprawdzi Twoje zmiany i doda je do projektu. Jeśli coś pójdzie nie tak, zapytaj o pomoc!

## Wskazówki

- Używaj nagłówków H1, H2 itp. dla struktury.
- Dodaj spis treści, jeśli artykuł jest długi.
- Zachowaj styl podobny do innych artykułów.
- Przed wysłaniem sprawdź, czy wszystko działa.
