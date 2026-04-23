import { CATEGORY_LABELS, PRIZES } from "./utils/constants";

let panelOpen = true;

type PanelFields = {
  category: HTMLElement;
  name: HTMLElement;
  year: HTMLElement;
  department: HTMLElement;
  competition: HTMLElement;
  description: HTMLElement;
};

function updatePanelToggleState(toggle: HTMLElement, panel: HTMLElement) {
  panel.classList.toggle("hidden", !panelOpen);
  toggle.textContent = panelOpen ? "›" : "‹";
  toggle.style.right = panelOpen ? `calc(var(--panel-w) + 12px)` : "12px";
}

function initPanelToggle() {
  const toggle = document.getElementById("panel-toggle");
  const panel = document.getElementById("panel");
  if (!(toggle && panel)) return;

  updatePanelToggleState(toggle, panel);
  toggle.addEventListener("click", () => {
    panelOpen = !panelOpen;
    updatePanelToggleState(toggle, panel);
  });
}

function getPanelFields(): PanelFields | null {
  const category = document.getElementById("p-category");
  const name = document.getElementById("p-name");
  const year = document.getElementById("p-year");
  const department = document.getElementById("p-dept");
  const competition = document.getElementById("p-comp");
  const description = document.getElementById("p-desc");

  if (!(category && name && year && department && competition && description)) {
    return null;
  }

  return {
    category,
    name,
    year,
    department,
    competition,
    description,
  };
}

function getPrizeIdFromQuery(): string | null {
  const urlParams = new URLSearchParams(location.search);
  return urlParams.get("id");
}

function renderPanel(fields: PanelFields, prizeId: number) {
  const item = PRIZES.find((prize) => prize.id === prizeId);
  if (!item) return;

  fields.category.innerText = CATEGORY_LABELS[item.category];
  fields.name.innerText = item.name;
  fields.year.innerText = `${item.date.split("-")[0]}年`;
  fields.department.innerText = item.recipient;
  fields.competition.innerText = item.event;
  fields.description.innerText = item.description;
}

function initPanel() {
  const prizeId = getPrizeIdFromQuery();
  const fields = getPanelFields();
  if (!(prizeId && fields)) return;

  renderPanel(fields, Number(prizeId));
}

initPanelToggle();
initPanel();
