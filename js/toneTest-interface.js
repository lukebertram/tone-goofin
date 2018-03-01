import { TestClass } from './../js/toneTest-logic.js';
const testArray = [];
$(document).ready(function(){
  $('#test-form').submit(function(event){
    event.preventDefault();
    const input = $('#test-input').val();
    const freshTest = new TestClass(input);
    $('#test-output').append(`<li>${freshTest.capitalize()}</li>`);
  });
});
