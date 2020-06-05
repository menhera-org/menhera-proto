
const jwt = require('jsonwebtoken');

const authId = 'not-an-id';
const masterKey = 'super-secret';

const token = jwt.sign({id: authId}, masterKey);
console.log(token);
console.log(jwt.verify(token, masterKey)); // throws if fails

