$(document).ready(function() {
  var screenInput = "";
  var operatorInput = "";
  var total = "";
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
    if (operatorInput != "" && screenInput != "" && screenInput.charAt(screenInput.length -1) != "/") {
      screenInput += operatorInput;
      $('#input').val(screenInput);
    }
  });
  //story_4 Calculate and show error message
  $('.total').click(function(){
    if(operatorInput != "" && screenInput != "" && !screenInput.includes("**"||"")) {
      try {total = eval(screenInput);
      //console.log(total);
      $('#result').val(total)
    }
      catch(error) {
        $('#result').val("ERROR")
      }
    } else {
      $('#result').val("ERROR")
    }
  })
  //story_7 clear the input and output
  $('#clear').click(function () {
    screenInput = "";
    $('#input').val(screenInput);
    total = "";
    $('#result').val(total);
  });
});
