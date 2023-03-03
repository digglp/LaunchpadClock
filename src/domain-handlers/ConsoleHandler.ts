import { ILaunchpad } from "./../infrastructure/ILaunchpad";
import { stdin as input, stdout as output } from "node:process";
import * as readline from "node:readline";

import { Clock } from "../domain/Clock";

export class ConsoleHandler {
  launchpad: ILaunchpad;

  ports: string[];

  public constructor(launchpad: ILaunchpad) {
    this.launchpad = launchpad;
    this.ports = [];
  }
  public displayIntro(): void {
    console.log("Choose a port from the list below:");

    this.displayPorts();
    console.log("x: exit");
  }
  private displayPorts() {
    const ports = this.launchpad.getPorts();
    for (let i = 0; i < ports.length; i++) {
      const port = ports[i];
      console.log(`${i}: ${port}`);
      this.ports.push(port);
    }
    this.launchpad.closeMidi();
  }

  public readPortInput(): void {
    const rl = readline.createInterface({ input, output });
    rl.prompt();

    rl.on("line", (input) => {
      try {
        this.handleInput(input);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (e: any) {
        console.log(e.message);
        rl.close();
      }
    });
  }

  public handleInput(input: string): void {
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

    this.launchpad.write([0, 0, parseInt(input)]);
  }

  private startDisplay(): void {
    const clock = new Clock(this.launchpad);
    clock.start();
  }
}
