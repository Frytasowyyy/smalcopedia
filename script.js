// Prosty skrypt obsługujący funkcjonalności Smalcopedii
document.addEventListener('DOMContentLoaded', function(){
  // --- Losowy artykuł ---
  const randomBtn = document.getElementById('randomArticle');
  if (randomBtn) {
    randomBtn.addEventListener('click', function(e) {
      e.preventDefault();
      // Lista wszystkich artykułów (pliki .html poza index i template)
      const articles = [
        'dropsie.html',
        'sylwek.html'
      ];
      const random = articles[Math.floor(Math.random() * articles.length)];
      if (random) {
        window.location.href = random;
      }
    });
  }

  // --- Wyszukiwarka ---
  const input = document.getElementById('searchInput');
  const list = document.getElementById('articleList');
  if (input && list) {
    const items = Array.from(list.querySelectorAll('li'));
    input.addEventListener('input', function(){
      const q = input.value.trim().toLowerCase();
      items.forEach(li => {
        const text = li.textContent.trim().toLowerCase();
        li.style.display = text.includes(q) ? '' : 'none';
      });
    });
  }
});