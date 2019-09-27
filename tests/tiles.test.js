const Tile = require('../Tile')
const tiles = require('../tiles');
const tileTypes = require('../tileTypes');

describe('Tile', () => {
  it('contains a `type` property', () => {
    const tile = new Tile();
    expect(Object.prototype.hasOwnProperty.call(tile, 'type')).toBeTruthy();
  });

  it('type is set to open ocean by default', () => {
    const tile = new Tile();
    expect(tile.type).toBe(tileTypes.OPEN_OCEAN)
  })

  it('contains a `north` property', () => {
    const tile = new Tile();
    expect(Object.prototype.hasOwnProperty.call(tile, 'north')).toBeTruthy();
  });

  it('north is set to open ocean by default', () => {
    const tile = new Tile();
    expect(tile.north).toBe(tileTypes.OPEN_OCEAN)
  })
  
  it('contains a `northeast` property', () => {
    const tile = new Tile();
    expect(Object.prototype.hasOwnProperty.call(tile, 'northeast')).toBeTruthy();
  });

  it('northeast is set to open ocean by default', () => {
    const tile = new Tile();
    expect(tile.northeast).toBe(tileTypes.OPEN_OCEAN)
  })

  it('contains a `southeast` property', () => {
    const tile = new Tile();
    expect(Object.prototype.hasOwnProperty.call(tile, 'southeast')).toBeTruthy();
  });

  it('southeast is set to open ocean by default', () => {
    const tile = new Tile();
    expect(tile.southeast).toBe(tileTypes.OPEN_OCEAN)
  })

  it('contains a `south` property', () => {
    const tile = new Tile();
    expect(Object.prototype.hasOwnProperty.call(tile, 'south')).toBeTruthy();
  });

  it('south is set to open ocean by default', () => {
    const tile = new Tile();
    expect(tile.south).toBe(tileTypes.OPEN_OCEAN)
  })

  it('contains a `southwest` property', () => {
    const tile = new Tile();
    expect(Object.prototype.hasOwnProperty.call(tile, 'southwest')).toBeTruthy();
  });

  it('southwest is set to open ocean by default', () => {
    const tile = new Tile();
    expect(tile.southwest).toBe(tileTypes.OPEN_OCEAN)
  })

  it('contains a `northwest` property', () => {
    const tile = new Tile();
    expect(Object.prototype.hasOwnProperty.call(tile, 'northwest')).toBeTruthy();
  });

  it('northwest is set to open ocean by default', () => {
    const tile = new Tile();
    expect(tile.northwest).toBe(tileTypes.OPEN_OCEAN)
  })
})


describe('tiles', () => {
  it('is an array', () => {
    expect(Array.isArray(tiles)).toBeTruthy();
  });

  it('contains only Tiles', () => {
    expect(tiles.every(
      (tile) => tile instanceof Tile
    )).toBeTruthy();
  });
})