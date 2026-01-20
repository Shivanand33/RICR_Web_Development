import User from '../models/userModel.js';
import bcrypt from 'bcrypt';

export const UserRegister = async (req, res, next) =>{
    try {
        //accpect and destructer data
        const{fullName, email, mobileNumber, password, gender, country}=req.body;
        if(!fullName || !email || !mobileNumber || !password || !gender || !country){
            const error = new Error("All feild is required");
            error.statusCode= 400;
            return next(error);
        }
        console.log({fullName, email, mobileNumber, password, gender, country});

        //cheak duplicate user before registation
        const existingUser = await User.findOne({email});
        if(existingUser){
            const error = new Error("Email alerdy register");
            error.statusCode=409;
            return next(error)
        }
      //encrypt,hashing password
      const salt = await bcrypt.genSalt(10);
      const hashPassword = await bcrypt.hash(password, salt);

      //save data database

      const newuser = await User.create({
        fullName,
        email,
        mobileNumber,
        password: hashPassword,
        gender,
        country,
      });
      
      //send req to frontend //Seccessfull data✅
      console.log(newuser);

      res.status(201).json({message: "Registation seccessfull"});
      

        
        
    } catch (error) {
        next(error)
    }

};