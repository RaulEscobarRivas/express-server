const User = require('../models/user');

exports.signup = function(request, response, next) {
    const email = request.body.email;
    const password = request.body.password;

    console.log(request.body);

    User.findOne({ email: email }, function(err, existingUser){
        if (err) { return next(err); }

        if (existingUser) {
            response.status(422).send({ error: 'Email already in use.'});
        }

        const user = new User({
            email: email,
            password: password
        })

        user.save(function(err) {
            if (err) { return next(err); }

            response.json({ succes: true });
        });
    });
}