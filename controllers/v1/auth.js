import jwt from "jsonwebtoken";

const users=[
    {
      username:'admin',
      password:'adminPassword'  
    }
]

const accessTokenSecret='thisismysecret';


//login function

export const loginUser=(req,res)=>{
    const {username,password}=req.body;
    const user =users.find(u=>{
        return u.username===username && u.password===password
    })

    if (user){
        const accesstoken=jwt.sign({username:username},accessTokenSecret)
        res.json({accesstoken})
    }else{
        res.send('username or password incorrect')
    }
}


//middleware

export const authJWT=(req,res,next)=>{
    const authHeader=req.headers.authorization;

    if (authHeader){
        const token=authHeader.split(' ')[1];
        jwt.verify(token, accessTokenSecret, (err,user)=>{
            if (err){
                return res.sendStatus(403)
            }
            req.user=user;
            next();

        })
    }else{
        res.sendStatus(401);
    }
}