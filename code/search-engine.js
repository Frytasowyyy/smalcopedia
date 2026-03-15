/**
 * Search Engine for Smalcopedia
 */

document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput');
  const searchForm = document.getElementById('searchForm');
  
  // Create search results container
  const resultsContainer = document.createElement('div');
  resultsContainer.id = 'searchResults';
  resultsContainer.className = 'search-results-dropdown';
  searchForm.appendChild(resultsContainer);

  let debounceTimer;

  searchInput.addEventListener('input', () => {
    clearTimeout(debounceTimer);
    const query = searchInput.value.trim().toLowerCase();
    
    if (query.length < 2) {
      resultsContainer.classList.remove('active');
      return;
    }

    debounceTimer = setTimeout(() => {
      const matches = searchArticles(query);
      renderResults(matches);
    }, 150);
  });

  // Close results when clicking outside
  document.addEventListener('click', (e) => {
    if (!searchForm.contains(e.target)) {
      resultsContainer.classList.remove('active');
    }
  });

  /**
   * Simple and fast search algorithm
   */
  function searchArticles(query) {
    // Simple weighting: title match > description match
    return articles
      .map(article => {
        let score = 0;
        if (article.title.toLowerCase().includes(query)) score += 10;
        if (article.title.toLowerCase().startsWith(query)) score += 5;
        if (article.description.toLowerCase().includes(query)) score += 2;
        return { ...article, score };
      })
      .filter(item => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 5); // Return top 5 matches
  }

  function renderResults(matches) {
    if (matches.length === 0) {
      resultsContainer.innerHTML = '<div class="no-results">Brak wyników</div>';
    } else {
      resultsContainer.innerHTML = matches.map(match => `
        <div class="search-item" data-url="${match.url}">
          <div class="search-item-title">${match.title}</div>
          <div class="search-item-desc">${match.description}</div>
        </div>
      `).join('');

      resultsContainer.querySelectorAll('.search-item').forEach(item => {
        item.addEventListener('click', () => {
          const url = item.getAttribute('data-url');
          if (url && url !== '#') {
            const inPagesFolder = window.location.pathname.includes('/pages/');
            const target = inPagesFolder ? url : 'pages/' + url;
            window.location.href = target;
          }
        });
      });
    }
    resultsContainer.classList.add('active');
  }
});
