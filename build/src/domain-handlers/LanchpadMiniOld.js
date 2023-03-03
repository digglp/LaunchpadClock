"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LaunchpadMiniOld = void 0;
//import MidiStream from "midi-stream";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const MidiStream = require("midi-stream");
class LaunchpadMiniOld {
    constructor() {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.duplex = MidiStream("Launchpad Mini");
        this.clearScreen();
    }
    clearScreen() {
        this.duplex.write([176, 0, 0]);
    }
    setCell(row, col, colour) {
        const cell = this.mapToLaunchpad(row, col);
        // setTimeout(() => {
        this.duplex.write([144, cell, colour]);
        // }, delay);
    }
    mapToLaunchpad(row, col) {
        return row * 16 + col;
    }
}
exports.LaunchpadMiniOld = LaunchpadMiniOld;
LaunchpadMiniOld.RED_COLOUR = 2;
LaunchpadMiniOld.GREEN_COLOUR = 100;
LaunchpadMiniOld.YELLOW_COLOUR = 50;
LaunchpadMiniOld.CLEAR_COLOUR = 0;
//# sourceMappingURL=LanchpadMiniOld.js.map