/* check to see if there are zeros in the input*/

function zeroInputCheck() {
  if ($('#input').text() === '0') {
    $('#input').empty();
  }
}

function zeroInputCheck2() {
  if ($('#input').text() === '0') {
    $('#display').append('0');
  }
}
