const firstRow = document.querySelector('#row1');

const answer = ['l', 'i', 'm', 'i', 'o'];

export function evaluateAnswer() {
  const filledTiles = Array.from(firstRow.children).map((tile) => tile.textContent.trim());

    
    let correctPositionTiles = new Array(5);
    let correctLetterTiles = new Array(5);
    let remainingLetters = [...answer];

    filledTiles.map((filledTile, index) => {
      const positionOfCurrentTileInAnswerIfExists = remainingLetters.indexOf(filledTile);
      console.log(remainingLetters)
      if (positionOfCurrentTileInAnswerIfExists < 0) {
        return;
      }
      if (positionOfCurrentTileInAnswerIfExists === index) {
        correctPositionTiles[index] = filledTile;
        remainingLetters[positionOfCurrentTileInAnswerIfExists] = '';
      } else if (positionOfCurrentTileInAnswerIfExists > -1) {
        correctLetterTiles[index] = filledTile;
        remainingLetters[positionOfCurrentTileInAnswerIfExists] = '';       
      }
    })

    const firstRowTilesElements = document.querySelector('#row1').querySelectorAll('.tile');

    const delayIncrement = 200;
    let currentDelay = 0;

    firstRowTilesElements.forEach((tile, index) => {
      tile.style.backgroundColor = '';
      setTimeout(() => {
        if (correctLetterTiles[index]) {
          tile.style.backgroundColor = '#b59f3b';
        } else if (correctPositionTiles[index]) {
          tile.style.backgroundColor = '#538d4e';
        } else {
          tile.style.backgroundColor = '#3a3a3c';
      
        }
      }, currentDelay);
      currentDelay += delayIncrement;
    });
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
