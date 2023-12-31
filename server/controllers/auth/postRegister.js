const User= require('../../models/user.model');
const bcrypt=require('bcryptjs')
const jwt = require('jsonwebtoken');
const postRegister=  async(req,res)=>{
try {
    const {username, mail, password} = req.body;
    // check if user exists

    const userExists= await User.exists({mail:mail});
    if (userExists) {
        return res.status(409).send("E-mail already in use");
    }
    //n encrypt password

    const encryptedPassword=  await bcrypt.hash(password,10);
     // create user document and save it
     const user= await User.create({
        username,
        mail:mail.toLowerCase(),
        password:encryptedPassword
     });

     // create JWT token

     const token= jwt.sign({
        userId:user._id,
        mail 
     },
     process.env.TOKEN_KEY,
     {
        expiresIn:'24h',
     }
     );

     res.status(201).json({
        userDetails:{
             id: user._id,
            mail: user.mail,
            token:token,
            username:user.username

        }
     })
} catch (error) {
    return res.status(500).send("Error occures. Please try again")
}
};


module.exports=postRegister;

