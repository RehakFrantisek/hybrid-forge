// Exact aliases avoid linking e.g. Side plank to Plank or inventing exercises for free text.
const exerciseByName = new Map(EXERCISES.flatMap(exercise =>
  exercise.aliases.map(name => [name.toLocaleLowerCase('cs'), exercise])));
function exerciseForLine(line) {
  return exerciseByName.get(line.split(' – ')[0].trim().toLocaleLowerCase('cs'));
}
function renderTraining(text) {
  return text.split('\n').map(line => {
    const exercise = exerciseForLine(line);
    return exercise
      ? `<button class="exercise-link" data-exercise="${exercise.id}" aria-label="Detail cviku: ${esc(line)}">${esc(line)}</button>`
      : `<span class="training-line">${esc(line) || '&nbsp;'}</span>`;
  }).join('');
}
function renderExercises() {
  const normalize = text => text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase('cs');
  const query = normalize(document.querySelector('#exerciseSearch').value.trim());
  const filtered = EXERCISES.filter(exercise => normalize([exercise.name, exercise.category, exercise.focus, ...exercise.aliases].join(' ')).includes(query));
  document.querySelector('#exerciseCount').textContent = `${filtered.length} z ${EXERCISES.length} cviků`;
  document.querySelector('#exerciseGrid').innerHTML = filtered.length ? filtered.map(exercise => `
    <button class="exercise-card" data-exercise="${exercise.id}">
      <img src="${exercise.image}" alt="Schematická poloha: ${esc(exercise.name)}" width="320" height="224" loading="lazy">
      <span class="tag">${esc(exercise.category)}</span>
      <strong>${esc(exercise.name)}</strong><span class="muted">${esc(exercise.focus)}</span>
    </button>`).join('') : '<p class="muted">Žádný cvik nenalezen. Zkus jiný název nebo partii.</p>';
}
document.addEventListener('click', event => {
  const button = event.target.closest('[data-exercise]');
  if (!button) return;
  const exercise = EXERCISES.find(item => item.id === button.dataset.exercise);
  if (!exercise) return;
  document.querySelector('#exerciseDetail').innerHTML = `
    <p class="tag">${esc(exercise.category)}</p><h2 id="exerciseTitle">${esc(exercise.name)}</h2>
    <img src="${exercise.image}" alt="Orientační poloha cviku ${esc(exercise.name)}" width="320" height="224">
    <h3>Zaměření</h3><p>${esc(exercise.focus)}</p>
    <h3>Technika</h3><p>${esc(exercise.note)}</p>
    <p class="muted">Schematická ilustrace polohy, nikoli celá pohybová sekvence. Počty sérií a opakování se řídí konkrétním dnem v plánu.</p>`;
  document.querySelector('#exerciseDialog').showModal();
});
document.querySelector('#exerciseSearch').addEventListener('input', renderExercises);
// app.js defines the shared HTML escaping helper before DOMContentLoaded.
addEventListener('DOMContentLoaded', renderExercises);
