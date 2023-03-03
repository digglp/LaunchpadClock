"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberBuilder = void 0;
const NumberGrids_1 = require("../infrastructure/NumberGrids");
const LanchpadMiniOld_1 = require("./LanchpadMiniOld");
const lodash_1 = __importDefault(require("lodash"));
class NumberBuilder {
    constructor() {
        this.launchpad = new LanchpadMiniOld_1.LaunchpadMiniOld();
        this.topNumberString = "00";
        this.bottomNumberString = "00";
        this.tickPositionCol = 3;
        this.tickPositionRow = 1;
    }
    async setTopSection(topNumberString, bottomNumberString) {
        this.topNumberString = topNumberString;
        this.bottomNumberString = bottomNumberString;
        const topNumber1 = topNumberString[0];
        const topNumber2 = topNumberString[1];
        const bottomNumber1 = bottomNumberString[0];
        const bottomNumber2 = bottomNumberString[1];
        const topGrid1 = lodash_1.default.cloneDeep(this.getGrid(topNumber1));
        const topGrid2 = lodash_1.default.cloneDeep(this.getGrid(topNumber2));
        const bottomGrid1 = lodash_1.default.cloneDeep(this.getGrid(bottomNumber1));
        const bottomGrid2 = lodash_1.default.cloneDeep(this.getGrid(bottomNumber2));
        this.setGridColour(topGrid1, LanchpadMiniOld_1.LaunchpadMiniOld.YELLOW_COLOUR);
        this.setGridColour(topGrid2, LanchpadMiniOld_1.LaunchpadMiniOld.YELLOW_COLOUR);
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
    async tick() {
        const randomColour = Math.floor(Math.random() * 127) + 1;
        this.launchpad.setCell(this.tickPositionRow, this.tickPositionCol, randomColour);
        this.launchpad.setCell(this.tickPositionRow, this.tickPositionCol + 1, randomColour);
        // this.wait(100);
        setTimeout((row, col) => {
            this.launchpad.setCell(row, col, LanchpadMiniOld_1.LaunchpadMiniOld.CLEAR_COLOUR);
            this.launchpad.setCell(row, col + 1, LanchpadMiniOld_1.LaunchpadMiniOld.CLEAR_COLOUR);
        }, 200, this.tickPositionRow, this.tickPositionCol);
        if (this.tickPositionRow === 5) {
            this.tickPositionRow = 1;
        }
        this.tickPositionRow++;
    }
    appendColumns(gridA, gridB) {
        const numRows = gridA.data.length;
        const newData = [];
        for (let i = 0; i < numRows; i++) {
            newData[i] = gridA.data[i].concat(gridB.data[i]);
        }
        return { data: newData };
    }
    appendRows(grid1, grid2) {
        const newData = [];
        for (let i = 0; i < grid1.data.length; i++) {
            newData.push(grid1.data[i]);
        }
        for (let i = 0; i < grid2.data.length; i++) {
            newData.push(grid2.data[i]);
        }
        return { data: newData };
    }
    getGrid(digit) {
        switch (digit) {
            case "0":
                return NumberGrids_1.NumberGrids.grid0;
            case "1":
                return NumberGrids_1.NumberGrids.grid1;
                break;
            case "2":
                return NumberGrids_1.NumberGrids.grid2;
                break;
            case " ":
                return NumberGrids_1.NumberGrids.gridSpace;
            case "3":
                return NumberGrids_1.NumberGrids.grid3;
            case "4":
                return NumberGrids_1.NumberGrids.grid4;
            case "5":
                return NumberGrids_1.NumberGrids.grid5;
            case "6":
                return NumberGrids_1.NumberGrids.grid6;
            case "7":
                return NumberGrids_1.NumberGrids.grid7;
            case "8":
                return NumberGrids_1.NumberGrids.grid8;
            case "9":
                return NumberGrids_1.NumberGrids.grid9;
            default:
                return NumberGrids_1.NumberGrids.gridEmpty;
        }
    }
    setGridColour(grid, colour) {
        for (let row = 0; row < grid.data.length; row++) {
            for (let col = 0; col < grid.data[row].length; col++) {
                if (grid.data[row][col] === 1) {
                    grid.data[row][col] = colour;
                }
            }
        }
    }
    async drawGrid(grid) {
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
    wait(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }
}
exports.NumberBuilder = NumberBuilder;
//# sourceMappingURL=NumberBuilder.js.map