"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsoleHandler = void 0;
const node_process_1 = require("node:process");
const readline = __importStar(require("node:readline"));
const Grid_1 = require("../domain/Grid");
class ConsoleHandler {
    constructor(launchpad) {
        this.launchpad = launchpad;
        this.ports = [];
    }
    displayIntro() {
        console.log("Choose a port from the list below:");
        this.displayPorts();
        console.log("x: exit");
    }
    displayPorts() {
        const ports = this.launchpad.getPorts();
        for (let i = 0; i < ports.length; i++) {
            const port = ports[i];
            console.log(`${i}: ${port}`);
            this.ports.push(port);
        }
        this.launchpad.closeMidi();
    }
    readPortInput() {
        const rl = readline.createInterface({ input: node_process_1.stdin, output: node_process_1.stdout });
        rl.prompt();
        rl.on("line", (input) => {
            try {
                this.handleInput(input);
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
            }
            catch (e) {
                console.log(e.message);
                rl.close();
            }
        });
    }
    handleInput(input) {
        if (input === "x") {
            this.launchpad.closeStream();
            process.exit(0);
        }
        if (isNaN(parseInt(input))) {
            throw new Error("Invalid selection");
        }
        //check if it exists in the array
        if (this.ports[parseInt(input)] === undefined) {
            throw new Error("Invalid selection");
        }
        const port = this.ports[parseInt(input)];
        this.launchpad.setMidiStream(port);
        console.log(`Port ${port} selected`);
        this.startDisplay();
    }
    startDisplay() {
        const grid = new Grid_1.Grid(this.launchpad);
        grid.setCell(7, 7, 50);
        console.log(grid.mapToLaunchpad(0, 0));
    }
}
exports.ConsoleHandler = ConsoleHandler;
//# sourceMappingURL=ConsoleHandler.js.map