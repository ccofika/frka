const Account = require('../models/accountModel')
const mongoose = require('mongoose')

const createAccount = async (req, res) => {
    const {email, password} = req.body

    try{
        const userExist = await Account.findOne({email: email}, {password: password});
        if(!userExist){
            return res
            .status(422)
            .json({error: "Email or password are not correct"});
        }
        if(userExist){
            const account = await Account.findOne(userExist[0])
            return res
            .status(200)
            .json(account)
        }
    }catch(error) {
        res.status(400).json({error: "error.message"})
    }
}

module.exports = {
    createAccount
}