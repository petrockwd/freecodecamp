/****************************
****** number clicks ******
****************************/

$('#zero').click(() => {input('0');});

$('#one').click(() => {input('1');});

$('#two').click(() => {input('2');});

$('#three').click(() => {input('3');});

$('#four').click(() => {input('4');});

$('#five').click(() => {input('5');});

$('#six').click(() => {input('6');});

$('#seven').click(() => {input('7');});

$('#eight').click(() => {input('8');});

$('#nine').click(() => {input('9');});

$('#decimal').click(() => {input('.');});

/****************************
*** basic function clicks ***
****************************/
$('#C').click(() => {
  $('#display').empty();
  $('#input').empty();
  input('0');
});

$('#CE').click(() => {
  $('#input').empty();
  input('0');
});

$('#plus').click(() => {command('+');});

$('#minus').click(() => {command('-');});

$('#divide').click(() => {command('/');});

$('#multiply').click(() => {command('*');});

/****************************
****** keyboard clicks ******
****************************/

$(() => {
   $(window).keypress((e) => {
       var key = e.which;
       keyboardInput(key);
   });
});
