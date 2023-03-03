"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Console = void 0;
const ConsoleHandler_1 = require("./../domain-handlers/ConsoleHandler");
const LaunchpadMini_1 = require("./../infrastructure/LaunchpadMini");
const NumberBuilder_1 = require("../domain-handlers/NumberBuilder");
class Console {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    static async main(_args) {
        const numberBuilder = new NumberBuilder_1.NumberBuilder();
        const handler = new ConsoleHandler_1.ConsoleHandler(new LaunchpadMini_1.LaunchpadMini());
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
}
exports.Console = Console;
Console.main(process.argv);
//# sourceMappingURL=console.js.map