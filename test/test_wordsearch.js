const chai = require('chai');
const assert = chai.assert;

const wordSearch = require('../wordsearch.js');

describe("#wordSearch()", function() {
  it("should return false if the word is not present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FRANK');

    assert.isFalse(result);
  });

  it("should return true if the word is present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD');

    assert.isTrue(result);
  });

  it("should return true if the word is present and backwards", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['D', 'L', 'E', 'F', 'N', 'I', 'E', 'S'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD');

    assert.isTrue(result);
  });

  it("should return true if the word is vertical", function() {
    const result = wordSearch([
      ['A', 'S', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'H', 'W', 'B', 'H', 'Z', 'D'],
      ['Y', 'I', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'N', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'F', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'E', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'L', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD');

    assert.isTrue(result);
  });

  it("should return true if the word is vertical and backwards", function() {
    const result = wordSearch([
      ['A', 'C', 'F', 'Q', 'U', 'D', 'A', 'L'],
      ['S', 'H', 'W', 'B', 'H', 'L', 'Z', 'D'],
      ['Y', 'C', 'F', 'Q', 'U', 'E', 'A', 'L'],
      ['H', 'J', 'T', 'E', 'V', 'F', 'R', 'G'],
      ['W', 'C', 'S', 'Y', 'E', 'N', 'R', 'L'],
      ['B', 'R', 'E', 'N', 'E', 'I', 'Y', 'B'],
      ['U', 'T', 'W', 'A', 'P', 'E', 'A', 'I'],
      ['O', 'C', 'A', 'K', 'U', 'S', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD');

    assert.isTrue(result);
  });

  it("should return true if the word is diagonal and backwards", function() {
    const result = wordSearch([
      ['D', 'C', 'F', 'Q', 'U', 'P', 'A', 'L'],
      ['S', 'L', 'W', 'B', 'H', 'D', 'Z', 'D'],
      ['Y', 'C', 'E', 'Q', 'U', 'X', 'A', 'L'],
      ['H', 'J', 'T', 'F', 'V', 'L', 'R', 'G'],
      ['W', 'C', 'S', 'Y', 'N', 'O', 'R', 'L'],
      ['B', 'R', 'E', 'N', 'E', 'I', 'Y', 'B'],
      ['U', 'T', 'W', 'A', 'P', 'V', 'E', 'I'],
      ['O', 'C', 'A', 'K', 'U', 'S', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD');

    assert.isTrue(result);
  });

  it("should return true if the word is diagonal", function() {
    const result = wordSearch([
      ['D', 'C', 'F', 'Q', 'U', 'P', 'A', 'L'],
      ['S', 'L', 'W', 'B', 'H', 'D', 'Z', 'D'],
      ['Y', 'C', 'E', 'Q', 'U', 'X', 'L', 'L'],
      ['H', 'J', 'T', 'F', 'V', 'E', 'R', 'G'],
      ['W', 'C', 'S', 'Y', 'F', 'O', 'R', 'L'],
      ['B', 'R', 'E', 'N', 'E', 'I', 'Y', 'B'],
      ['U', 'T', 'I', 'A', 'P', 'V', 'E', 'I'],
      ['O', 'E', 'A', 'K', 'U', 'S', 'A', 'S'],
      ['S', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD');

    assert.isTrue(result);
  });
});
