const tileTypes = require('./tileTypes');
const Tile = require('./Tile');


const tiles = []

for (let i = 0; i < 45; i++) {
  tiles.push(new Tile())
}

for (let i = 0; i < 2; i++) {
  tiles.push(new Tile(
    tileTypes.WRECK,
    tileTypes.OPEN_OCEAN,
    tileTypes.OPEN_OCEAN,
    tileTypes.OPEN_OCEAN,
    tileTypes.OPEN_OCEAN,
    tileTypes.OPEN_OCEAN,
    tileTypes.OPEN_OCEAN,
  ))
}

for (let i = 0; i < 1; i++) {
  tiles.push(new Tile(
    tileTypes.OPEN_OCEAN,
    tileTypes.OPEN_OCEAN,
    tileTypes.OPEN_OCEAN,
    tileTypes.KELP,
    tileTypes.KELP,
    tileTypes.OPEN_OCEAN,
    tileTypes.OPEN_OCEAN,
  ))
}

for (let i = 0; i < 1; i++) {
  tiles.push(new Tile(
    tileTypes.OPEN_OCEAN,
    tileTypes.OPEN_OCEAN,
    tileTypes.OPEN_OCEAN,
    tileTypes.OPEN_OCEAN,
    tileTypes.OPEN_OCEAN,
    tileTypes.KELP,
    tileTypes.OPEN_OCEAN,
  ))
}

for (let i = 0; i < 1; i++) {
  tiles.push(new Tile(
    tileTypes.HELL,
    tileTypes.OPEN_OCEAN,
    tileTypes.OPEN_OCEAN,
    tileTypes.HELL,
    tileTypes.HELL,
    tileTypes.OPEN_OCEAN,
    tileTypes.OPEN_OCEAN,
  ))
}

for (let i = 0; i < 295; i++) {
  const blankTile = new Tile(
    tileTypes.BLANK,
    tileTypes.BLANK,
    tileTypes.BLANK,
    tileTypes.BLANK,
    tileTypes.BLANK,
    tileTypes.BLANK,
    tileTypes.BLANK,
  )

  tiles.push(blankTile);
}


module.exports = tiles;