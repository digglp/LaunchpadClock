import { GridManager } from "../../src/domain/GridManager";
import { ILaunchpad } from "../../src/infrastructure/ILaunchpad";
import { Grid } from "../../src/domain/Grid";

describe("GridManager", () => {
  let mockLaunchpad: ILaunchpad;

  const grid0 = {
    data: [
      [1, 1, 1],
      [1, 0, 1],
      [1, 0, 1],
      [1, 1, 1],
    ],
  } as Grid;

  const gridMiddleTest = {
    data: [
      [1, 1],
      [0, 0],
      [0, 0],
      [1, 1],
      [1, 1],
      [0, 0],
      [0, 0],
      [1, 1],
    ],
  } as Grid;

  beforeEach(() => {
    mockLaunchpad = {
      getPorts: jest.fn().mockReturnValue(["port1", "port2"]),
      setMidiStream: jest.fn(),
      write: jest.fn(),
      clear: jest.fn(),
    } as unknown as ILaunchpad;
  });

  it("should set the top left quarter of the grid", () => {
    const gridManager = new GridManager(mockLaunchpad);
    const grid = new Grid(grid0.data);

    gridManager.setTopLeftSection(grid);

    expect(mockLaunchpad.write).toHaveBeenCalledTimes(12);
    expect(mockLaunchpad.write).toHaveBeenCalledWith([144, 0, 1]);
    expect(mockLaunchpad.write).toHaveBeenCalledWith([144, 1, 1]);
    expect(mockLaunchpad.write).toHaveBeenCalledWith([144, 2, 1]);

    expect(mockLaunchpad.write).toHaveBeenCalledWith([144, 16, 1]);
    expect(mockLaunchpad.write).toHaveBeenCalledWith([144, 17, 0]);
    expect(mockLaunchpad.write).toHaveBeenCalledWith([144, 18, 1]);

    expect(mockLaunchpad.write).toHaveBeenCalledWith([144, 32, 1]);
    expect(mockLaunchpad.write).toHaveBeenCalledWith([144, 33, 0]);
    expect(mockLaunchpad.write).toHaveBeenCalledWith([144, 34, 1]);

    expect(mockLaunchpad.write).toHaveBeenCalledWith([144, 48, 1]);
    expect(mockLaunchpad.write).toHaveBeenCalledWith([144, 49, 1]);
    expect(mockLaunchpad.write).toHaveBeenCalledWith([144, 50, 1]);
  });

  it("should set the top right quarter of the grid", () => {
    const gridManager = new GridManager(mockLaunchpad);
    const grid = new Grid(grid0.data);

    gridManager.setTopRightSection(grid);

    expect(mockLaunchpad.write).toHaveBeenCalledTimes(12);
    expect(mockLaunchpad.write).toHaveBeenCalledWith([144, 5, 1]);
    expect(mockLaunchpad.write).toHaveBeenCalledWith([144, 6, 1]);
    expect(mockLaunchpad.write).toHaveBeenCalledWith([144, 7, 1]);

    expect(mockLaunchpad.write).toHaveBeenCalledWith([144, 21, 1]);
    expect(mockLaunchpad.write).toHaveBeenCalledWith([144, 22, 0]);
    expect(mockLaunchpad.write).toHaveBeenCalledWith([144, 23, 1]);

    expect(mockLaunchpad.write).toHaveBeenCalledWith([144, 37, 1]);
    expect(mockLaunchpad.write).toHaveBeenCalledWith([144, 38, 0]);
    expect(mockLaunchpad.write).toHaveBeenCalledWith([144, 39, 1]);

    expect(mockLaunchpad.write).toHaveBeenCalledWith([144, 53, 1]);
    expect(mockLaunchpad.write).toHaveBeenCalledWith([144, 54, 1]);
    expect(mockLaunchpad.write).toHaveBeenCalledWith([144, 55, 1]);
  });

  it("should set the bottom left quarter of the grid", () => {
    const gridManager = new GridManager(mockLaunchpad);
    const grid = new Grid(grid0.data);

    gridManager.setBottomLeftSection(grid);

    expect(mockLaunchpad.write).toHaveBeenCalledTimes(12);
    expect(mockLaunchpad.write).toHaveBeenCalledWith([144, 64, 1]);
    expect(mockLaunchpad.write).toHaveBeenCalledWith([144, 65, 1]);
    expect(mockLaunchpad.write).toHaveBeenCalledWith([144, 66, 1]);

    expect(mockLaunchpad.write).toHaveBeenCalledWith([144, 80, 1]);
    expect(mockLaunchpad.write).toHaveBeenCalledWith([144, 81, 0]);
    expect(mockLaunchpad.write).toHaveBeenCalledWith([144, 82, 1]);

    expect(mockLaunchpad.write).toHaveBeenCalledWith([144, 96, 1]);
    expect(mockLaunchpad.write).toHaveBeenCalledWith([144, 97, 0]);
    expect(mockLaunchpad.write).toHaveBeenCalledWith([144, 98, 1]);

    expect(mockLaunchpad.write).toHaveBeenCalledWith([144, 112, 1]);
    expect(mockLaunchpad.write).toHaveBeenCalledWith([144, 113, 1]);
    expect(mockLaunchpad.write).toHaveBeenCalledWith([144, 114, 1]);
  });

  it("should set the bottom right quarter of the grid", () => {
    const gridManager = new GridManager(mockLaunchpad);
    const grid = new Grid(grid0.data);

    gridManager.setBottomRightSection(grid);

    expect(mockLaunchpad.write).toHaveBeenCalledTimes(12);

    expect(mockLaunchpad.write).toHaveBeenCalledWith([144, 69, 1]);
    expect(mockLaunchpad.write).toHaveBeenCalledWith([144, 70, 1]);
    expect(mockLaunchpad.write).toHaveBeenCalledWith([144, 71, 1]);

    expect(mockLaunchpad.write).toHaveBeenCalledWith([144, 85, 1]);
    expect(mockLaunchpad.write).toHaveBeenCalledWith([144, 86, 0]);
    expect(mockLaunchpad.write).toHaveBeenCalledWith([144, 87, 1]);

    expect(mockLaunchpad.write).toHaveBeenCalledWith([144, 101, 1]);
    expect(mockLaunchpad.write).toHaveBeenCalledWith([144, 102, 0]);
    expect(mockLaunchpad.write).toHaveBeenCalledWith([144, 103, 1]);

    expect(mockLaunchpad.write).toHaveBeenCalledWith([144, 117, 1]);
    expect(mockLaunchpad.write).toHaveBeenCalledWith([144, 118, 1]);
    expect(mockLaunchpad.write).toHaveBeenCalledWith([144, 119, 1]);
  });

  it("should set the middle section of the grid", () => {
    const gridManager = new GridManager(mockLaunchpad);
    const grid = new Grid(gridMiddleTest.data);

    gridManager.setMiddleSection(grid);

    expect(mockLaunchpad.write).toHaveBeenCalledTimes(16);

    expect(mockLaunchpad.write).toHaveBeenCalledWith([144, 3, 1]);
    expect(mockLaunchpad.write).toHaveBeenCalledWith([144, 4, 1]);

    expect(mockLaunchpad.write).toHaveBeenCalledWith([144, 19, 0]);
    expect(mockLaunchpad.write).toHaveBeenCalledWith([144, 20, 0]);

    expect(mockLaunchpad.write).toHaveBeenCalledWith([144, 35, 0]);
    expect(mockLaunchpad.write).toHaveBeenCalledWith([144, 36, 0]);

    expect(mockLaunchpad.write).toHaveBeenCalledWith([144, 51, 1]);
    expect(mockLaunchpad.write).toHaveBeenCalledWith([144, 52, 1]);

    expect(mockLaunchpad.write).toHaveBeenCalledWith([144, 67, 1]);
    expect(mockLaunchpad.write).toHaveBeenCalledWith([144, 68, 1]);

    expect(mockLaunchpad.write).toHaveBeenCalledWith([144, 83, 0]);
    expect(mockLaunchpad.write).toHaveBeenCalledWith([144, 84, 0]);

    expect(mockLaunchpad.write).toHaveBeenCalledWith([144, 99, 0]);
    expect(mockLaunchpad.write).toHaveBeenCalledWith([144, 100, 0]);

    expect(mockLaunchpad.write).toHaveBeenCalledWith([144, 115, 1]);
    expect(mockLaunchpad.write).toHaveBeenCalledWith([144, 116, 1]);
  });

  it("should set the grid colour", () => {
    const gridManager = new GridManager(mockLaunchpad);
    const grid = new Grid(grid0.data);

    const gridWithColour = gridManager.setGridColour(grid, 50);
    gridManager.setTopLeftSection(gridWithColour);

    expect(mockLaunchpad.write).toHaveBeenCalledWith([144, 0, 50]);
    expect(mockLaunchpad.write).toHaveBeenCalledWith([144, 1, 50]);
    expect(mockLaunchpad.write).toHaveBeenCalledWith([144, 2, 50]);

    expect(mockLaunchpad.write).toHaveBeenCalledWith([144, 16, 50]);
    expect(mockLaunchpad.write).toHaveBeenCalledWith([144, 17, 0]);
    expect(mockLaunchpad.write).toHaveBeenCalledWith([144, 18, 50]);

    expect(mockLaunchpad.write).toHaveBeenCalledWith([144, 32, 50]);
    expect(mockLaunchpad.write).toHaveBeenCalledWith([144, 33, 0]);
    expect(mockLaunchpad.write).toHaveBeenCalledWith([144, 34, 50]);

    expect(mockLaunchpad.write).toHaveBeenCalledWith([144, 48, 50]);
    expect(mockLaunchpad.write).toHaveBeenCalledWith([144, 49, 50]);
    expect(mockLaunchpad.write).toHaveBeenCalledWith([144, 50, 50]);
  });
});
