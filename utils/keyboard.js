import { fillTile, deleteLastTile, evaluateAnswer } from './tile.js';

let currentRow = 1;
let filledTileCount = 0;

export function handleKeyPress(event) {
  const key = event.key;

  if (/^[a-zA-Z]$/.test(key)) {
    fillTile(key);
    filledTileCount++;
  } else if (key === 'Backspace') {
    deleteLastTile();
    filledTileCount = Math.max(0, filledTileCount - 1);
  } else if (key === 'Enter' && filledTileCount >= 5) {
    evaluateAnswer();
    currentRow++; // Functionality to move to the next row. Not implemented in this version.
    filledTileCount = 0;
  }
}
