$(document).ready(function() {
  var screenInput = "";
  var operatorInput = "";

  //story_2: display numbers (0-9) and controll capacity of the calculator
  $('.calc-number').click(function() {
    screenInput += $(this).val();
    if (screenInput == '0') {
      screenInput = "";
      $('#input').val();
    } else {
      if (screenInput.length < 15) {
        $('#input').val(screenInput);
      } else {
        alert("Sorry, the calculator can only handle 14 digits or less.");
      }
    }
  });

  //story_3: display the operator(+,-,×,÷)
  $('.calc-operator').click(function() {
    operatorInput = $(this).val();
    if (operatorInput != "" && screenInput != "") {
      screenInput += operatorInput;
      $('#input').val(screenInput);
    }
  });

  //story_6: button that removes the last character that was clicked on.
  $('.calc-backspace').click(function() {
    var screenInput_length = screenInput.length - 1;
    var newscreenInput = screenInput.slice(0, screenInput_length);
    screenInput = newscreenInput;
    $('#input').val(screenInput);
  });

});