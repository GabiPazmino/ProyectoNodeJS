const   crypto = require('crypto');

const  secret = crypto.randomBytes(32).toString('hex');

console.log(secret) //0ca498012c35983212c3a3ae542463de24876370c59f8cf466900762e9726e3d