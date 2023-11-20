const User=require('../models/register')


const controller={
    async login(req,res,next){
        try{
            const email = req.body.email;
            const password = req.body.password;
    
            //reading and checking data
            const usermail = await User.findOne({email:email})
    
            if(usermail.password === password){
                res.status(200).json({message:'Login successul'})
            }else{
                res.send("Invalid Log in detail")
            }         
        }catch(e){
            console.log(e)
        }
    },
    async signup(req,res,next){
        const {firstname,lastname,email,password,confirmPass}=req.body
        const existingUser=await User.findOne({email:email})
        if(existingUser){
            return res.status(400).json({message:"User already exists"})
        }

        if(password==confirmPass){
            const user=await User.create({firstname,lastname,email,password,confirmPass})
            res.send(user);
        }
    }
}

module.exports=controller