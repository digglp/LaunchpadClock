//import MidiStream from "midi-stream";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const MidiStream = require("midi-stream");

export class LaunchpadMiniOld {
  public static RED_COLOUR = 2;
  public static GREEN_COLOUR = 100;
  public static YELLOW_COLOUR = 50;
  public static CLEAR_COLOUR = 0;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  duplex: any = MidiStream("Launchpad Mini");

  constructor() {
    this.clearScreen();
  }

  public clearScreen() {
    this.duplex.write([176, 0, 0]);
  }

  public setCell(row: number, col: number, colour: number) {
    const cell = this.mapToLaunchpad(row, col);

    // setTimeout(() => {
    this.duplex.write([144, cell, colour]);
    // }, delay);
  }

  private mapToLaunchpad(row: number, col: number) {
    return row * 16 + col;
  }
}
