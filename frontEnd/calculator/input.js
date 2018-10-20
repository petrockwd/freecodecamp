/****************************
****** number clicks ******
****************************/

$('#zero').click(function() {
  zeroInputCheck();
  $('#input').append('0');
});

$('#one').click(function() {
  zeroInputCheck();
  $('#input').append('1');
});

$('#two').click(function() {
  zeroInputCheck();
  $('#input').append('2');
});

$('#three').click(function() {
  zeroInputCheck();
  $('#input').append('3');
});

$('#four').click(function() {
  zeroInputCheck();
  $('#input').append('4');
});

$('#five').click(function() {
  zeroInputCheck();
  $('#input').append('5');
});

$('#six').click(function() {
  zeroInputCheck();
  $('#input').append('6');
});

$('#seven').click(function() {
  zeroInputCheck();
  $('#input').append('7');
});

$('#eight').click(function() {
  zeroInputCheck();
  $('#input').append('8');
});

$('#nine').click(function() {
  zeroInputCheck();
  $('#input').append('9');
});

$('#decimal').click(function() {
  zeroInputCheck();
  $('#input').append('.');
});

/****************************
*** basic function clicks ***
****************************/
$('#C').click(function() {
  $('#display').empty();
  $('#input').empty();
  $('#input').append('0');
});

$('#CE').click(function() {
  $('#input').empty();
  $('#input').append('0');
});

$('#back').click(function() {

});

$('#plus').click(function() {
  zeroInputCheck2();
  let inputText = $('#input').text();
  $('#display').append(`${inputText} + `);
  $('#input').empty();
  $('#input').append('0');
});

$('#minus').click(function() {
  zeroInputCheck2();
  let inputText = $('#input').text();
  $('#display').append(`${inputText} - `);
  $('#input').empty();
  $('#input').append('0');
});

$('#divide').click(function() {
  zeroInputCheck2();
  let inputText = $('#input').text();
  $('#display').append(`${inputText} / `);
  $('#input').empty();
  $('#input').append('0');
});

$('#multiply').click(function() {
  zeroInputCheck2();
  let inputText = $('#input').text();
  $('#display').append(`${inputText} * `);
  $('#input').empty();
  $('#input').append('0');
});
