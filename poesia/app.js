/* =========================================================
   Poesía — lógica de la página
   ========================================================= */

const catMap = Object.fromEntries(CATEGORIAS.map((c) => [c.id, c]));
let activeCat = "todos";
let query = "";
let visible = [];        // poemas actualmente mostrados (para navegar en el modal)
let currentIndex = -1;

const $ = (sel) => document.querySelector(sel);
const gridEl = $("#grid");
const filtersEl = $("#filters");

/* ---- Filtros ---- */
function renderFilters() {
  filtersEl.innerHTML = "";
  CATEGORIAS.forEach((c) => {
    const b = document.createElement("button");
    b.className = "chip" + (c.id === activeCat ? " active" : "");
    b.innerHTML = `<span>${c.emoji}</span> ${c.nombre}`;
    b.onclick = () => { activeCat = c.id; renderFilters(); renderGrid(); };
    filtersEl.appendChild(b);
  });
}

/* ---- Grid ---- */
function previewText(t) {
  return t.split("\n").slice(0, 4).join("\n");
}

function renderGrid() {
  const q = query.trim().toLowerCase();
  visible = POEMAS.filter((p) => {
    const okCat = activeCat === "todos" || p.categoria === activeCat;
    const okQ = !q ||
      p.titulo.toLowerCase().includes(q) ||
      p.texto.toLowerCase().includes(q);
    return okCat && okQ;
  });

  gridEl.innerHTML = "";
  if (visible.length === 0) {
    gridEl.innerHTML = `<p class="empty">No encontré versos para esa búsqueda… 🌙</p>`;
    return;
  }

  visible.forEach((p, i) => {
    const cat = catMap[p.categoria] || { nombre: p.categoria, emoji: "✦" };
    const card = document.createElement("article");
    card.className = "card";
    card.style.animationDelay = `${i * 0.06}s`;
    card.innerHTML = `
      <span class="tag">${cat.emoji} ${cat.nombre}</span>
      <h3>${escapeHtml(p.titulo)}</h3>
      <p class="preview">${escapeHtml(previewText(p.texto))}</p>
      <div class="meta"><span>${escapeHtml(p.fecha || "")}</span><span class="read">Leer →</span></div>
    `;
    card.onclick = () => openModal(i);
    gridEl.appendChild(card);
  });
}

/* ---- Modal ---- */
const modal = $("#modal");
function openModal(i) {
  currentIndex = i;
  const p = visible[i];
  const cat = catMap[p.categoria] || { nombre: p.categoria, emoji: "✦" };
  $("#mTag").innerHTML = `${cat.emoji} ${cat.nombre}`;
  $("#mTitle").textContent = p.titulo;
  $("#mDate").textContent = p.fecha || "";
  $("#mBody").textContent = p.texto;
  $("#prevBtn").disabled = i === 0;
  $("#nextBtn").disabled = i === visible.length - 1;
  modal.classList.add("open");
  modal.querySelector(".modal-card").scrollTop = 0;
  document.body.style.overflow = "hidden";
}
function closeModal() {
  modal.classList.remove("open");
  document.body.style.overflow = "";
}
function step(dir) {
  const next = currentIndex + dir;
  if (next >= 0 && next < visible.length) openModal(next);
}

$("#closeModal").onclick = closeModal;
$("#prevBtn").onclick = () => step(-1);
$("#nextBtn").onclick = () => step(1);
modal.onclick = (e) => { if (e.target === modal) closeModal(); };
document.addEventListener("keydown", (e) => {
  if (!modal.classList.contains("open")) return;
  if (e.key === "Escape") closeModal();
  if (e.key === "ArrowLeft") step(-1);
  if (e.key === "ArrowRight") step(1);
});

/* ---- Búsqueda ---- */
$("#search").addEventListener("input", (e) => { query = e.target.value; renderGrid(); });

/* ---- Tema ---- */
const themeBtn = $("#themeBtn");
const savedTheme = localStorage.getItem("poesia-theme");
if (savedTheme) document.documentElement.setAttribute("data-theme", savedTheme);
syncThemeIcon();
themeBtn.onclick = () => {
  const cur = document.documentElement.getAttribute("data-theme");
  const next = cur === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("poesia-theme", next);
  syncThemeIcon();
};
function syncThemeIcon() {
  const cur = document.documentElement.getAttribute("data-theme");
  themeBtn.textContent = cur === "dark" ? "🌙" : "☀️";
}

/* ---- Util ---- */
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

/* ---- Fondo de estrellas ---- */
(function stars() {
  const c = document.getElementById("stars");
  const ctx = c.getContext("2d");
  let w, h, pts;
  function resize() {
    w = c.width = window.innerWidth;
    h = c.height = window.innerHeight;
    const n = Math.min(110, Math.floor((w * h) / 14000));
    pts = Array.from({ length: n }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      r: Math.random() * 1.4 + 0.3,
      a: Math.random(), s: Math.random() * 0.012 + 0.003,
    }));
  }
  function draw() {
    ctx.clearRect(0, 0, w, h);
    const light = document.documentElement.getAttribute("data-theme") === "light";
    pts.forEach((p) => {
      p.a += p.s;
      const op = (Math.sin(p.a) + 1) / 2 * 0.7 + 0.1;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = light
        ? `rgba(124, 77, 255, ${op * 0.4})`
        : `rgba(220, 210, 255, ${op})`;
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }
  window.addEventListener("resize", resize);
  resize(); draw();
})();

/* ---- Init ---- */
renderFilters();
renderGrid();
