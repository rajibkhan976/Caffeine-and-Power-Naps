import calculateDecimal from "../utils.js";
import assert from 'assert';
describe ('calculateDecimal', function() {
  it('places a zero before decimal without another number', function() {
    assert.equal(calculateDecimal("","."), '0.');
  });
});
