const tileTypes = require('./tileTypes');
const Tile = require('./Tile');


const tiles = []

for (let i = 0; i < 50; i++) {
  tiles.push(new Tile())
}

for (let i = 0; i < 10; i++) {
  const oceanWithFogNeighbors = new Tile(
    tileTypes.OPEN_OCEAN,
    tileTypes.OPEN_OCEAN,
    tileTypes.OPEN_OCEAN,
    tileTypes.FOG,
    tileTypes.FOG,
    tileTypes.OPEN_OCEAN,
    tileTypes.OPEN_OCEAN,
  )

  tiles.push(oceanWithFogNeighbors);
}

for (let i = 0; i < 10; i++) {
  const fogTile = new Tile(
    tileTypes.FOG,
    tileTypes.OPEN_OCEAN,
    tileTypes.OPEN_OCEAN,
    tileTypes.FOG,
    tileTypes.FOG,
    tileTypes.OPEN_OCEAN,
    tileTypes.OPEN_OCEAN,
  )

  tiles.push(fogTile);
}


module.exports = tiles;