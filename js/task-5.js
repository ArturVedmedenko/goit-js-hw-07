function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
document.querySelector('.change-color').addEventListener('click', () => {
  const hexColor = getRandomHexColor();
  document.body.style.backgroundColor = hexColor;
  document.querySelector('.color').textContent = hexColor;
});
