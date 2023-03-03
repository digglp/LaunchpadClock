import { ILaunchpad } from "../infrastructure/ILaunchpad";
export declare class Grid {
    launchpad: ILaunchpad;
    constructor(launchpad: ILaunchpad);
    setCell(row: number, col: number, colour: number): void;
    mapToLaunchpad(row: number, col: number): number;
}
//# sourceMappingURL=Grid.d.ts.map