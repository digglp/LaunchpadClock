import { Grid } from "./Grid";
import { ILaunchpad } from "../infrastructure/ILaunchpad";
import _ from "lodash";

export enum GridSection {
  TOP_LEFT_SECTION = 0,
  TOP_RIGHT_SECTION = 1,
  BOTTOM_LEFT_SECTION = 2,
  BOTTOM_RIGHT_SECTION = 3,
  MIDDLE_SECTION = 4,
}
export class GridManager {
  launchpad: ILaunchpad;

  public static MIDDLE_SECTION = 4;

  constructor(launchpad: ILaunchpad) {
    this.launchpad = launchpad;
  }

  public setTopLeftSection(grid: Grid) {
    for (let row = 0; row < 4; row++) {
      for (let col = 0; col < 3; col++) {
        this.setCell(row, col, grid.data[row][col]);
      }
    }
  }
  public setTopRightSection(grid: Grid) {
    for (let row = 0; row < 4; row++) {
      for (let col = 5; col < 8; col++) {
        this.setCell(row, col, grid.data[row][col - 5]);
      }
    }
  }
  public setBottomLeftSection(grid: Grid) {
    for (let row = 4; row < 8; row++) {
      for (let col = 0; col < 3; col++) {
        this.setCell(row, col, grid.data[row - 4][col]);
      }
    }
  }

  public setBottomRightSection(grid: Grid) {
    for (let row = 4; row < 8; row++) {
      for (let col = 5; col < 8; col++) {
        this.setCell(row, col, grid.data[row - 4][col - 5]);
      }
    }
  }

  public setMiddleSection(grid: Grid) {
    for (let row = 0; row < 8; row++) {
      for (let col = 3; col < 5; col++) {
        this.setCell(row, col, grid.data[row][col - 3]);
      }
    }
  }

  public setGridColour(grid: Grid, colour: number): Grid {
    const newGrid = _.cloneDeep(grid);

    for (let row = 0; row < newGrid.data.length; row++) {
      for (let col = 0; col < newGrid.data[row].length; col++) {
        if (newGrid.data[row][col] === 1) {
          newGrid.data[row][col] = colour;
        }
      }
    }
    return newGrid;
  }

  public setCell(row: number, col: number, colour: number) {
    const cell = this.mapToLaunchpad(row, col);
    //console.log(cell, " Row: ", row, " Col: ", col, " Colour: ", colour);

    this.launchpad.write([144, cell, colour]);
  }

  private mapToLaunchpad(row: number, col: number) {
    return row * 16 + col;
  }
}
