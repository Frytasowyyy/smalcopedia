// Prosty skrypt wyszukiwarki filtrującej listę artykułów
document.addEventListener('DOMContentLoaded', function(){
  const input = document.getElementById('searchInput');
  const list = document.getElementById('articleList');
  if(!input || !list) return;
  const items = Array.from(list.querySelectorAll('li'));
  input.addEventListener('input', function(){
    const q = input.value.trim().toLowerCase();
    items.forEach(li => {
      const text = li.textContent.trim().toLowerCase();
      li.style.display = text.includes(q) ? '' : 'none';
    });
  });
});