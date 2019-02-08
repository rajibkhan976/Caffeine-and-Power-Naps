var list;
export default class calcHistory {
    constructor(list = []) {
      this.list = list;
    }
    addRow(inputData, resultData) {
      if (inputData != " ") {
        this.list.push({
          rowInput: inputData,
          rowResult: resultData
        });
      }
    }
    getRow() {
      $('#displayHistory').html("");
      // this.list[this.list.length - 1];
      this.list.forEach(function(element) {
        const displayRow = $("<p class='row'></p>");
        $("#displayHistory").prepend(displayRow);
        displayRow.append(element.rowInput + " = ");
        displayRow.append("<br>");
        displayRow.append(element.rowResult);
        displayRow.append("<hr>");
        console.log(element.rowInput);
        console.log(element.rowResult);
      });
    }
    deleteRow() {
      if (this.list.length > 5) {
        var historyChecker = this.list.indexOf(this.list[this.list.length - 5]);
        console.log("historyChecker = " + historyChecker);
        for (var i = 0; i < historyChecker; i++) {
          this.list.shift();
        }
        console.log(this.list);
      }
    }
  }
