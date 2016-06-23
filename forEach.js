var _ = require("lodash");

// function determineSize(population){
//   if (population["population"] > 1.5 ){
//     return "big";
//   } else if (population["population"] > 0.5 ){
//     return "med";
//   } else {
//     return "small";
//   }
// };
//
var population = function(h){
//   return _.reduce(h, function(result, value, key) {
//     console.log("result:")
//     console.log(result);
//     console.log("value:")
//     console.log(value)
//     console.log("key:")
//     console.log(key)
//     value["size"] = determineSize(value);
//     result[key] = value;
//     return {key: result};
//   });

  var sizes = _.map(h, function(value, key){
    var size;
    if (value["population"] > 1.5 ){
      size = "big";
    } else if (value["population"] > 0.5 ){
      size = "med";
    } else {
      size = "small";
    }
    return size;
  });
  var counter = 0;
  return _.forEach(h, function(value, key){
    value["size"] = sizes[counter]
    counter++
  });
};

module.exports = population;
