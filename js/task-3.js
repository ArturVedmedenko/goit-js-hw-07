const input = document.getElementById('name-input');
const output = document.getElementById('name-output');

input.addEventListener('input', () => {
  output.textContent = input.value.trim() || 'Anonymous';
});
