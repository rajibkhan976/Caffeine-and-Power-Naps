$(document).ready(function() {
  var screenInput = "";
  var operatorInput = "";
  var total = "";
  var exponentCharOne = "";
  var exponentCharTwo = "";
  var expresson = "";
  var A = "", B = "", C = "", D = "", E = "";

  //story_2: display numbers (0-9) and controll capacity of the calculator
  $('.calc-number').click(function() {
    screenInput += $(this).val();
    if (screenInput == '0') {
      screenInput = "";
      $('#input').val();
    } else {
      if (screenInput.length < 15) {
        $('#input').val(screenInput);
        expresson = screenInput;
        console.log(expresson);
      } else {
        alert("Sorry, the calculator can only handle 14 digits or less.");
      }
    }
  });

  //story_3: display the operator(+,-,×,÷)
  $('.calc-operator').click(function() {
    operatorInput = $(this).val();
    if (operatorInput != "" && screenInput != "" && screenInput.charAt(screenInput.length - 1) != "/" && screenInput.charAt(screenInput.length - 1) != "(") {
      screenInput += operatorInput;
      $('#input').val(screenInput);
    }
  });

  //story 4: calculating numbers and showing error message
  function calculateTotal() {
    if (operatorInput != "" && screenInput != "" && !screenInput.includes("**" || "")) {
      try {
        total = eval(screenInput);
        console.log(total);
        $('#result').val(total);
      } catch (error) {
        $('#result').val("ERROR");
      }
    } else {
      $('#result').val("ERROR");
    }
    //story 10: exponent calculation
    if (screenInput.includes("^")) {
      if (screenInput.length == 3) {
        exponentCharOne = screenInput.charAt(0);
        console.log(exponentCharOne);
        exponentCharTwo = screenInput.charAt(2);
        console.log(exponentCharTwo);
      } else {
        var exponentIndex = screenInput.indexOf("^");
        var exponentCharOneVal = screenInput.substring(0, exponentIndex);
        if (exponentCharOneVal.includes("**") || exponentCharOneVal.includes("++") || exponentCharOneVal.includes("--")) {
          $('#result').val("ERROR");
          return;
        }
        exponentCharOne = eval(exponentCharOneVal);
        console.log(exponentCharOne);
        var exponentSplit = screenInput.split("^");
        var exponentCharTwoVal = exponentSplit[1];
        if (exponentCharTwoVal.includes("**") || exponentCharTwoVal.includes("++") || exponentCharTwoVal.includes("--")) {
          $('#result').val("ERROR");
          return;
        }
        exponentCharTwo = eval(exponentCharTwoVal);
        console.log(exponentCharTwo);
      }
      var exponentResult = exponentCharOne;
      for (var c = 1; c < parseInt(exponentCharTwo); c++) {
        var exponentCal = exponentResult * exponentCharOne;
        exponentResult = exponentCal;
      }
      $('#result').val(exponentResult);
    }
  }

  $('.total').click(function() {
    calculateTotal();
  });
  //story 5: decimal button is clickable, also automatically adds 0 before ".", if no other number has been clicked.

  function calculateDecimal() {
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
      }
      $('#input').val(screenInput);
    };
  }

  $('.decimal').click(function() {
    operatorInput = $(this).val();
    calculateDecimal();
  });

  //Function to check if the input is a number or not (need it for story5)
  function checkIfNumber(input) {
    switch (input) {
      case "*":
      case "+":
      case "-":
      case "/":
      case "(":
      case ")":
        return false;
      default:
        return true;
    }
  };

  //story_6: button that removes the last character that was clicked on.
  function calculateBackspace() {
    var screenInput_length = screenInput.length - 1;
    var newscreenInput = screenInput.slice(0, screenInput_length);
    screenInput = newscreenInput;
    $('#input').val(screenInput);
  }
  $('.calc-backspace').click(function() {
    calculateBackspace();
  });

  //story_7 clear the input and output
  $('#clear').click(function() {
    screenInput = "";
    $('#input').val(screenInput);
    total = "";
    $('#result').val(total);
  });

  //story_8
  $('.parenthesis-open').click(function() {
    screenInput += $(this).val();
    $('#input').val(screenInput);
  });
  $('.parenthesis-close').click(function() {
    if (screenInput != "" && screenInput.charAt(screenInput.length - 1) != "(" && screenInput.charAt(screenInput.length - 1) != "*" && screenInput.charAt(screenInput.length - 1) != "-" && screenInput.charAt(screenInput.length - 1) != "+" && screenInput.charAt(screenInput.length - 1) != "/" && screenInput.charAt(screenInput.length - 1) != "^") {
      screenInput += $(this).val();
      expresson = screenInput;
      $('#input').val(screenInput);
    }
  });

  //story_10: exponent operator
  $('#exponent').click(function() {
    if (screenInput != "" && !screenInput.includes("^")) {
      var exponentChar = $(this).val();
      screenInput += exponentChar;
      $('#input').val(screenInput);
    }
  });
  //story_9: use the keyboard instead of clicking on the buttons with the mouse.
  var operatorArray = ["+", "-", "*", ".", " ", "=", "/"];
  var operatorkeybordArray = [187, 189, 191, 190, 8, 13, 55];
  var keyboardInput = {};

  for (var i = 0; i < 10; i++) {
    keyboardInput['button' + i] = i;
    keyboardInput['event' + i] = i + 48;
  }

  for (var i = 10; i < 16; i++) {
    keyboardInput['button' + i] = operatorArray[i - 10];
    keyboardInput['event' + i] = operatorkeybordArray[i - 10];
  }
  console.log(keyboardInput);


  function Keyboard(event) {
    var char = event.which || event.keyCode;
    console.log("char=" + char);
    for (var i = 0; i < 17; i++) {

      //console.log(keyboardInput['event' + i]);
      if (char == keyboardInput['event' + i]) {
        if (event.shiftKey && char == 55) {
          operatorInput = "/";
          screenInput += operatorInput;
          //  alert("The SHIFT key was pressed!");
        } else {
          screenInput += keyboardInput['button' + i];
        }
        /*if (!event.shiftKey && char == 55) {
          screenInput = "7";
          //  alert("The SHIFT key was pressed!");
        }*/
        switch (char) {
          case 187:
          case 189:
          case 191:
            operatorInput = keyboardInput['button' + i];
            break;
          case 190:
            operatorInput = keyboardInput['button' + i];
            calculateDecimal()
            break;
          case 8:
            screenInput = screenInput.slice(0, screenInput.length - 1);
            calculateBackspace();
            break;
          case 13:
            screenInput = screenInput.slice(0, screenInput.length - 1);
            calculateTotal();
            break;
        }
        $('#input').val(screenInput);
      }
    }
  }
  $("#input").keydown(function() {
    Keyboard(event);
  });
  //story_12: Storing expression result to A, B, C, D, E and use Store button
  $('.store').click(function () {
    console.log(expresson);
    screenInput = $(this).val();
    $('#input').val(screenInput);
    $('#save'). click(function () {
      if (screenInput == "A") {
        A = expresson;
        console.log(A);
      } else if (screenInput == "B") {
        B = expresson;
        console.log(B);
      } else if (screenInput == "C") {
        C = expresson;
        console.log(C);
      } else if (screenInput == "D") {
        D = expresson;
        console.log(D);
      } else {
        E = expresson;
        console.log(E);
      }
      screenInput = "";
      $('#input').val(screenInput);
    });
  });
});
