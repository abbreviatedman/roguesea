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

  it('has an isAndHasNeighborsThatAre method', () => {
    const tile = new Tile();
    expect(typeof tile.isAndHasNeighborsThatAre).toBe('function')
  })

  it(`returns true if each property's value matches the given string`, () => {
    const tile = new Tile();
    expect(tile.isAndHasNeighborsThatAre(tileTypes.OPEN_OCEAN)).toBeTruthy();
    
    const fogTile = new Tile(
      tileTypes.FOG,
      tileTypes.FOG,
      tileTypes.FOG,
      tileTypes.FOG,
      tileTypes.FOG,
      tileTypes.FOG,
      tileTypes.FOG,
      );
      
    expect(fogTile.isAndHasNeighborsThatAre(tileTypes.FOG)).toBeTruthy();
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

  it('contains 45 ocean tiles with only ocean boundaries', () => {
    expect(tiles.filter((tile) => {
        return tile.isAndHasNeighborsThatAre(tileTypes.OPEN_OCEAN);
      }).length
    ).toBe(45);
  })

  it('contains 2 wreck tiles', () => {
    expect(tiles.filter((tile) => {
        return tile.type === tileTypes.WRECK
        && tile.north === tileTypes.OPEN_OCEAN
        && tile.northeast === tileTypes.OPEN_OCEAN
        && tile.southeast === tileTypes.OPEN_OCEAN
        && tile.south === tileTypes.OPEN_OCEAN
        && tile.southwest === tileTypes.OPEN_OCEAN
        && tile.northwest === tileTypes.OPEN_OCEAN
      }).length
    ).toBe(2);
  })
  
  it('contains 1 ocean tile with kelp to the south and southeast', () => {
    expect(tiles.filter((tile) => {
        return tile.type === tileTypes.OPEN_OCEAN
        && tile.north === tileTypes.OPEN_OCEAN
        && tile.northeast === tileTypes.OPEN_OCEAN
        && tile.southeast === tileTypes.KELP
        && tile.south === tileTypes.KELP
        && tile.southwest === tileTypes.OPEN_OCEAN
        && tile.northwest === tileTypes.OPEN_OCEAN
      }).length
    ).toBe(1);
  })

  it('contains 1 ocean tile with kelp to the southwest', () => {
    expect(tiles.filter((tile) => {
        return tile.type === tileTypes.OPEN_OCEAN
        && tile.north === tileTypes.OPEN_OCEAN
        && tile.northeast === tileTypes.OPEN_OCEAN
        && tile.southeast === tileTypes.OPEN_OCEAN
        && tile.south === tileTypes.OPEN_OCEAN
        && tile.southwest === tileTypes.KELP
        && tile.northwest === tileTypes.OPEN_OCEAN
      }).length
    ).toBe(1);
  })

  it('contains 1 hell tile with hell to the south and southeast', () => {
    expect(tiles.filter((tile) => {
        return tile.type === tileTypes.HELL
        && tile.north === tileTypes.OPEN_OCEAN
        && tile.northeast === tileTypes.OPEN_OCEAN
        && tile.southeast === tileTypes.HELL
        && tile.south === tileTypes.HELL
        && tile.southwest === tileTypes.OPEN_OCEAN
        && tile.northwest === tileTypes.OPEN_OCEAN
      }).length
    ).toBe(1);
  })

  it('contains 295 blank tiles', () => {
    expect(tiles.filter(
        (tile) => tile.type === tileTypes.BLANK
      ).length
    ).toBe(295);
  })

  it('contains 345 items', () => {
    expect(tiles.length).toBe(345)
  })
})