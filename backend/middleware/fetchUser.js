const jwt = require('jsonwebtoken');
const JWT_SECRET = 'mananisagoodb&$oy';
const fetchUser = (req, res, next) => {
    // get  the user from the jwt token and append the user id to request object.
    const token = req.header('auth-token');
    if (!token) {
        res.status(401).json({ error: 'Please authenticate the user using the verified Token' });
    } else {


        try {
            const data = jwt.verify(token, JWT_SECRET); // used for verifying and fetching the data using secret key and find the value of the verified token.
            req.user = data.user; // fetching all the details of the user using the id of the user and sending these details in the form of  the request.
            next(); // after doing these operations passing the function to the next middleware.

        } catch (error) {
            res.status(401).json({ error: 'Invaild token request please try again later.' });

        }
    }

}

module.exports = fetchUser;