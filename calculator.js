$(document).ready(function() {
  var screenInput = "";
  var operatorInput = "";
  var total = "";
  var exponentCharOne = "";
  var exponentCharTwo = "";

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
    if (operatorInput != "" && screenInput != "" && screenInput.charAt(screenInput.length - 1) != "/") {
      screenInput += operatorInput;
      $('#input').val(screenInput);
    }
  });

  //story 4: calculating numbers and showing error message
  $('.total').click(function() {
    if (operatorInput != "" && screenInput != "" && !screenInput.includes("**" || "")) {
      try {
        total = eval(screenInput);
        console.log(total);
        $('#result').val(total);
      } catch (error) {
        $('#result').val("ERROR");
      }
      //story 10: exponent calculation
      if (screenInput.includes("^")) {
        exponentCharOne = screenInput.charAt(0);
        console.log(exponentCharOne);
        exponentCharTwo = screenInput.charAt(2);
        console.log(exponentCharTwo);
        var exponentResult = exponentCharOne;
        for (var c = 1; c < parseInt(exponentCharTwo); c++) {
          var exponentCal = exponentResult * exponentCharOne;
          exponentResult = exponentCal;
        }
        $('#result').val(exponentResult);
      }
    } else {
      $('#result').val("ERROR");
    }
  });

  //story 5: decimal button is clickable, also automatically adds 0 before ".", if no other number has been clicked.
  $('.decimal').click(function() {
    operatorInput = $(this).val();
    var lastChar = screenInput.charAt(screenInput.length - 1);
    if (screenInput == "" && operatorInput == ".") {
      screenInput = "0.";
    } else if (operatorInput != "" && screenInput != "" && lastChar != ".") {
      var isNumber = checkIfNumber(lastChar);
      if (!isNumber) {
        var decimalNumTwo = "0" + operatorInput;
        screenInput += decimalNumTwo;
      } else {
        screenInput += operatorInput;
      } $('#input').val(screenInput);
    };
  });

  //Function to check if the input is a number or not (need it for story5)
  function checkIfNumber (input) {
    switch(input) {
      case "*":
      case "+":
      case "-":
      case "/":
        return false;
      default:
        return true;
    }
  };

  //story_6: button that removes the last character that was clicked on.
  $('.calc-backspace').click(function() {
    var screenInput_length = screenInput.length - 1;
    var newscreenInput = screenInput.slice(0, screenInput_length);
    screenInput = newscreenInput;
    $('#input').val(screenInput);
  });

  //story_7 clear the input and output
  $('#clear').click(function () {
    screenInput = "";
    $('#input').val(screenInput);
    total = "";
    $('#result').val(total);
  });
  //story_10: exponent operator
  $('#exponent').click(function () {
    if (screenInput != "" && !screenInput.includes("^")) {
      var exponentChar = $(this).val();
      screenInput += exponentChar;
      $('#input').val(screenInput);
    }
  });
});
