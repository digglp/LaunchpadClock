export interface ILaunchpad {
  getPorts(): string[];
  setMidiStream(midiName: string): void;
  write(data: number[]): void;
  clear(): void;
  closeStream(): void;
  closeMidi(): void;
}
