import { CATEGORIES, CATEGORY_LABELS, PRIZES } from "./utils/constants";
import type { Filter } from "./utils/types";

export const CATEGORY_BUTTON_SELECTOR = '[data-filter="category"]';

let filterCat: Filter = "all";

function countByCategory(category: Filter): number {
  if (category == "all") return PRIZES.length;
  return PRIZES.filter((p) => p.category == category).length;
}

function updateCategoryCounts() {
  CATEGORIES.forEach((category) => {
    const countElement = document.getElementById(`cnt-${category}`);
    if (!countElement) return;

    countElement.textContent = String(countByCategory(category));
  });
}

function setActiveCategoryButton(activeButton: HTMLButtonElement) {
  document.querySelectorAll<HTMLButtonElement>(CATEGORY_BUTTON_SELECTOR).forEach((button) => {
    button.classList.toggle("active", button === activeButton);
  });
}

function bindCategoryButtons() {
  document.querySelectorAll<HTMLButtonElement>(CATEGORY_BUTTON_SELECTOR).forEach((button) => {
    button.addEventListener("click", () => {
      setActiveCategoryButton(button);
      filterCat = button.dataset.value as Filter;
      renderGrid();
    });
  });
}

function filteredItems() {
  return PRIZES.filter((p) => filterCat == "all" || p.category == filterCat);
}

function renderGrid() {
  const items = filteredItems();
  const grid = document.getElementById("grid");
  if (!grid) return;

  grid.innerHTML = "";

  updateResultCount();

  items.forEach((item) => {
    const a = document.createElement("a");
    a.className = "card";
    a.href = "viewer?id=" + item.id;

    const thumb = document.createElement("div");
    thumb.className = "card-thumb";
    const img = document.createElement("img");
    img.className = "card-thumb-image";
    img.alt = item.name;
    img.loading = "lazy";
    img.decoding = "async";
    thumb.appendChild(img);
    thumb.innerHTML += `<div class="card-thumb-overlay"></div><span class="card-category-badge">${CATEGORY_LABELS[item.category]}</span>`;

    const body = document.createElement("div");
    body.className = "card-body";
    body.innerHTML = `
      <div class="card-name">${item.name}</div>
      <div class="card-meta">
        <span class="card-date">${item.date}</span>
        <span class="card-dept">${item.recipient}</span>
      </div>
    `;

    a.appendChild(thumb);
    a.appendChild(body);
    grid.appendChild(a);
  });
}

function updateResultCount() {
  const items = filteredItems();
  const count = document.getElementById("result-count");
  if (!count) return;
  count.innerText = `${items.length} 件`;
}

updateCategoryCounts();
updateResultCount();
bindCategoryButtons();
renderGrid();
