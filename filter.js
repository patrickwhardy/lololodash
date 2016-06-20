var _ = require("lodash");

var active = function(c){
  return _.filter(c, {'active': true})
};

module.exports = active;
