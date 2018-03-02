import Tone from 'tone';
// import harpNoteArray from './../js/harpNoteArray';

//GLOBAL VARIABLES
let isPlaying = false;
Tone.Transport.bpm.value = 90;
Tone.Transport.setLoopPoints("0:0:0","16:0:0")
Tone.Transport.loop = true;
const harpNoteArrayByMeasure = [

  [
    {"time" : "0:0:0", "note" : "C3", "velocity": 0.9},
  	{"time" : "0:0:1", "note" : "D3", "velocity": 0.9},
  	{"time" : "0:0:2", "note" : "E3", "velocity": 0.9},
  	{"time" : "0:0:3", "note" : "G3", "velocity": 0.9},
  	{"time" : "0:1:0", "note" : "C4", "velocity": 0.9},
  	{"time" : "0:1:1", "note" : "D4", "velocity": 0.9},
  	{"time" : "0:1:2", "note" : "E4", "velocity": 0.9},
  	{"time" : "0:1:3", "note" : "G4", "velocity": 0.9},
  	{"time" : "0:2:0", "note" : "C5", "velocity": 0.9},
  	{"time" : "0:2:1", "note" : "D5", "velocity": 0.9},
  	{"time" : "0:2:2", "note" : "E5", "velocity": 0.9},
  	{"time" : "0:2:3", "note" : "G5", "velocity": 0.9},
  	{"time" : "0:3:0", "note" : "C6", "velocity": 0.9},
  	{"time" : "0:3:1", "note" : "D6", "velocity": 0.9},
  	{"time" : "0:3:2", "note" : "E6", "velocity": 0.9},
  	{"time" : "0:3:3", "note" : "G6", "velocity": 0.9},
  ],
  [
  	{"time" : "0:0:0", "note" : "C7", "velocity": 0.9},
  	{"time" : "0:0:1", "note" : "G6", "velocity": 0.9},
  	{"time" : "0:0:2", "note" : "E6", "velocity": 0.9},
  	{"time" : "0:0:3", "note" : "D6", "velocity": 0.9},
  	{"time" : "0:0:4", "note" : "C6", "velocity": 0.9},
  	{"time" : "0:0:5", "note" : "G5", "velocity": 0.9},
  	{"time" : "0:0:6", "note" : "E5", "velocity": 0.9},
  	{"time" : "0:0:7", "note" : "D5", "velocity": 0.9},
  	{"time" : "0:0:8", "note" : "C5", "velocity": 0.9},
  	{"time" : "0:0:9", "note" : "G4", "velocity": 0.9},
  	{"time" : "0:0:10", "note" : "E4", "velocity": 0.9},
  	{"time" : "0:0:11", "note" : "D4", "velocity": 0.9},
  	{"time" : "0:0:12", "note" : "C4", "velocity": 0.9},
  	{"time" : "0:0:13", "note" : "G3", "velocity": 0.9},
  	{"time" : "0:0:14", "note" : "E3", "velocity": 0.9},
  	{"time" : "0:0:15", "note" : "D3", "velocity": 0.9},
  ],
  [
    {"time" : "0:0:0", "note" : "A2", "velocity": 0.9},
  	{"time" : "0:0:1", "note" : "B2", "velocity": 0.9},
  	{"time" : "0:0:2", "note" : "C3", "velocity": 0.9},
  	{"time" : "0:0:3", "note" : "E3", "velocity": 0.9},
  	{"time" : "0:0:4", "note" : "A3", "velocity": 0.9},
  	{"time" : "0:0:5", "note" : "B3", "velocity": 0.9},
  	{"time" : "0:0:6", "note" : "C4", "velocity": 0.9},
  	{"time" : "0:0:7", "note" : "E4", "velocity": 0.9},
  	{"time" : "0:0:8", "note" : "A4", "velocity": 0.9},
  	{"time" : "0:0:9", "note" : "B4", "velocity": 0.9},
  	{"time" : "0:0:10", "note" : "C5", "velocity": 0.9},
  	{"time" : "0:0:11", "note" : "E5", "velocity": 0.9},
  	{"time" : "0:0:12", "note" : "A5", "velocity": 0.9},
  	{"time" : "0:0:13", "note" : "B5", "velocity": 0.9},
  	{"time" : "0:0:14", "note" : "C6", "velocity": 0.9},
  	{"time" : "0:0:15", "note" : "E6", "velocity": 0.9},
  ],
  [
  	{"time" : "0:0:0", "note" : "A6", "velocity": 0.9},
  	{"time" : "0:0:1", "note" : "E6", "velocity": 0.9},
  	{"time" : "0:0:2", "note" : "C6", "velocity": 0.9},
  	{"time" : "0:0:3", "note" : "B5", "velocity": 0.9},
  	{"time" : "0:0:4", "note" : "A5", "velocity": 0.9},
  	{"time" : "0:0:5", "note" : "E5", "velocity": 0.9},
  	{"time" : "0:0:6", "note" : "C5", "velocity": 0.9},
  	{"time" : "0:0:7", "note" : "B4", "velocity": 0.9},
  	{"time" : "0:0:8", "note" : "A4", "velocity": 0.9},
  	{"time" : "0:0:9", "note" : "E4", "velocity": 0.9},
  	{"time" : "0:0:10", "note" : "C4", "velocity": 0.9},
  	{"time" : "0:0:11", "note" : "B3", "velocity": 0.9},
  	{"time" : "0:0:12", "note" : "A3", "velocity": 0.9},
  	{"time" : "0:0:13", "note" : "E3", "velocity": 0.9},
  	{"time" : "0:0:14", "note" : "C3", "velocity": 0.9},
  	{"time" : "0:0:15", "note" : "B2", "velocity": 0.9},
  ],
  [
    {"time" : "0:0:0", "note" : "C3", "velocity": 0.9},
  	{"time" : "0:0:1", "note" : "D3", "velocity": 0.9},
  	{"time" : "0:0:2", "note" : "E3", "velocity": 0.9},
  	{"time" : "0:0:3", "note" : "G3", "velocity": 0.9},
  	{"time" : "0:0:4", "note" : "C4", "velocity": 0.9},
  	{"time" : "0:0:5", "note" : "D4", "velocity": 0.9},
  	{"time" : "0:0:6", "note" : "E4", "velocity": 0.9},
  	{"time" : "0:0:7", "note" : "G4", "velocity": 0.9},
  	{"time" : "0:0:8", "note" : "C5", "velocity": 0.9},
  	{"time" : "0:0:9", "note" : "D5", "velocity": 0.9},
  	{"time" : "0:0:10", "note" : "E5", "velocity": 0.9},
  	{"time" : "0:0:11", "note" : "G5", "velocity": 0.9},
  	{"time" : "0:0:12", "note" : "C6", "velocity": 0.9},
  	{"time" : "0:0:13", "note" : "D6", "velocity": 0.9},
  	{"time" : "0:0:14", "note" : "E6", "velocity": 0.9},
  	{"time" : "0:0:15", "note" : "G6", "velocity": 0.9},
  ],
  [
  	{"time" : "0:0:0", "note" : "C7", "velocity": 0.9},
  	{"time" : "0:0:1", "note" : "G6", "velocity": 0.9},
  	{"time" : "0:0:2", "note" : "E6", "velocity": 0.9},
  	{"time" : "0:0:3", "note" : "D6", "velocity": 0.9},
  	{"time" : "0:0:4", "note" : "C6", "velocity": 0.9},
  	{"time" : "0:0:5", "note" : "G5", "velocity": 0.9},
  	{"time" : "0:0:6", "note" : "E5", "velocity": 0.9},
  	{"time" : "0:0:7", "note" : "D5", "velocity": 0.9},
  	{"time" : "0:0:8", "note" : "C5", "velocity": 0.9},
  	{"time" : "0:0:9", "note" : "G4", "velocity": 0.9},
  	{"time" : "0:0:10", "note" : "E4", "velocity": 0.9},
  	{"time" : "0:0:11", "note" : "D4", "velocity": 0.9},
  	{"time" : "0:0:12", "note" : "C4", "velocity": 0.9},
  	{"time" : "0:0:13", "note" : "G3", "velocity": 0.9},
  	{"time" : "0:0:14", "note" : "E3", "velocity": 0.9},
  	{"time" : "0:0:15", "note" : "D3", "velocity": 0.9},
  ],
  [
    {"time" : "0:0:0", "note" : "A2", "velocity": 0.9},
  	{"time" : "0:0:1", "note" : "B2", "velocity": 0.9},
  	{"time" : "0:0:2", "note" : "C3", "velocity": 0.9},
  	{"time" : "0:0:3", "note" : "E3", "velocity": 0.9},
  	{"time" : "0:0:4", "note" : "A3", "velocity": 0.9},
  	{"time" : "0:0:5", "note" : "B3", "velocity": 0.9},
  	{"time" : "0:0:6", "note" : "C4", "velocity": 0.9},
  	{"time" : "0:0:7", "note" : "E4", "velocity": 0.9},
  	{"time" : "0:0:8", "note" : "A4", "velocity": 0.9},
  	{"time" : "0:0:9", "note" : "B4", "velocity": 0.9},
  	{"time" : "0:0:10", "note" : "C5", "velocity": 0.9},
  	{"time" : "0:0:11", "note" : "E5", "velocity": 0.9},
  	{"time" : "0:0:12", "note" : "A5", "velocity": 0.9},
  	{"time" : "0:0:13", "note" : "B5", "velocity": 0.9},
  	{"time" : "0:0:14", "note" : "C6", "velocity": 0.9},
  	{"time" : "0:0:15", "note" : "E6", "velocity": 0.9},
  ],
  [
  	{"time" : "0:0:0", "note" : "A6", "velocity": 0.9},
  	{"time" : "0:0:1", "note" : "E6", "velocity": 0.9},
  	{"time" : "0:0:2", "note" : "C6", "velocity": 0.9},
  	{"time" : "0:0:3", "note" : "B5", "velocity": 0.9},
  	{"time" : "0:0:4", "note" : "A5", "velocity": 0.9},
  	{"time" : "0:0:5", "note" : "E5", "velocity": 0.9},
  	{"time" : "0:0:6", "note" : "C5", "velocity": 0.9},
  	{"time" : "0:0:7", "note" : "B4", "velocity": 0.9},
  	{"time" : "0:0:8", "note" : "A4", "velocity": 0.9},
  	{"time" : "0:0:9", "note" : "E4", "velocity": 0.9},
  	{"time" : "0:0:10", "note" : "C4", "velocity": 0.9},
  	{"time" : "0:0:11", "note" : "B3", "velocity": 0.9},
  	{"time" : "0:0:12", "note" : "A3", "velocity": 0.9},
  	{"time" : "0:0:13", "note" : "E3", "velocity": 0.9},
  	{"time" : "0:0:14", "note" : "C3", "velocity": 0.9},
  	{"time" : "0:0:15", "note" : "B2", "velocity": 0.9},
  ],
  [
    {"time" : "0:0:0", "note" : "A2", "velocity": 0.9},
    {"time" : "0:0:1", "note" : "C3", "velocity": 0.9},
    {"time" : "0:0:2", "note" : "F3", "velocity": 0.9},
    {"time" : "0:0:3", "note" : "G3", "velocity": 0.9},
    {"time" : "0:0:4", "note" : "A3", "velocity": 0.9},
    {"time" : "0:0:5", "note" : "C4", "velocity": 0.9},
    {"time" : "0:0:6", "note" : "F4", "velocity": 0.9},
    {"time" : "0:0:7", "note" : "G4", "velocity": 0.9},
    {"time" : "0:0:8", "note" : "A4", "velocity": 0.9},
    {"time" : "0:0:9", "note" : "C5", "velocity": 0.9},
    {"time" : "0:0:10", "note" : "F5", "velocity": 0.9},
    {"time" : "0:0:11", "note" : "G5", "velocity": 0.9},
    {"time" : "0:0:12", "note" : "A5", "velocity": 0.9},
    {"time" : "0:0:13", "note" : "C6", "velocity": 0.9},
    {"time" : "0:0:14", "note" : "F6", "velocity": 0.9},
    {"time" : "0:0:15", "note" : "G6", "velocity": 0.9},
  ],
  [
    {"time" : "0:0:0", "note" : "A6", "velocity": 0.9},
    {"time" : "0:0:1", "note" : "G6", "velocity": 0.9},
    {"time" : "0:0:2", "note" : "F6", "velocity": 0.9},
    {"time" : "0:0:3", "note" : "C6", "velocity": 0.9},
    {"time" : "0:0:4", "note" : "A5", "velocity": 0.9},
    {"time" : "0:0:5", "note" : "G5", "velocity": 0.9},
    {"time" : "0:0:6", "note" : "F5", "velocity": 0.9},
    {"time" : "0:0:7", "note" : "C5", "velocity": 0.9},
    {"time" : "0:0:8", "note" : "A4", "velocity": 0.9},
    {"time" : "0:0:9", "note" : "G4", "velocity": 0.9},
    {"time" : "0:0:10", "note" : "F4", "velocity": 0.9},
    {"time" : "0:0:11", "note" : "C4", "velocity": 0.9},
    {"time" : "0:0:12", "note" : "A3", "velocity": 0.9},
    {"time" : "0:0:13", "note" : "G3", "velocity": 0.9},
    {"time" : "0:0:14", "note" : "F3", "velocity": 0.9},
    {"time" : "0:0:15", "note" : "C3", "velocity": 0.9},
  ],
  [
    {"time" : "0:0:0", "note" : "B2", "velocity": 0.9},
    {"time" : "0:0:1", "note" : "D3", "velocity": 0.9},
    {"time" : "0:0:2", "note" : "G3", "velocity": 0.9},
    {"time" : "0:0:3", "note" : "A3", "velocity": 0.9},
    {"time" : "0:0:4", "note" : "B3", "velocity": 0.9},
    {"time" : "0:0:5", "note" : "D4", "velocity": 0.9},
    {"time" : "0:0:6", "note" : "G4", "velocity": 0.9},
    {"time" : "0:0:7", "note" : "A4", "velocity": 0.9},
    {"time" : "0:0:8", "note" : "B4", "velocity": 0.9},
    {"time" : "0:0:9", "note" : "D5", "velocity": 0.9},
    {"time" : "0:0:10", "note" : "G5", "velocity": 0.9},
    {"time" : "0:0:11", "note" : "A5", "velocity": 0.9},
    {"time" : "0:0:12", "note" : "B5", "velocity": 0.9},
    {"time" : "0:0:13", "note" : "D6", "velocity": 0.9},
    {"time" : "0:0:14", "note" : "G6", "velocity": 0.9},
    {"time" : "0:0:15", "note" : "A6", "velocity": 0.9},
  ],
  [
    {"time" : "0:0:0", "note" : "B6", "velocity": 0.9},
    {"time" : "0:0:1", "note" : "A6", "velocity": 0.9},
    {"time" : "0:0:2", "note" : "G6", "velocity": 0.9},
    {"time" : "0:0:3", "note" : "D6", "velocity": 0.9},
    {"time" : "0:0:4", "note" : "B5", "velocity": 0.9},
    {"time" : "0:0:5", "note" : "A5", "velocity": 0.9},
    {"time" : "0:0:6", "note" : "G5", "velocity": 0.9},
    {"time" : "0:0:7", "note" : "D5", "velocity": 0.9},
    {"time" : "0:0:8", "note" : "B4", "velocity": 0.9},
    {"time" : "0:0:9", "note" : "A4", "velocity": 0.9},
    {"time" : "0:0:10", "note" : "G4", "velocity": 0.9},
    {"time" : "0:0:11", "note" : "D4", "velocity": 0.9},
    {"time" : "0:0:12", "note" : "B3", "velocity": 0.9},
    {"time" : "0:0:13", "note" : "A3", "velocity": 0.9},
    {"time" : "0:0:14", "note" : "G3", "velocity": 0.9},
    {"time" : "0:0:15", "note" : "D3", "velocity": 0.9},
  ],
  [
    {"time" : "0:0:0", "note" : "Ab2", "velocity": 0.9},
    {"time" : "0:0:1", "note" : "C3", "velocity": 0.9},
    {"time" : "0:0:2", "note" : "Eb3", "velocity": 0.9},
    {"time" : "0:0:3", "note" : "G3", "velocity": 0.9},
    {"time" : "0:0:4", "note" : "Ab3", "velocity": 0.9},
    {"time" : "0:0:5", "note" : "C4", "velocity": 0.9},
    {"time" : "0:0:6", "note" : "Eb4", "velocity": 0.9},
    {"time" : "0:0:7", "note" : "G4", "velocity": 0.9},
    {"time" : "0:0:8", "note" : "Ab4", "velocity": 0.9},
    {"time" : "0:0:9", "note" : "C5", "velocity": 0.9},
    {"time" : "0:0:10", "note" : "Eb5", "velocity": 0.9},
    {"time" : "0:0:11", "note" : "G5", "velocity": 0.9},
    {"time" : "0:0:12", "note" : "Ab5", "velocity": 0.9},
    {"time" : "0:0:13", "note" : "C6", "velocity": 0.9},
    {"time" : "0:0:14", "note" : "Eb6", "velocity": 0.9},
    {"time" : "0:0:15", "note" : "G6", "velocity": 0.9},
  ],
  [
    {"time" : "0:0:0", "note" : "Ab6", "velocity": 0.9},
    {"time" : "0:0:1", "note" : "G6", "velocity": 0.9},
    {"time" : "0:0:2", "note" : "Eb6", "velocity": 0.9},
    {"time" : "0:0:3", "note" : "C6", "velocity": 0.9},
    {"time" : "0:0:4", "note" : "Ab5", "velocity": 0.9},
    {"time" : "0:0:5", "note" : "G5", "velocity": 0.9},
    {"time" : "0:0:6", "note" : "Eb5", "velocity": 0.9},
    {"time" : "0:0:7", "note" : "C5", "velocity": 0.9},
    {"time" : "0:0:8", "note" : "Ab4", "velocity": 0.9},
    {"time" : "0:0:9", "note" : "G4", "velocity": 0.9},
    {"time" : "0:0:10", "note" : "Eb4", "velocity": 0.9},
    {"time" : "0:0:11", "note" : "C4", "velocity": 0.9},
    {"time" : "0:0:12", "note" : "Ab3", "velocity": 0.9},
    {"time" : "0:0:13", "note" : "G3", "velocity": 0.9},
    {"time" : "0:0:14", "note" : "Eb3", "velocity": 0.9},
    {"time" : "0:0:15", "note" : "C3", "velocity": 0.9},
  ],
  [
    {"time" : "0:0:0", "note" : "Bb2", "velocity": 0.9},
    {"time" : "0:0:1", "note" : "D3", "velocity": 0.9},
    {"time" : "0:0:2", "note" : "F3", "velocity": 0.9},
    {"time" : "0:0:3", "note" : "A3", "velocity": 0.9},
    {"time" : "0:0:4", "note" : "Bb3", "velocity": 0.9},
    {"time" : "0:0:5", "note" : "D4", "velocity": 0.9},
    {"time" : "0:0:6", "note" : "F4", "velocity": 0.9},
    {"time" : "0:0:7", "note" : "A4", "velocity": 0.9},
    {"time" : "0:0:8", "note" : "Bb4", "velocity": 0.9},
    {"time" : "0:0:9", "note" : "D5", "velocity": 0.9},
    {"time" : "0:0:10", "note" : "F5", "velocity": 0.9},
    {"time" : "0:0:11", "note" : "A5", "velocity": 0.9},
    {"time" : "0:0:12", "note" : "Bb5", "velocity": 0.9},
    {"time" : "0:0:13", "note" : "D6", "velocity": 0.9},
    {"time" : "0:0:14", "note" : "F6", "velocity": 0.9},
    {"time" : "0:0:15", "note" : "A6", "velocity": 0.9},
  ],
  [
    {"time" : "0:0:0", "note" : "Bb6", "velocity": 0.9},
    {"time" : "0:0:1", "note" : "A6", "velocity": 0.9},
    {"time" : "0:0:2", "note" : "F6", "velocity": 0.9},
    {"time" : "0:0:3", "note" : "D6", "velocity": 0.9},
    {"time" : "0:0:4", "note" : "Bb5", "velocity": 0.9},
    {"time" : "0:0:5", "note" : "A5", "velocity": 0.9},
    {"time" : "0:0:6", "note" : "F5", "velocity": 0.9},
    {"time" : "0:0:7", "note" : "D5", "velocity": 0.9},
    {"time" : "0:0:8", "note" : "Bb4", "velocity": 0.9},
    {"time" : "0:0:9", "note" : "A4", "velocity": 0.9},
    {"time" : "0:0:10", "note" : "F4", "velocity": 0.9},
    {"time" : "0:0:11", "note" : "D4", "velocity": 0.9},
    {"time" : "0:0:12", "note" : "Bb3", "velocity": 0.9},
    {"time" : "0:0:13", "note" : "A3", "velocity": 0.9},
    {"time" : "0:0:14", "note" : "F3", "velocity": 0.9},
    {"time" : "0:0:15", "note" : "D3", "velocity": 0.9},
  ]
];


//SYNTH SETUP
const synth = new Tone.Synth();//create a new synth to play back sounds

synth.toMaster();//connect synth to master output so it can be heard
//these can be combined as follows:
  // const synth = new Tone.Synth().toMaster();

//setup a Pattern (arpeggio) to play back
const prelude = new Tone.Pattern(
  function(time, note) {
    synth.triggerAttackRelease(note, '16n');
  },
  [
    'C3', 'D3', 'E3', 'G3', 'C4', 'D4', 'E4', 'G4',
    'C5', 'D5', 'E5', 'G5', 'C6', 'D6', 'E6', 'G6',
    'C7', 'G6', 'E6', 'D6', 'C6', 'G5', 'E5', 'D5',
    'C5', 'G4', 'E4', 'D4', 'C4', 'G3', 'E3', 'D3',

    'A2', 'B2', 'C3', 'E3', 'A3', 'B3', 'C4', 'E4',
    'A4', 'B4', 'C5', 'E5', 'A5', 'B5', 'C6', 'E6',
    'A6', 'E6', 'C6', 'B5', 'A5', 'E5', 'C5', 'B4',
    'A4', 'E4', 'C4', 'B3', 'A3', 'E3', 'C3', 'B2'
  ]
);

prelude.playbackRate = 2;

//set the prelude pattern to start at the beginning of the Transport timeline
// prelude.start('0:0:0');

//setup for a Part that will play back on Transport.start()
//use an array of objects as long as the object has a "time" attribute
const harpPart0 = new Tone.Part(function(time, value) {
	//the value is an object which contains both the note and the velocity
	synth.triggerAttackRelease(value.note, "16n", time, value.velocity);
}, harpNoteArrayByMeasure[0]
).start("0:0:0");

const harpPart1 = new Tone.Part(function(time, value) {
	//the value is an object which contains both the note and the velocity
	synth.triggerAttackRelease(value.note, "16n", time, value.velocity);
}, harpNoteArrayByMeasure[1]
).start("1:0:0");

const harpPart2 = new Tone.Part(function(time, value) {
	//the value is an object which contains both the note and the velocity
	synth.triggerAttackRelease(value.note, "16n", time, value.velocity);
}, harpNoteArrayByMeasure[2]
).start("2:0:0");
const harpPart3 = new Tone.Part(function(time, value) {
	//the value is an object which contains both the note and the velocity
	synth.triggerAttackRelease(value.note, "16n", time, value.velocity);
}, harpNoteArrayByMeasure[3]
).start("3:0:0");
const harpPart4 = new Tone.Part(function(time, value) {
	//the value is an object which contains both the note and the velocity
	synth.triggerAttackRelease(value.note, "16n", time, value.velocity);
}, harpNoteArrayByMeasure[4]
).start("4:0:0");
const harpPart5 = new Tone.Part(function(time, value) {
	//the value is an object which contains both the note and the velocity
	synth.triggerAttackRelease(value.note, "16n", time, value.velocity);
}, harpNoteArrayByMeasure[5]
).start("5:0:0");
const harpPart6 = new Tone.Part(function(time, value) {
	//the value is an object which contains both the note and the velocity
	synth.triggerAttackRelease(value.note, "16n", time, value.velocity);
}, harpNoteArrayByMeasure[6]
).start("6:0:0");
const harpPart7 = new Tone.Part(function(time, value) {
	//the value is an object which contains both the note and the velocity
	synth.triggerAttackRelease(value.note, "16n", time, value.velocity);
}, harpNoteArrayByMeasure[7]
).start("7:0:0");
const harpPart8 = new Tone.Part(function(time, value) {
	//the value is an object which contains both the note and the velocity
	synth.triggerAttackRelease(value.note, "16n", time, value.velocity);
}, harpNoteArrayByMeasure[8]
).start("8:0:0");
const harpPart9 = new Tone.Part(function(time, value) {
	//the value is an object which contains both the note and the velocity
	synth.triggerAttackRelease(value.note, "16n", time, value.velocity);
}, harpNoteArrayByMeasure[9]
).start("9:0:0");
const harpPart10 = new Tone.Part(function(time, value) {
	//the value is an object which contains both the note and the velocity
	synth.triggerAttackRelease(value.note, "16n", time, value.velocity);
}, harpNoteArrayByMeasure[10]
).start("10:0:0");
const harpPart11 = new Tone.Part(function(time, value) {
	//the value is an object which contains both the note and the velocity
	synth.triggerAttackRelease(value.note, "16n", time, value.velocity);
}, harpNoteArrayByMeasure[11]
).start("11:0:0");
const harpPart12 = new Tone.Part(function(time, value) {
	//the value is an object which contains both the note and the velocity
	synth.triggerAttackRelease(value.note, "16n", time, value.velocity);
}, harpNoteArrayByMeasure[12]
).start("12:0:0");
const harpPart13 = new Tone.Part(function(time, value) {
	//the value is an object which contains both the note and the velocity
	synth.triggerAttackRelease(value.note, "16n", time, value.velocity);
}, harpNoteArrayByMeasure[13]
).start("13:0:0");
const harpPart14 = new Tone.Part(function(time, value) {
	//the value is an object which contains both the note and the velocity
	synth.triggerAttackRelease(value.note, "16n", time, value.velocity);
}, harpNoteArrayByMeasure[14]
).start("14:0:0");
const harpPart15 = new Tone.Part(function(time, value) {
	//the value is an object which contains both the note and the velocity
	synth.triggerAttackRelease(value.note, "16n", time, value.velocity);
}, harpNoteArrayByMeasure[15]
).start("15:0:0");
// harpPart.stop("16:0:0");
// harpPart.loop = false;
// harpPart.loopStart = "0:0:0";
// harpPart.loopEnd = "16:0:0";


const togglePlayback = function() {
  if (isPlaying) {
    console.log('stop playback');
    Tone.Transport.stop();
    // prelude.index = 0;
  } else {
    console.log('start playback');
    Tone.Transport.start("+0.01","0:0:0");
  }
  isPlaying = !isPlaying;
}

const toggleLoop = function() {
  Tone.Transport.loop = !Tone.Transport.loop;
}


// FRONT-END FOOLERY
$(document).ready(function() {
  console.log(harpNoteArrayByMeasure);
  document.getElementById('toggle-play').onclick = togglePlayback;
  document.getElementById('toggle-loop').onclick = toggleLoop;
  $('#settings-form').submit(function(event){
    event.preventDefault();
    let newBpm = parseInt($('#bpm-input').val());
    let newLoopStart = $('#loop-start-input').val();
    let newLoopStop = $('#loop-stop-input').val();
    console.log(`New Loop Start: ${newLoopStart}:0:0`);
    if (newBpm){
      Tone.Transport.bpm.value = newBpm;
    };
    if (newLoopStart && newLoopStop) {
      Tone.Transport.setLoopPoints(newLoopStart, newLoopStop);
    }
    // Tone.Transport.setLoopPoints(newLoopStart, newLoopStop);
  });
});
