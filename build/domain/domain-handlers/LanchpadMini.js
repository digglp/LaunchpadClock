"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LaunchpadMini = void 0;
//import MidiStream from "midi-stream";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const MidiStream = require("midi-stream");
class LaunchpadMini {
    constructor() {
        this.RED_COLOUR = 1;
        this.GREEN_COLOUR = 100;
        this.YELLOW_COLOUR = 50;
        this.duplex = MidiStream("Launchpad Mini");
        this.clearScreen();
    }
    clearScreen() {
        this.duplex.write([176, 0, 0]);
    }
    setCell(row, col, colour, delay) {
        const cell = this.mapToLaunchpad(row, col);
        setTimeout(() => {
            this.duplex.write([144, cell, colour]);
        }, delay || 0);
    }
    mapToLaunchpad(row, col) {
        return row * 16 + col;
    }
}
exports.LaunchpadMini = LaunchpadMini;
//# sourceMappingURL=LanchpadMini.js.map