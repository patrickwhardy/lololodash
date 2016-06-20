var _ = require("lodash");

var sorted = function(a){
  return _.sortBy(a, 'quantity').reverse();
};

module.exports = sorted;
