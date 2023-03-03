import { GridManager, GridSection } from "./GridManager";
import { ILaunchpad } from "../infrastructure/ILaunchpad";
import { Grid } from "./Grid";

export class TextManager {
  private gridManager: GridManager;

  constructor(launchpad: ILaunchpad) {
    this.gridManager = new GridManager(launchpad);
  }

  public SetNumberAtSection(number: number, section: GridSection, colour: number): void {
    const grid = this.gridManager.setGridColour(this.mapNumberToGrid(number), colour);

    switch (section) {
      case GridSection.TOP_LEFT_SECTION:
        this.gridManager.setTopLeftSection(grid);
        break;
      case GridSection.TOP_RIGHT_SECTION:
        this.gridManager.setTopRightSection(grid);
        break;
      case GridSection.BOTTOM_LEFT_SECTION:
        this.gridManager.setBottomLeftSection(grid);
        break;
      case GridSection.BOTTOM_RIGHT_SECTION:
        this.gridManager.setBottomRightSection(grid);
        break;
      case GridSection.MIDDLE_SECTION:
        this.gridManager.setMiddleSection(grid);
        break;
    }
  }

  private mapNumberToGrid(number: number): Grid {
    const grid = this.numberGrids[number];
    return grid;
  }

  numberGrids: { [key: number]: Grid } = {
    0: {
      data: [
        [1, 1, 1],
        [1, 0, 1],
        [1, 0, 1],
        [1, 1, 1],
      ],
    },
    1: {
      data: [
        [1, 1, 0],
        [0, 1, 0],
        [0, 1, 0],
        [1, 1, 1],
      ],
    },
    2: {
      data: [
        [1, 1, 1],
        [0, 0, 1],
        [0, 1, 0],
        [1, 1, 1],
      ],
    },
    3: {
      data: [
        [1, 1, 0],
        [0, 1, 1],
        [0, 0, 1],
        [1, 1, 1],
      ],
    },
    4: {
      data: [
        [1, 0, 0],
        [1, 0, 0],
        [1, 1, 1],
        [0, 1, 0],
      ],
    },
    5: {
      data: [
        [1, 1, 1],
        [1, 0, 0],
        [0, 1, 0],
        [1, 1, 1],
      ],
    },
    6: {
      data: [
        [0, 1, 1],
        [1, 0, 0],
        [1, 1, 1],
        [1, 1, 1],
      ],
    },
    7: {
      data: [
        [1, 1, 1],
        [0, 0, 1],
        [0, 1, 0],
        [0, 1, 0],
      ],
    },
    8: {
      data: [
        [1, 1, 0],
        [1, 1, 0],
        [0, 1, 1],
        [0, 1, 1],
      ],
    },
    9: {
      data: [
        [1, 1, 1],
        [1, 1, 1],
        [0, 0, 1],
        [0, 0, 1],
      ],
    },
  };
}
