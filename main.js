import { handleKeyPress } from "./utils/keyboard.js";

document.addEventListener('keyup', handleKeyPress);


document.addEventListener('DOMContentLoaded', () => {
    const mobileInput = document.querySelector('#mobileInput');
    mobileInput.addEventListener('input', handleMobileInput);
    mobileInput.focus();
  });

function handleMobileInput(event) {
  const key = event.target.value.slice(-1);

  if (/^[a-zA-Z]$/.test(key)) {
    fillTile(key);
  } else if (key === 'Backspace') {
    deleteLastTile();
  } else if (key === 'Enter' && filledTileCount === 5) {
    evaluateAnswer();
  }


  event.target.value = '';
}

