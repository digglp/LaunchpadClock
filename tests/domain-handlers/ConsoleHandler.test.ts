import { ConsoleHandler } from "../../src/domain-handlers/ConsoleHandler";
import { ILaunchpad } from "../../src/infrastructure/ILaunchpad";
//import * as readline from "node:readline";

describe("ConsoleHandler", () => {
  let mockLaunchpad: ILaunchpad;
  // let rl: readline.Interface;

  beforeAll(() => {
    //mock the ILaunchpad
    mockLaunchpad = {
      getPorts: jest.fn().mockReturnValue(["port1", "port2"]),
      setMidiStream: jest.fn(),
      write: jest.fn(),
      clear: jest.fn(),
    } as unknown as ILaunchpad;

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
    const consoleHandler = new ConsoleHandler(mockLaunchpad);

    expect(() => consoleHandler.handleInput("a")).toThrowError("Invalid selection");
  });
  it("should throw an error if input is a number but not in the array", () => {
    const consoleHandler = new ConsoleHandler(mockLaunchpad);

    expect(() => consoleHandler.handleInput("3")).toThrowError("Invalid selection");
  });
});
