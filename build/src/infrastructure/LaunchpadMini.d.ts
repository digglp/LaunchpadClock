import { ILaunchpad } from "./ILaunchpad";
export declare class LaunchpadMini implements ILaunchpad {
    stream: any;
    midiInput: any;
    getPorts(): string[];
    setMidiStream(midiName: string): void;
    write(data: number[]): void;
    clear(): void;
    closeMidi(): void;
    closeStream(): void;
}
//# sourceMappingURL=LaunchpadMini.d.ts.map