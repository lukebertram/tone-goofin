import Tone from 'tone';

//GLOBAL VARIABLES
let isPlaying = false;
Tone.Transport.bpm.value = 180;

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
const harpPart = new Tone.Part(function(time, value) {
	//the value is an object which contains both the note and the velocity
	synth.triggerAttackRelease(value.note, "8n", time, value.velocity);
},
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
	{"time" : "1:0:0", "note" : "C7", "velocity": 0.9},
	{"time" : "1:0:1", "note" : "G6", "velocity": 0.9},
	{"time" : "1:0:2", "note" : "E6", "velocity": 0.9},
	{"time" : "1:0:3", "note" : "D6", "velocity": 0.9},
	{"time" : "1:0:4", "note" : "C6", "velocity": 0.9},
	{"time" : "1:0:5", "note" : "G5", "velocity": 0.9},
	{"time" : "1:0:6", "note" : "E5", "velocity": 0.9},
	{"time" : "1:0:7", "note" : "D5", "velocity": 0.9},
	{"time" : "1:0:8", "note" : "C5", "velocity": 0.9},
	{"time" : "1:0:9", "note" : "G4", "velocity": 0.9},
	{"time" : "1:0:10", "note" : "E4", "velocity": 0.9},
	{"time" : "1:0:11", "note" : "D4", "velocity": 0.9},
	{"time" : "1:0:12", "note" : "C4", "velocity": 0.9},
	{"time" : "1:0:13", "note" : "G3", "velocity": 0.9},
	{"time" : "1:0:14", "note" : "E3", "velocity": 0.9},
	{"time" : "1:0:15", "note" : "D3", "velocity": 0.9},

  {"time" : "2:0:0", "note" : "A2", "velocity": 0.9},
	{"time" : "2:0:1", "note" : "B2", "velocity": 0.9},
	{"time" : "2:0:2", "note" : "C3", "velocity": 0.9},
	{"time" : "2:0:3", "note" : "E3", "velocity": 0.9},
	{"time" : "2:0:4", "note" : "A3", "velocity": 0.9},
	{"time" : "2:0:5", "note" : "B3", "velocity": 0.9},
	{"time" : "2:0:6", "note" : "C4", "velocity": 0.9},
	{"time" : "2:0:7", "note" : "E4", "velocity": 0.9},
	{"time" : "2:0:8", "note" : "A4", "velocity": 0.9},
	{"time" : "2:0:9", "note" : "B4", "velocity": 0.9},
	{"time" : "2:0:10", "note" : "C5", "velocity": 0.9},
	{"time" : "2:0:11", "note" : "E5", "velocity": 0.9},
	{"time" : "2:0:12", "note" : "A5", "velocity": 0.9},
	{"time" : "2:0:13", "note" : "B5", "velocity": 0.9},
	{"time" : "2:0:14", "note" : "C6", "velocity": 0.9},
	{"time" : "2:0:15", "note" : "E6", "velocity": 0.9},
	{"time" : "3:0:0", "note" : "A6", "velocity": 0.9},
	{"time" : "3:0:1", "note" : "E6", "velocity": 0.9},
	{"time" : "3:0:2", "note" : "C6", "velocity": 0.9},
	{"time" : "3:0:3", "note" : "B5", "velocity": 0.9},
	{"time" : "3:0:4", "note" : "A5", "velocity": 0.9},
	{"time" : "3:0:5", "note" : "E5", "velocity": 0.9},
	{"time" : "3:0:6", "note" : "C5", "velocity": 0.9},
	{"time" : "3:0:7", "note" : "B4", "velocity": 0.9},
	{"time" : "3:0:8", "note" : "A4", "velocity": 0.9},
	{"time" : "3:0:9", "note" : "E4", "velocity": 0.9},
	{"time" : "3:0:10", "note" : "C4", "velocity": 0.9},
	{"time" : "3:0:11", "note" : "B3", "velocity": 0.9},
	{"time" : "3:0:12", "note" : "A3", "velocity": 0.9},
	{"time" : "3:0:13", "note" : "E3", "velocity": 0.9},
	{"time" : "3:0:14", "note" : "C3", "velocity": 0.9},
	{"time" : "3:0:15", "note" : "B2", "velocity": 0.9},
]).start(0);
harpPart.loop = true;
harpPart.loopStart = "0:0:0";
harpPart.loopEnd = "4:0:0";


const togglePlayback = function() {
  if (isPlaying) {
    console.log('stop playback');
    Tone.Transport.stop();
    prelude.index = 0;
  } else {
    console.log('start playback');
    Tone.Transport.start();
  }
  isPlaying = !isPlaying;
}



// FRONT-END FOOLERY
$(document).ready(function(){
  document.getElementById('toggle-play').onclick = togglePlayback;
  $('#bpm-form').submit(function(event){
    event.preventDefault();
    const newBpm = parseInt($('#bpm-input').val());
    Tone.Transport.bpm.value = newBpm;
  });
});
