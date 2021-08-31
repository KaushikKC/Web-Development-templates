const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

function randomColorNumber(){
  return Math.floor(Math.random() * hex.length);
}

$('.btn').click(function() {
  var randomColor = '#'
  for (i=0; i<6; i++) {
    randomColor += hex[randomColorNumber()];
  }

  //
  // const color1 = randomColorNumber();
  // const color2 = randomColorNumber();
  // const color3 = randomColorNumber();
  //
  // var randomColor = `rgb(${color1}, ${color2}, ${color3})`
  // console.log(randomColor);
  $('.Main-title').css('background-color', randomColor);
  $('.color').html(randomColor);
});
