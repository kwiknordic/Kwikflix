export function renderSearch(results) {
  localStorage.setItem('searchQuery', JSON.stringify(results))
  window.location.href = "./search.html";
}