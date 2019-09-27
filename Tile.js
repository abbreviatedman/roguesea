const tileTypes = require('./tileTypes')

class Tile {
  constructor(
    type = tileTypes.OPEN_OCEAN,
    north = tileTypes.OPEN_OCEAN,
    northeast = tileTypes.OPEN_OCEAN,
    southeast = tileTypes.OPEN_OCEAN,
    south = tileTypes.OPEN_OCEAN,
    southwest = tileTypes.OPEN_OCEAN,
    northwest = tileTypes.OPEN_OCEAN,
  ) {
    this.type = type;
    this.north = north;
    this.northeast = northeast;
    this.southeast = southeast;
    this.south = south;
    this.southwest = southwest;
    this.northwest = northwest;
  }

  isAndHasNeighborsThatAre(tileType) {
    return Object.values(this).every((value) => {
      return value === tileType;
    })
  }
}

module.exports = Tile;