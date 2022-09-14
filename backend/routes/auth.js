const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bycrypt= require('bcrypt');
const jwt= require('jsonwebtoken'); // used for importing the json web token.


// creating a user in the auth by requesting the data from the original user and allows the user to enter into the application.

router.post('/createUser', [
  body('email', 'Enter the valid name').isEmail(),
  body('name', 'The given name is not satisfying the given length.').isLength({ min: 3 }),
  body('password', 'Password must be at least 5 characters').isLength({ min: 5 })
], async (req, res) => {
  // const user= User(req.body);
  // user.save();
  const errors = validationResult(req);
  // if there are errors return the bad request and the errors.
  if (!errors.isEmpty()) {
    return (res.status(400).json({ errors: errors.array() }));
  }
  // check whether  the user exists or not.
  try {

    let user = await User.findOne({ email: req.body.email }); // for fnding the existing user whether the user is available in the database or not and if available then send  the null otherwise send the user as the json object.
    //as it will return the promise then we have to wait until this promise is resolved and then do the further procedure.

    console.log(user); // used for seeing the user data if the given user wtih that id exists.


    if (user) {
      return res.status(400).json({ error: "Sorry a user with this email already exists." }); // if the user is not able to made then we will send the bad request error.
    } else {
      const salt = await bycrypt.genSalt(10); // used for generating the random string which is added to the main password for more protection
      const secpassword= await bycrypt.hash(req.body.password, salt); // creating the hash of  the plain text password used for storing in the database for the protection of the plain text password.
      // code done for creating the new user.
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secpassword,
      })
      const data= {
        user:{
          id:user.id
        }
      }
      const JWT_SECRET= 'mananisagoodb&$oy'; // hashing signature used in the salting mechanism.
      const auth_Token= jwt.sign(data, JWT_SECRET); // used for creating hash version of the user data.

      res.json({auth_Token}); // if the user is made then we will send the user as the response that would show on the screen.
    }
  } catch (error) {
    console.error(error.message); // if the user is not made then we will console the error of the user is not made
  }
  // .then(user => res.json(user))
  // .catch(message => console.log(message));
})


module.exports = router;