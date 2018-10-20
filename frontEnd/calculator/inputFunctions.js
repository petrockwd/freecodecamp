/* check to see if there are zeros in the input*/

function zeroInputCheck() {
  if ($('#input').text() === '0') {
    $('#input').empty();
  }
}

function zeroCommandCheck() {
  if ($('#input').text() === '0') {
    $('#display').append('0');
  }
}

const inputArr = [];
const cmdArr = [];

let runningTotal = 0;

function command(cmd) {

  let inputText = $('#input').text();

  $('#display').append(`${inputText} ${cmd} `);
  $('#input').empty();

  switch(cmd) {
    case '+':
      runningTotal += parseFloat(inputText);
      break;
    case '-':
      runningTotal -= parseFloat(inputText);
      break;
    case '*':
      runningTotal *= parseFloat(inputText);
      break;
    case "/":
      runningTotal /= parseFloat(inputText);
      break;
      }

  input(runningTotal);


  /***** For BEDMAS stuff below *****/
  // get input text and cmd and add to arrays
  inputArr.push(parseFloat(inputText));
  cmdArr.push(cmd);
  //test arrays
  console.log(inputArr);
  console.log(cmdArr);
}

function input(number) {
  zeroInputCheck();
  $('#input').empty();
  $('#input').append(number);
}

function keyboardInput(key) {
  switch(key) {
    case 42:
      command('*');
      break;
    case 43:
      command('+');
      break;
    case 45:
      command('-');
      break;
    case 46:
      input('.');
      break;
    case 47:
      command('/');
      break;
    case 48:
      input('0');
      break;
    case 49:
      input('1');
      break;
    case 50:
      input('2');
      break;
    case 51:
      input('3');
      break;
    case 52:
      input('4');
      break;
    case 53:
      input('5');
      break;
    case 54:
      input('6');
      break;
    case 55:
      input('7');
      break;
    case 56:
      input('8');
      break;
    case 57:
      input('9');
      break;
  }

}
