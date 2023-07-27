const Account = require('../models/accountModel')
const mongoose = require('mongoose')

const createAccount = async (req, res) => {
    const {username, email, password, credits} = req.body

    try{

        const userExist = await Account.findOne({email: email});
        if(userExist){
            return res
            .status(422)
            .json({error: "Email already exists go to signup"});
        }
        const account = await Account.create({username, email, password, credits})
        res.status(200).json(account)
    }catch(error) {
        res.status(400).json({error: "error.message"})
    }
}

module.exports = {
    createAccount
}