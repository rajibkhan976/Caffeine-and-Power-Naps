
import calcHistory from '../js/calchistory.js';

var assert	= require('assert');
describe('add row', function () {
  it('adds rows to the history', function () {
    const history = new calcHistory();
    history.addRow("2+3", "5");
    assert.equal(history.list[0].rowInput, "2+3");
    assert.equal(history.list[0].rowResult, "5");
  });
  it('Do not add row if input empty ', function () {
    const history = new calcHistory();
    history.addRow(" ", " ");
    assert.equal(history.list.length, 0);
  });
  it('Return the last 5 elemens in the arry ', function () {
    const history = new calcHistory([1,2,3,4,5,6,7]);
    history.deleteRow();
    assert.deepEqual(history.list, [3,4,5,6,7]);
  });
});
