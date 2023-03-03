import { ConsoleHandler } from "./../domain-handlers/ConsoleHandler";
import { LaunchpadMini } from "./../infrastructure/LaunchpadMini";

export class Console {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public static async main(_args?: string[]): Promise<void> {
    const handler = new ConsoleHandler(new LaunchpadMini());

    handler.displayIntro();
    handler.readPortInput();
  }
}

Console.main(process.argv);
