
  // Initial game set up
function setup () {

    var numberToGuess = ;
    var counter = 0;
    var numbers = [10, 5, 3, 7]; 
    var playerWins = 0;
    var playerLosses = 0;

     // Function to shuffle numbers from images
    function shuffle(a) {
        var j, x, i;
        for (i = a.length; i; i--) {
            j = Math.floor(Math.random() * i);
            x = a[i - 1];
            a[i - 1] = a[j];
            a[j] = x;
        

        shuffle(numbers);
        console.log(numbers);

        var retArr = [numberToGuess, numbers];
        return retArr;

      }
  

  // Function to add images
function loadImages(picArray) {

  var picArray = ["assets/images/gem1.jpeg", "assets/images/gem2.jpg", "assets/images/gem3.jpg", "assets/images/gem4.jpg"];

//    $(document).ready(function() {
//     var $div = $("#picArray");

//     $.each(picArray, function(i, val) {
//         $("<img />").attr("src", val).appendTo($div);
//     });
// });

   $('#number').text(array[0]);

    for (var i=0; i< array[1].length; i++){

      var imageCrystal = $('<img>');

      imageCrystal.attr('data-num', array[0][i]);

      imageCrystal.attr('src', picArray[i]);

      imageCrystal.attr('alt', 'crystals');

      imageCrystal.addClass('crystalImage');

      $('#crystals').append(imageCrystal);
    }


  $( document ).ready(function() {

    var array = setup()

    loadImages(array)
  })
}


  // Function created for when you click on the image you get a random number
  $('.crystalImage').on('click', function(){

      counter = counter + parseInt($(this).data('num'));

    $('#yourNumber').text(counter);

      if (counter == numberToGuess){

        alert('You won!!!!');

        playerWins++;

      }else if( counter > numberToGuess){

        alert('You lost!');
        playerLosses++;
      }
    });
  };





     

    // shuffle(numbers);
    // console.log(numbers);
    // $('#number').text(numberToGuess);
    // for (var i=0; i< numbers.length; i++){
    //   var imageCrystal = $('<img>');
    //   imageCrystal.attr('data-num', numbers[i]);
    //   imageCrystal.attr('src', '/assets/images/gem1');
    //   imageCrystal.attr('alt', 'crystals');
    //   imageCrystal.addClass('crystalImage');
    //   $('#crystals').append(imageCrystal);
    // }



    


  // function gameComplete
  // if (counter.toString() == numberToGuess()) {
  //   playerWins++; // 
  //   alert("You win!");

  //   else if(counter > numberToGuess) {
  //   playerLosses++;   
  //   alert("You lose");
