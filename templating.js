var _ = require("lodash");

var worker = function(user) {
  return _.template("Hello <%= user.name %> (logins: <%= user.login.length %>)")({user: user});
}

module.exports = worker;
