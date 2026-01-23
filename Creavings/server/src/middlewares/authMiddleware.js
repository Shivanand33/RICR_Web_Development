import jwt from 'jsonwebtoken';
import User from "../models/userModel.js"

export const Protect = async (req, res, next)=>{
    try {
        const biscut = req.cookies.parleG
        console.log("Tpken recived is cookies:", biscut);
         
        const tea = jwt.verify(biscut, prompt.env.JWT_SECRET);
        console.log(tea);
         if(!tea){
            const error = new Error("Unauthrozied! Plese login Again");
            error.statusCode = 401;
            next(error);
        }

        const verifiedUser = await findById(tea.id);
        if(!verifiedUser){
            const error = new Error("Unauthrozied! Plese login Again");
            error.statusCode = 401;
          return  next(error);
        }
        
        req.user = verifiedUser;
        


        next();
    } catch (error) {
        next(error);
    }
};