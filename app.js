// Preserve the original storage key so existing training data survives rebranding.
const KEY = 'hybrid.pwa.v1.2026-10-01';
const $ = selector => document.querySelector(selector);
const initialState = () => ({plan: structuredClone(SEED), done: {}, planVersion: PLAN_VERSION});
const esc = value => String(value ?? '').replace(/[&<>"]/g, c => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;'}[c]));

function validState(value) {
  return value && Array.isArray(value.plan) && value.plan.every(day =>
    day && ['date', 'day', 'morning', 'evening'].every(key => typeof day[key] === 'string') &&
    (day.blank === undefined || typeof day.blank === 'boolean')) &&
    (value.done === undefined || (value.done !== null && typeof value.done === 'object' &&
      !Array.isArray(value.done) && Object.values(value.done).every(done => typeof done === 'boolean')));
}
let state;
try {
  const stored = JSON.parse(localStorage.getItem(KEY) || 'null');
  state = validState(stored) ? {...stored, done: stored.done || {}} : initialState();
} catch {
  state = initialState();
}
let week = 0, selected = 3, editIndex = null;

// Persist before replacing the live state: failed imports/storage writes must not destroy data.
function commit(next) {
  try {
    localStorage.setItem(KEY, JSON.stringify(next));
    state = next;
    return true;
  } catch {
    alert('Data se nepodařilo uložit. Zkontroluj dostupné místo a povolení úložiště prohlížeče.');
    return false;
  }
}

function render() {
  week = Math.min(week, Math.max(0, Math.ceil(state.plan.length / 7) - 1));
  const start = week * 7, days = state.plan.slice(start, start + 7);
  selected = Math.min(selected, Math.max(0, days.length - 1));
  $('#prevBtn').disabled = week === 0;
  $('#nextBtn').disabled = start + 7 >= state.plan.length;
  $('#weekTitle').textContent = days.length ? `${days[0].date} – ${days.at(-1).date}` : 'Bez dalších dat';
  $('#daystrip').innerHTML = days.map((day, index) => `<button class="daypick ${index === selected ? 'active' : ''}" onclick="pick(${index})">${esc(day.day.slice(0, 2))}<strong>${esc(day.date.slice(0, 2))}</strong></button>`).join('');
  $('#grid').innerHTML = days.map((day, index) => {
    const i = start + index, done = !!state.done[day.date];
    return `<article class="day ${done ? 'done' : ''} ${index === selected ? 'mobile-active' : ''}"><div class="date">${esc(day.date)}</div><h3>${esc(day.day)}</h3>${day.blank ? '<div class="muted">Bez naplánovaného tréninku</div>' : `<div class="tag">Ráno</div><div class="block">${renderTraining(day.morning)}</div><div class="tag">Večer</div><div class="block">${renderTraining(day.evening)}</div><div class="actions"><button onclick="toggle(${i})">${done ? '↶ Undo' : '✓ Done'}</button><button onclick="edit(${i})">Upravit</button></div>`}</article>`;
  }).join('');
  $('#planUpdate').hidden = state.planVersion === PLAN_VERSION;
  renderOverview();
}
window.pick = index => { selected = index; render(); };
window.toggle = index => {
  const next = structuredClone(state), date = next.plan[index].date;
  next.done[date] = !next.done[date];
  if (commit(next)) render();
};
window.edit = index => {
  editIndex = index;
  const day = state.plan[index];
  $('#eDate').value = day.date;
  $('#eDay').value = day.day;
  $('#eMorning').value = day.morning;
  $('#eEvening').value = day.evening;
  $('#dlg').showModal();
};
$('#saveBtn').onclick = event => {
  event.preventDefault();
  const next = structuredClone(state);
  Object.assign(next.plan[editIndex], {morning: $('#eMorning').value, evening: $('#eEvening').value});
  if (commit(next)) { $('#dlg').close(); render(); }
};
$('#delBtn').onclick = event => {
  event.preventDefault();
  if (!confirm('Smazat trénink tohoto dne?')) return;
  const next = structuredClone(state), day = next.plan[editIndex];
  // Keep the calendar slot so subsequent weeks still run Monday through Sunday.
  Object.assign(day, {morning: '', evening: '', blank: true});
  delete next.done[day.date];
  if (commit(next)) { $('#dlg').close(); render(); }
};
$('#prevBtn').onclick = () => { week = Math.max(0, week - 1); selected = 0; render(); };
$('#nextBtn').onclick = () => { if ((week + 1) * 7 < state.plan.length) week++; selected = 0; render(); };
document.querySelectorAll('[data-tab]').forEach(button => button.onclick = () => {
  document.querySelectorAll('[data-tab]').forEach(other => other.classList.remove('active'));
  button.classList.add('active');
  ['calendar', 'exercises', 'overview', 'settings'].forEach(id => $('#' + id).hidden = id !== button.dataset.tab);
  renderOverview();
});
function renderOverview() {
  const active = state.plan.filter(day => !day.blank), done = active.filter(day => state.done[day.date]).length;
  $('#overview').innerHTML = `<div class="panel"><h2>Přehled</h2><div class="stat">${done} / ${active.length}</div><p class="muted">splněných dní (${active.length ? Math.round(done / active.length * 100) : 0} %)</p></div>`;
}
$('#exportBtn').onclick = () => {
  const link = document.createElement('a');
  const url = URL.createObjectURL(new Blob([JSON.stringify(state, null, 2)], {type: 'application/json'}));
  link.href = url;
  link.download = 'hybrid-forge-backup.json';
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
};
$('#importInput').onchange = async event => {
  const file = event.target.files[0];
  if (!file) return;
  try {
    const imported = JSON.parse(await file.text());
    if (!validState(imported)) throw new Error('Invalid backup');
    if (commit({...imported, done: imported.done || {}})) {
      week = 0; selected = 3; render(); alert('Importováno.');
    }
  } catch {
    alert('Neplatná záloha JSON. Původní data zůstala zachována.');
  } finally {
    event.target.value = '';
  }
};
$('#resetBtn').onclick = () => {
  if (confirm('Obnovit plán říjen–prosinec 2026 a vymazat označení Done i vlastní úpravy?') && commit(initialState())) {
    week = 0; selected = 3; render();
  }
};
function net() { $('#offline').hidden = navigator.onLine; }
addEventListener('online', net);
addEventListener('offline', net);
net();
if ('serviceWorker' in navigator) {
  addEventListener('load', () => navigator.serviceWorker.register('./service-worker.js')
    .catch(error => console.warn('Offline režim není dostupný:', error)));
}
render();

const PREVIOUS_PLAN_KEY = KEY + '.before-q4-hips';
function exportPreviousPlan() {
  try {
    const backup = localStorage.getItem(PREVIOUS_PLAN_KEY);
    if (!backup) return;
    const link = document.createElement('a');
    const url = URL.createObjectURL(new Blob([backup], {type: 'application/json'}));
    link.href = url;
    link.download = 'hybrid-forge-pred-aktualizaci.json';
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  } catch { alert('Záloha není dostupná.'); }
}
$('#previousPlanBtn').onclick = exportPreviousPlan;
try { $('#previousPlanBtn').hidden = !localStorage.getItem(PREVIOUS_PLAN_KEY); } catch {}
$('#applyPlanBtn').onclick = () => {
  if (!confirm('Nahradit tréninky plánem do 31. 12. 2026? Vlastní úpravy se uloží do zálohy, označení Done zůstane.')) return;
  try {
    // Never overwrite the first pre-update backup, including after a failed state write.
    if (!localStorage.getItem(PREVIOUS_PLAN_KEY)) {
      localStorage.setItem(PREVIOUS_PLAN_KEY, JSON.stringify(state));
    }
    $('#previousPlanBtn').hidden = false;
  } catch {
    alert('Zálohu se nepodařilo uložit. Plán zůstal beze změny.');
    return;
  }
  if (commit({...initialState(), done: {...state.done}})) {
    week = 0; selected = 3; render();
  }
};
