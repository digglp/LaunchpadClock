import { ILaunchpad } from "./ILaunchpad";
export declare class LaunchpadMini implements ILaunchpad {
    stream: any;
    midiInput: any;
    static RED_COLOUR: number;
    static GREEN_COLOUR: number;
    static ORANGE_COLOUR: number;
    static YELLOW_COLOUR: number;
    static CLEAR_COLOUR: number;
    getPorts(): string[];
    setMidiStream(midiName: string): void;
    write(data: number[]): void;
    clear(): void;
    closeMidi(): void;
    closeStream(): void;
}
//# sourceMappingURL=LaunchpadMini.d.ts.map