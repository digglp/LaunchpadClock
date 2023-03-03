"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LaunchpadMini = void 0;
// eslint-disable-next-line @typescript-eslint/no-var-requires
const MidiStream = require("midi-stream");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const midi = require("midi");
class LaunchpadMini {
    getPorts() {
        this.midiInput = new midi.input();
        const portCount = this.midiInput.getPortCount();
        const ports = [];
        for (let i = 0; i < portCount; i++) {
            ports.push(this.midiInput.getPortName(i));
        }
        return ports;
    }
    setMidiStream(midiName) {
        this.stream = MidiStream(midiName);
    }
    write(data) {
        if (!this.stream) {
            throw new Error("Midi stream not set");
        }
        this.stream.write(data);
    }
    clear() {
        throw new Error("Method not implemented.");
    }
    closeMidi() {
        if (this.midiInput) {
            this.midiInput.closePort();
        }
    }
    closeStream() {
        if (this.stream) {
            this.stream.close();
        }
    }
}
exports.LaunchpadMini = LaunchpadMini;
//# sourceMappingURL=LaunchpadMini.js.map