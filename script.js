// Prosty skrypt obsługujący funkcjonalności Smalcopedii
document.addEventListener('DOMContentLoaded', function(){
  // --- Losowy artykuł ---
  const randomBtn = document.getElementById('randomArticle');
  if (randomBtn) {
    randomBtn.addEventListener('click', function(e) {
      e.preventDefault();
      // Pobiera listę z articles.js
      const random = articleList[Math.floor(Math.random() * articleList.length)];
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