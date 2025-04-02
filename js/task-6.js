document.addEventListener('DOMContentLoaded', function() {
  const createButton = document.querySelector('[data-create]');
  const destroyButton = document.querySelector('[data-destroy]');
  const inputNumber = document.querySelector('input[type="number"]');
  const boxesDiv = document.getElementById('boxes');

  createButton.addEventListener('click', function() {
    const amount = parseInt(inputNumber.value);
    if (amount >= 1 && amount <= 100) {
      createBoxes(amount);
      inputNumber.value = ''; 
    }
  });

  destroyButton.addEventListener('click', function() {
    destroyBoxes();
  });

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
  }

  function createBoxes(amount) {
    boxesDiv.innerHTML = ''; 

    let size = 30; 
    for (let i = 0; i < amount; i++) {
      const box = document.createElement('div');
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.style.backgroundColor = getRandomHexColor();
      boxesDiv.appendChild(box);
      size += 10; 
    }
  }

  function destroyBoxes() {
    boxesDiv.innerHTML = '';
  }
});
