// require('dotenv').config();

const mongoose = require('mongoose'); //connect to Mongoose

const bcrypt = require('bcrypt');//For hashing password
const User=require('../models/mongoose/userSchema');//Replace with model path


const postSignup=async (req,res)=>{
  // const userData=req.body;
  // console.log("postSignuph");
// console.log(userData);


try{
    const {username,email,phone,password} =req.body;
    const newUser=new User({username,email,phone,password});
     await newUser.save();

    //  res.status(201).json({ message: 'User created successfully!' });
  res.redirect('/login');
}
catch(err){
  console.error(err);
  // res.status(500).json({ message: 'Error creating user' });
  res.redirect('/signUp');
}


}
const getSignup=async (req,res)=>{
  res.render('users/signUp');
  console.log("Hi");
  // res.json("success");
}

const getLogin=async (req,res)=>{
  res.render('users/login');
}

// const postLogin=(req,res)=>{
//    const loginData=req.body;
//    console.log(loginData);
//    console.log("hiiiii login");
// }


const userLogin= async (req,res)=>{
  try{
    const {email,password}=req.body;
    const mailExist=await User.findOne({email});
    if(mailExist){
      const passwordDecode=await bcrypt.compare(password,mailExist.password);
       if(passwordDecode){
        res.json("passworddecoded"+passwordDecode);
       }
    }

  }catch(err){
    res.redirect("/login");
  }
};
module.exports ={
  postSignup,
  getSignup,
  getLogin,
  userLogin
     
}