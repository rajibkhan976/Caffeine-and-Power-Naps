export default function calculateDecimal(screenInput, operatorInput) {
  var lastChar = screenInput.charAt(screenInput.length - 1);
  if (screenInput == "" && operatorInput == ".") {
    return "0.";
  } else if (operatorInput != "" && screenInput != "" && lastChar != ".") {
    var isNumber = checkIfNumber(lastChar);
    if (!isNumber) {
      var decimalNumTwo = "0" + operatorInput;
      return screenInput + '' + decimalNumTwo;
    } else {
      return screenInput + '' + operatorInput;
    }
  }
}

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
