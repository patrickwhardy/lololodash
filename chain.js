var _ = require("lodash");

var chains = function(words) {
  var newWords = _(words).sortBy().map(function(word) {
    return word.toUpperCase() + 'CHAINED';
  });
  return newWords;
};

module.exports = chains
