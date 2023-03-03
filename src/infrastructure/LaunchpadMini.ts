import { ILaunchpad } from "./ILaunchpad";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const MidiStream = require("midi-stream");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const midi = require("midi");

export class LaunchpadMini implements ILaunchpad {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  stream: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  midiInput: any;

  public static RED_COLOUR = 10;
  public static GREEN_COLOUR = 20;
  public static ORANGE_COLOUR = 30;
  public static YELLOW_COLOUR = 50;

  public static CLEAR_COLOUR = 0;

  public getPorts(): string[] {
    this.midiInput = new midi.input();
    const portCount = this.midiInput.getPortCount();
    const ports = [];
    for (let i = 0; i < portCount; i++) {
      ports.push(this.midiInput.getPortName(i));
    }
    return ports;
  }

  public setMidiStream(midiName: string): void {
    this.stream = MidiStream(midiName);
  }

  public write(data: number[]): void {
    if (!this.stream) {
      throw new Error("Midi stream not set");
    }

    this.stream.write(data);
  }

  public clear(): void {
    throw new Error("Method not implemented.");
  }

  public closeMidi(): void {
    if (this.midiInput) {
      console.log("closing midi");
      this.midiInput.closePort();
    }
  }
  public closeStream(): void {
    if (this.stream) {
      console.log("closing stream");
      this.stream.close();
    }
  }
}
