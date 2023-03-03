import { ILaunchpad } from "./../infrastructure/ILaunchpad";
export declare class ConsoleHandler {
    launchpad: ILaunchpad;
    ports: string[];
    constructor(launchpad: ILaunchpad);
    displayIntro(): void;
    private displayPorts;
    readPortInput(): void;
    handleInput(input: string): void;
    startDisplay(): void;
}
//# sourceMappingURL=ConsoleHandler.d.ts.map