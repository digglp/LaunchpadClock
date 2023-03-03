"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Grid = void 0;
class Grid {
    constructor(launchpad) {
        this.launchpad = launchpad;
    }
    setCell(row, col, colour) {
        const cell = this.mapToLaunchpad(row, col);
        this.launchpad.write([144, cell, colour]);
    }
    mapToLaunchpad(row, col) {
        return row * 16 + col;
    }
}
exports.Grid = Grid;
//# sourceMappingURL=Grid.js.map