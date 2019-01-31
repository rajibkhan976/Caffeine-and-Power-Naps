$(document).ready(function(){
  var screenInput = "";

  $('.calc-number').click(function () {
    screenInput += $(this).val();
    if (screenInput == '0') {
      screenInput = "";
      $('#input').val();
    } else {
      if (screenInput.length < 11) {
        $('#input').val(screenInput);
      } else {
        alert("Sorry, the calculator can only handle 10 digits or less.");
      }
    }
  });

  //Decimal function (story 5)
  $('.decimal').click(function() {
    screenInput += $(this).val();
    if (screenInput == '.' ) {
      screenInput = "0."
    } else {
      $('#input').val(screenInput);
    }
  });

});
