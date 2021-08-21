const UserData = require("../models/userData");


exports.getAllUsers = (req,res,next)=>{
    UserData.find().exec((err,userData)=>{
        if(err)
        {
            return res.status(500).json({
                error: "Something went wrong"
            })
        }

        else
            return res.status(200).json({
                data: userData  
            })

    })
}

exports.editUserData = (req,res,next)=>{
    const newuserData = req.body;
    UserData.findByIdAndUpdate(
        {_id:req.body._id},
        {$set:req.body},
        {new:true, useFindAndModify: false},
        (err,user)=>{
            if(err){
                console.log("err");
                return res.status(400).json({
                    error :"update was not successfull on DataBase"
                })
            }
            return res.status(200).json({
                "user" :user
            })
        })
}