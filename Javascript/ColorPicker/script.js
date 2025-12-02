 const button = document.getElementById("changecolor");

button.addEventListener('click', () => {
  // Random color generate karna             
  const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
});