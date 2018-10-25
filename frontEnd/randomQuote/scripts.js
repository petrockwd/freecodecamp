colors = [{
  one: '#ECB0E1',
  two: '#420039'
},{
  one: '#5DB7DE',
  two: '#416788'
},{
  one: '#F391A0',
  two: '#E26D5C'
},{
  one: '#EEB868',
  two: '#0F7173'
},{
  one: '#FFF',
  two: '#333'
},{
  one: '#EAC435',
  two: '#333'
},{
  one: '#74D3AE',
  two: '#7E846B'
}];
quotes = [{
  quote: 'I\'ll bite your legs off!',
  author: 'Black Knight'
},{
  quote: 'We\'re an anarcho-sydicalist commune.',
  author: 'Dennis'
}, {
  quote: 'There\'s some lovely filth over here.',
  author: 'Dennis\' Mother'
},{
  quote: 'Oh, but you can\'t expect to wield supreme executive power just because some watery tart threw a sword at you.',
  author: 'Dennis'
},{
  quote: 'Ni!',
  author: 'Knight'
}];

$(document).ready(function() {
    randomColor(colors);
    randomQuote(quotes);
});

let currentColor;
function randomColor(clr) {
  let i = currentColor;
  if (i === currentColor) {
    i = Math.floor(Math.random() * 7);
    console.log(i);
  }
  $(':root').css('--random-one', clr[i].one);
  $(':root').css('--random-two', clr[i].two);
  currentColor = i;
}

let currentQuote;
function randomQuote(qts) {
  let i = currentQuote;
  if (i === currentQuote){
    i = Math.floor(Math.random() * 5);
    console.log(i);
   }
  $('#quote').append(`"${qts[i].quote}"`);
  $('#author').append(`- ${qts[i].author}`);
  currentQuote = i;
}

$('#next-click').click(function() {
  $('#quote').empty();
  $('#author').empty();
  randomColor(colors);
  randomQuote(quotes);
});
