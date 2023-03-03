import { Grid, NumberGrids } from "../infrastructure/NumberGrids";
import { LaunchpadMiniOld } from "./LanchpadMiniOld";
import _ from "lodash";

export class NumberBuilder {
  launchpad = new LaunchpadMiniOld();
  public topNumberString = "00";
  public bottomNumberString = "00";

  private tickPositionCol = 3;
  private tickPositionRow = 1;

  public async setTopSection(topNumberString: string, bottomNumberString: string) {
    this.topNumberString = topNumberString;
    this.bottomNumberString = bottomNumberString;

    const topNumber1 = topNumberString[0];
    const topNumber2 = topNumberString[1];
    const bottomNumber1 = bottomNumberString[0];
    const bottomNumber2 = bottomNumberString[1];

    const topGrid1 = _.cloneDeep(this.getGrid(topNumber1));
    const topGrid2 = _.cloneDeep(this.getGrid(topNumber2));
    const bottomGrid1 = _.cloneDeep(this.getGrid(bottomNumber1));
    const bottomGrid2 = _.cloneDeep(this.getGrid(bottomNumber2));

    this.setGridColour(topGrid1, LaunchpadMiniOld.YELLOW_COLOUR);
    this.setGridColour(topGrid2, LaunchpadMiniOld.YELLOW_COLOUR);

    const spaceGrid = this.getGrid(" ");

    // this.setGridColour(bottomGrid1, LaunchpadMini.GREEN_COLOUR);
    // this.setGridColour(bottomGrid2, LaunchpadMini.GREEN_COLOUR);

    let combinedTopGrid = this.appendColumns(topGrid1, spaceGrid);
    combinedTopGrid = this.appendColumns(combinedTopGrid, topGrid2);

    let combinedBottomGrid = this.appendColumns(bottomGrid1, spaceGrid);
    combinedBottomGrid = this.appendColumns(combinedBottomGrid, bottomGrid2);

    const combinedGrid = this.appendRows(combinedTopGrid, combinedBottomGrid);

    await this.drawGrid(combinedGrid.data);
  }

  public async tick() {
    const randomColour = Math.floor(Math.random() * 127) + 1;

    this.launchpad.setCell(this.tickPositionRow, this.tickPositionCol, randomColour);
    this.launchpad.setCell(this.tickPositionRow, this.tickPositionCol + 1, randomColour);
    // this.wait(100);
    setTimeout(
      (row: number, col: number) => {
        this.launchpad.setCell(row, col, LaunchpadMiniOld.CLEAR_COLOUR);
        this.launchpad.setCell(row, col + 1, LaunchpadMiniOld.CLEAR_COLOUR);
      },
      200,
      this.tickPositionRow,
      this.tickPositionCol
    );

    if (this.tickPositionRow === 5) {
      this.tickPositionRow = 1;
    }
    this.tickPositionRow++;
  }

  appendColumns(gridA: Grid, gridB: Grid): Grid {
    const numRows = gridA.data.length;

    const newData: number[][] = [];

    for (let i = 0; i < numRows; i++) {
      newData[i] = gridA.data[i].concat(gridB.data[i]);
    }

    return { data: newData };
  }
  public appendRows(grid1: Grid, grid2: Grid): Grid {
    const newData: number[][] = [];

    for (let i = 0; i < grid1.data.length; i++) {
      newData.push(grid1.data[i]);
    }

    for (let i = 0; i < grid2.data.length; i++) {
      newData.push(grid2.data[i]);
    }
    return { data: newData };
  }

  private getGrid(digit: string): Grid {
    switch (digit) {
      case "0":
        return NumberGrids.grid0;
      case "1":
        return NumberGrids.grid1;
        break;
      case "2":
        return NumberGrids.grid2;
        break;
      case " ":
        return NumberGrids.gridSpace;

      case "3":
        return NumberGrids.grid3;
      case "4":
        return NumberGrids.grid4;
      case "5":
        return NumberGrids.grid5;
      case "6":
        return NumberGrids.grid6;
      case "7":
        return NumberGrids.grid7;
      case "8":
        return NumberGrids.grid8;
      case "9":
        return NumberGrids.grid9;
      default:
        return NumberGrids.gridEmpty;
    }
  }

  public setGridColour(grid: Grid, colour: number) {
    for (let row = 0; row < grid.data.length; row++) {
      for (let col = 0; col < grid.data[row].length; col++) {
        if (grid.data[row][col] === 1) {
          grid.data[row][col] = colour;
        }
      }
    }
  }
  private async drawGrid(grid: number[][]) {
    this.launchpad.clearScreen();
    await this.wait(1);

    for (let row = 0; row < grid.length; row++) {
      for (let col = 0; col < grid[row].length; col++) {
        if (grid[row][col] > 0) {
          this.launchpad.setCell(row, col, grid[row][col]);
        }
      }
    }
  }

  private wait(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
