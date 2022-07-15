import { db } from "../dbs/mongo.js";
import { SchemaSingup } from '../schemas/singUpSchemas.js'
import bcrypt from 'bcrypt';

export async function singUpControllers(req, res){

    const datasSingUp = req.body 
    const validate = SchemaSingup.validate(datasSingUp, { abortEarly: false })

    let messagesError=[];
    if(validate.error){
        validate.error.details.map((i)=>messagesError.push(i.message))
        return res.status(400).send(messagesError)
    }

    const registeredEmail = await db.collection('user').findOne({email: datasSingUp.email})
    if(registeredEmail!==null){
        return res.status(400).send('registered Email')
    }

    const passwordcrypt = bcrypt.hashSync(datasSingUp.password, 10)

    await db.collection('user').insertOne({
        name: datasSingUp.name,
        email: datasSingUp.email,
        password: passwordcrypt 
    })
    res.status(201).send("done")
}