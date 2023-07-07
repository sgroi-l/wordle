


const firstRow = document.querySelector('#row1');


document.addEventListener('keyup', (event) => {

    const key = event.key;
    
    if (/^[a-zA-Z]$/.test(key)) {
        // Get the index of the tile to fill
        const tileIndex = Array.from(firstRow.children).findIndex((tile) => {
            return tile.textContent === '';
        });
    
        // If there is an empty tile, fill it with the pressed key
        if (tileIndex >= 0) {
            const tile = firstRow.children[tileIndex];
            tile.textContent = key;
            tile.style.borderColor = '#565758';
            tile.classList.add('pop');
            setTimeout(() => {
                tile.classList.remove('pop');
              }, 5);
        }
    } else if (key === 'Backspace') {
        // Get the index of the last filled tile
        const filledTiles = Array.from(firstRow.children).filter((tile) => {
          return tile.textContent !== '';
        });
        const lastFilledTile = filledTiles[filledTiles.length - 1];
    
        // If there is a filled tile, delete its content and reset the border color
        if (lastFilledTile) {
          lastFilledTile.textContent = '';
          lastFilledTile.style.borderColor = '#3a3a3c';
        }

    }
  });