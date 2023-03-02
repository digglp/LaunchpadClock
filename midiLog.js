var midi = require("midi");

var input = new midi.input();
var portCount = input.getPortCount();
console.log(portCount);
