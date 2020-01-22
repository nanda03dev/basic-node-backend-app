const responseCtrl = require('../../../utils/responseController')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.login = async(req, res)=>{
    console.log("EEE ",req)
    const token = jwt.sign({id: "111"}, req.app.get('secretKey'), { expiresIn: '1h' });
    console.log("token ",token)
    responseCtrl.sendSuccess(res, {token: token})
}