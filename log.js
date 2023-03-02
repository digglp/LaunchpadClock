var MidiStream = require("midi-stream");
//https://www.youtube.com/watch?v=JatNuVsbsEQ

var duplex = MidiStream("Launchpad Mini");

duplex.write([176, 0, 0]); //clear all
//duplex.pipe(duplex);
duplex.on("data", function (data) {
  console.log(data);
  //console.log(mapToGrid(data[1]));

  //buttons across top 104 - 111
  //botton down right 8,24,40,56,72,88,104,120

  play(mapToGrid(data[1]).row, mapToGrid(data[1]).col, randomVelocity());
});

const play = (row, col, velocity, delay) => {
  var note = mapToMidi(row, col);

  setTimeout(() => {
    duplex.write([144, note, velocity]);
  }, delay || 0);
};

const mapToGrid = (data) => {
  const row = Math.floor(data / 16);
  const col = data % 8;
  return { row, col };
};
const mapToMidi = (row, col) => {
  return row * 16 + col;
};
const randomVelocity = () => {
  return Math.floor(Math.random() * 100);
};
