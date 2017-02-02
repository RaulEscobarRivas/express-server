const User = require('../models/user');

exports.signup = function(request, response, next) {
    const email = request.body.email;
    const password = request.body.password;

    User.findOne({ email: email }, function(err, existingUser){

    });
}