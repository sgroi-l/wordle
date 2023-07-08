import { handleKeyPress } from "./utils/keyboard.js";

document.addEventListener('keyup', handleKeyPress);


const mobileInput = document.querySelector('#mobileInput');
mobileInput.addEventListener('input', handleMobileInput);

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

