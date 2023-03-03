"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Console = void 0;
class Console {
    static main(args) {
        console.log("Hello World!");
        if (args)
            console.log(args);
    }
}
exports.Console = Console;
Console.main(process.argv);
//# sourceMappingURL=console.js.map