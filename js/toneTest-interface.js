import Tone from 'tone';

//GLOBAL VARIABLES
let isPlaying = false;

//SYNTH SETUP
const synth = new Tone.Synth();//create a new synth to play back sounds

synth.toMaster();//connect synth to master output so it can be heard

const pattern = new Tone.Pattern(
  function(time, note) {
    synth.triggerAttackRelease(note, '16n');
  },
  ['C4', 'Eb4', 'G4', 'A4', 'Bb4', 'A4', 'G4', 'Eb4']
);

pattern.start(0);

const togglePlayback = function() {
  if (isPlaying) {
    console.log('stop playback');
    Tone.Transport.stop();
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
