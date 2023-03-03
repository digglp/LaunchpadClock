"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ConsoleHandler_1 = require("../../src/domain-handlers/ConsoleHandler");
//import * as readline from "node:readline";
describe("ConsoleHandler", () => {
    let mockLaunchpad;
    // let rl: readline.Interface;
    beforeAll(() => {
        //mock the ILaunchpad
        mockLaunchpad = {
            getPorts: jest.fn().mockReturnValue(["port1", "port2"]),
            setMidiStream: jest.fn(),
            write: jest.fn(),
            clear: jest.fn(),
        };
        //mock stdin and stdout and readline
        jest.mock("node:process", () => ({
            stdin: {
                on: jest.fn(),
            },
            stdout: {
                on: jest.fn(),
            },
        }));
        console.log = jest.fn();
        // rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    });
    it("should throw an error if input isnt a number", () => {
        const consoleHandler = new ConsoleHandler_1.ConsoleHandler(mockLaunchpad);
        expect(() => consoleHandler.handleInput("a")).toThrowError("Invalid selection");
    });
    it("should throw an error if input is a number but not in the array", () => {
        const consoleHandler = new ConsoleHandler_1.ConsoleHandler(mockLaunchpad);
        expect(() => consoleHandler.handleInput("3")).toThrowError("Invalid selection");
    });
});
//# sourceMappingURL=ConsoleHandler.test.js.map