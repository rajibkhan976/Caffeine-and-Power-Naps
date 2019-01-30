$(document).ready(function(){
  var numberInput = "";

  $('.calc-number').click(function () {
    numberInput += $(this).val();
    if (numberInput == '0') {
      numberInput = "";
      $('#input').val();
    } else {
      if (numberInput.length < 11) {
        $('#input').val(numberInput);
      } else {
        alert("Sorry, the calculator can only handle 10 digits or less.");
      }
    }
  });

  //Decimal function (story 5)
  $('.decimal').click(function() {
    numberInput += $(this).val();
    if (numberInput == '.' ) {
      numberInput = "0."
    } else {
      $('#input').val(numberInput);
    };
  });

});
