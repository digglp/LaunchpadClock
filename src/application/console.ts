import { ConsoleHandler } from "./../domain-handlers/ConsoleHandler";
import { LaunchpadMini } from "./../infrastructure/LaunchpadMini";
import { NumberBuilder } from "../domain-handlers/NumberBuilder";

export class Console {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public static async main(_args?: string[]): Promise<void> {
    const numberBuilder = new NumberBuilder();

    const handler = new ConsoleHandler(new LaunchpadMini());

    handler.displayIntro();
    handler.readPortInput();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any

    //launchpadMini.write([1]);
    await numberBuilder.tick();
    //implement  a clock mm:ss
    /*
    setInterval(async () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");

      await numberBuilder.tick();
      //only update if the time has changed
      if (hours !== numberBuilder.topNumberString || minutes !== numberBuilder.bottomNumberString)
        await numberBuilder.setTopSection(hours, minutes);
    }, 1000);
*/

    // const stdin = process.stdin;
    // stdin.setRawMode(true);
    // stdin.resume();
    // stdin.setEncoding("utf8");

    // stdin.on("data", async function (key: string) {
    //   // ctrl-c ( end of text )
    //   if (key === "\u0003") {
    //     process.exit();
    //   }
    //   // write the key to stdout all normal like
    //   // await numberBuilder.setNumber(parseInt(key));
    //   await numberBuilder.setTopSection("01", "10");
    // });
  }

  // private static wait(ms: number) {
  //   return new Promise((resolve) => setTimeout(resolve, ms));
  // }
}

Console.main(process.argv);
