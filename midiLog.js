var midi = require("midi");

var input = new midi.input();
var portCount = input.getPortCount();
console.log(portCount);

for (var i = 0; i < portCount; i++) {
  console.log(input.getPortName(i));
}
