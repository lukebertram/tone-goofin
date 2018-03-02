import Tone from 'tone';

//GLOBAL VARIABLES
let isPlaying = false;

//SYNTH SETUP
const synth = new Tone.Synth();//create a new synth to play back sounds

synth.toMaster();//connect synth to master output so it can be heard
//these can be combined as follows:
  // const synth = new Tone.Synth().toMaster();
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
prelude.start('0:0:0');
Tone.Transport.bpm.value = 180;

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
