document.addEventListener("DOMContentLoaded", () => {
  const contentElement = document.querySelector(".article");
  if (!contentElement) return;

  const markdownFile = contentElement.getAttribute("data-markdown");
  if (!markdownFile) return;

  // Load marked.js dynamically if not already present
  if (typeof marked === "undefined") {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/marked/marked.min.js";
    script.onload = () => loadMarkdown(markdownFile, contentElement);
    document.head.appendChild(script);
  } else {
    loadMarkdown(markdownFile, contentElement);
  }
});

async function loadMarkdown(file, container) {
  try {
    const response = await fetch(file);
    if (!response.ok) throw new Error(`Failed to load ${file}`);
    const text = await response.text();

    // We want to preserve the title and metadata if they are outside the markdown or handle them within
    // For Smalcopedia, let's just replace the whole content of .article if requested,
    // or maybe just a specific section.

    // Let's assume the markdown contains the whole article body.
    container.innerHTML = marked.parse(text);

    // Add a back button if it was there before but got overwritten
    if (!container.querySelector('a[href="../index.html"]')) {
      const backLink = document.createElement("p");
      backLink.innerHTML = '<a href="../index.html">Powrót do Smalcopedii</a>';
      container.appendChild(backLink);
    }
  } catch (error) {
    console.error("Error loading markdown:", error);
    container.innerHTML = `<p>Error loading content: ${error.message}</p>`;
  }
}
