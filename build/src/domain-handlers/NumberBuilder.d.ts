import { Grid } from "../infrastructure/NumberGrids";
import { LaunchpadMiniOld } from "./LanchpadMiniOld";
export declare class NumberBuilder {
    launchpad: LaunchpadMiniOld;
    topNumberString: string;
    bottomNumberString: string;
    private tickPositionCol;
    private tickPositionRow;
    setTopSection(topNumberString: string, bottomNumberString: string): Promise<void>;
    tick(): Promise<void>;
    appendColumns(gridA: Grid, gridB: Grid): Grid;
    appendRows(grid1: Grid, grid2: Grid): Grid;
    private getGrid;
    setGridColour(grid: Grid, colour: number): void;
    private drawGrid;
    private wait;
}
//# sourceMappingURL=NumberBuilder.d.ts.map