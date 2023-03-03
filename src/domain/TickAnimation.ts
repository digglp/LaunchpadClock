import { ILaunchpad } from "../infrastructure/ILaunchpad";
import { Grid } from "./Grid";
import { GridManager } from "./GridManager";

export class TickAnimation {
  private gridManager: GridManager;
  private currentTick = 0;

  constructor(launchpad: ILaunchpad) {
    this.gridManager = new GridManager(launchpad);
  }

  public animateTick() {
    //get a random number between 10 and 50
    const randomColour = Math.floor(Math.random() * 40) + 10;

    const grid = this.gridManager.setGridColour(this.mapNumberToGrid(this.currentTick), randomColour);

    this.gridManager.setMiddleSection(grid);
    this.currentTick++;
    if (this.currentTick > 7) {
      this.currentTick = 0;
    }
  }

  private mapNumberToGrid(number: number): Grid {
    const grid = this.tickGrids[number];
    return grid;
  }

  tickGrids: { [key: number]: Grid } = {
    0: {
      data: [
        [1, 1],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
      ],
    },
    1: {
      data: [
        [0, 0],
        [1, 1],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
      ],
    },
    2: {
      data: [
        [0, 0],
        [0, 0],
        [1, 1],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
      ],
    },
    3: {
      data: [
        [0, 0],
        [0, 0],
        [0, 0],
        [1, 1],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
      ],
    },
    4: {
      data: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [1, 1],
        [0, 0],
        [0, 0],
        [0, 0],
      ],
    },
    5: {
      data: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [1, 1],
        [0, 0],
        [0, 0],
      ],
    },
    6: {
      data: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [1, 1],
        [0, 0],
      ],
    },
    7: {
      data: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [1, 1],
      ],
    },
  };
}
