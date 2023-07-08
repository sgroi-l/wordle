const firstRow = document.querySelector('#row1');

const answer = ['l', 'i', 'm', 'i', 'o'];

export function evaluateAnswer() {
  const filledTiles = Array.from(firstRow.children).map((tile) => tile.textContent.trim());

  if (filledTiles.length === 5) {
    let correctPositionTiles = [];
    let correctLetterTiles = [];

    for (let i = 0; i < filledTiles.length; i++) {
      if (filledTiles[i].toUpperCase() === answer[i].toUpperCase()) {
        correctPositionTiles.push(i);
      } else if (answer.includes(filledTiles[i])) {
        correctLetterTiles.push(i);
      }
    }

    const firstRowTilesElements = document.querySelector('#row1').querySelectorAll('.tile');

    const delayIncrement = 200;
    let currentDelay = 0;

    firstRowTilesElements.forEach((tile, index) => {
      tile.style.backgroundColor = '';
      setTimeout(() => {
        if (correctPositionTiles.includes(index)) {
          tile.style.backgroundColor = '#538d4e';
        } else if (correctLetterTiles.includes(index)) {
          tile.style.backgroundColor = '#b59f3b';
        } else {
          tile.style.backgroundColor = '#3a3a3c';
      
        }
      }, currentDelay);
      currentDelay += delayIncrement;
    });
  }
}

export function fillTile(key) {
  const tileIndex = Array.from(firstRow.children).findIndex((tile) => {
    return tile.textContent === '';
  });

  if (tileIndex >= 0) {
    const tile = firstRow.children[tileIndex];
    tile.textContent = key;
    tile.style.borderColor = '#565758';
    tile.classList.add('pop');
    setTimeout(() => {
      tile.classList.remove('pop');
    }, 5);
  }
}

export function deleteLastTile() {
  const filledTiles = Array.from(firstRow.children).filter((tile) => {
    return tile.textContent !== '';
  });
  const lastFilledTile = filledTiles[filledTiles.length - 1];

  if (lastFilledTile) {
    lastFilledTile.textContent = '';
    lastFilledTile.style.borderColor = '#3a3a3c';
    lastFilledTile.style.backgroundColor = '';
  }
}
