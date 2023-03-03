"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NumberBuilder_1 = require("../../src/domain-handlers/NumberBuilder");
describe("NumberBuilder Test Suite", () => {
    it("should be able to combine columns", () => {
        const numberBuilder = new NumberBuilder_1.NumberBuilder();
        const grid0 = {
            data: [
                [1, 1, 1, 0],
                [1, 0, 1, 0],
                [1, 0, 1, 0],
                [1, 1, 1, 0],
            ],
        };
        const grid1 = {
            data: [
                [1, 1, 0, 0],
                [0, 1, 0, 0],
                [0, 1, 0, 0],
                [1, 1, 1, 0],
            ],
        };
        const combinedGrid = numberBuilder.appendColumns(grid0, grid1);
        expect(combinedGrid.data).toEqual([
            [1, 1, 1, 0, 1, 1, 0, 0],
            [1, 0, 1, 0, 0, 1, 0, 0],
            [1, 0, 1, 0, 0, 1, 0, 0],
            [1, 1, 1, 0, 1, 1, 1, 0],
        ]);
    });
    it("should be able to combine rows", () => {
        const numberBuilder = new NumberBuilder_1.NumberBuilder();
        const grid0 = {
            data: [
                [1, 1, 1, 0],
                [1, 0, 1, 0],
                [1, 0, 1, 0],
                [1, 1, 1, 0],
            ],
        };
        const grid1 = {
            data: [
                [1, 1, 0, 0],
                [0, 1, 0, 0],
                [0, 1, 0, 0],
                [1, 1, 1, 0],
            ],
        };
        const combinedGrid = numberBuilder.appendRows(grid0, grid1);
        expect(combinedGrid.data).toEqual([
            [1, 1, 1, 0],
            [1, 0, 1, 0],
            [1, 0, 1, 0],
            [1, 1, 1, 0],
            [1, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [1, 1, 1, 0],
        ]);
    });
    it("should set the colour of a grid", () => {
        const numberBuilder = new NumberBuilder_1.NumberBuilder();
        const grid = {
            data: [
                [1, 1, 1, 0],
                [1, 0, 1, 0],
                [1, 0, 1, 0],
                [1, 1, 1, 0],
            ],
        };
        numberBuilder.setGridColour(grid, 2);
        expect(grid.data).toEqual([
            [2, 2, 2, 0],
            [2, 0, 2, 0],
            [2, 0, 2, 0],
            [2, 2, 2, 0],
        ]);
    });
    it("should set grid colour of combined grid", () => {
        const numberBuilder = new NumberBuilder_1.NumberBuilder();
        const grid0 = {
            data: [
                [1, 1, 1, 0],
                [1, 0, 1, 0],
                [1, 0, 1, 0],
                [1, 1, 1, 0],
            ],
        };
        const grid1 = {
            data: [
                [1, 1, 0, 0],
                [0, 1, 0, 0],
                [0, 1, 0, 0],
                [1, 1, 1, 0],
            ],
        };
        const grid3 = {
            data: [
                [1, 1, 1, 0],
                [1, 0, 1, 0],
                [1, 0, 1, 0],
                [1, 1, 1, 0],
            ],
        };
        const grid4 = {
            data: [
                [1, 1, 0, 0],
                [0, 1, 0, 0],
                [0, 1, 0, 0],
                [1, 1, 1, 0],
            ],
        };
        const combinedGrid = numberBuilder.appendColumns(grid0, grid1);
        numberBuilder.setGridColour(combinedGrid, 2);
        const combinedGrid2 = numberBuilder.appendColumns(grid3, grid4);
        numberBuilder.setGridColour(combinedGrid2, 3);
        const combinedGrid3 = numberBuilder.appendRows(combinedGrid, combinedGrid2);
        expect(combinedGrid3.data).toEqual([
            [2, 2, 2, 0, 2, 2, 0, 0],
            [2, 0, 2, 0, 0, 2, 0, 0],
            [2, 0, 2, 0, 0, 2, 0, 0],
            [2, 2, 2, 0, 2, 2, 2, 0],
            [3, 3, 3, 0, 3, 3, 0, 0],
            [3, 0, 3, 0, 0, 3, 0, 0],
            [3, 0, 3, 0, 0, 3, 0, 0],
            [3, 3, 3, 0, 3, 3, 3, 0],
        ]);
    });
});
//# sourceMappingURL=NumberBuilder.testold.js.map