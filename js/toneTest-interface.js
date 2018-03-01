import Tone from 'tone';

//GLOBAL VARIABLES
let isPlaying = false;

//SYNTH SETUP
const synth = new Tone.Synth();//create a new synth to play back sounds

synth.toMaster();//connect synth to master output so it can be heard
//these can be combined as follows:
  // const synth = new Tone.Synth().toMaster();
const pattern = new Tone.Pattern(
  function(time, note) {
    synth.triggerAttackRelease(note, '16n');
  },
  [
    'C3', 'D3', 'E3', 'G3', 'C4', 'D4', 'E4', 'G4',
    'C5', 'D5', 'E5', 'G5', 'C6', 'D6', 'E6', 'G6', 'C7' ],
  "upDown"
);

pattern.playbackRate = 2;

//set the pattern to start at the beginning of the Transport timeline
pattern.start('0:0:0');
Tone.Transport.bpm.value = 180;

const togglePlayback = function() {
  if (isPlaying) {
    console.log('stop playback');
    Tone.Transport.stop();
    pattern.index = 0;
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
