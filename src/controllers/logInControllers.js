import { db } from "../dbs/mongo.js";
import { SchemaLogin } from '../schemas/singUpSchemas.js'
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export async function logIncontrollers(req, res){

    try{

        
        const datasLogIn = req.body 
        const validate = SchemaLogin.validate(datasLogIn, { abortEarly: false })
        
        let messagesError=[];
        if(validate.error){
            validate.error.details.map((i)=>messagesError.push(i.message))
        return res.status(400).send(messagesError)
    }
    
    
    const user = await db.collection('user').findOne({email: datasLogIn.email})
    if(user===null){
        return res.status(400).send('incorrect password or email')
    }
    
    const passwordCorrect =  bcrypt.compareSync(datasLogIn.password ,user.password)
    
    if(!passwordCorrect){
        return res.status(400).send('incorrect password or email')
    }
    
    
    await db.collection("session").deleteOne({
        idUser: user._id
    })
    
    const session = await db.collection('session').insertOne({
        idUser: user._id
        
    })
    
    const sessionId = session.insertedId.toHexString()
    const JWTKEY = process.env.JWTKEY   
   const dadosJWT = sessionId
   const token = jwt.sign(dadosJWT, JWTKEY);
   
   return res.status(201).send(token)
    }catch{

        return res.status(200).send('done')
    }
   
}