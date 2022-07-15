import { db, objectId } from "../dbs/mongo.js"

export async function getNote(req, res){



  const request = await db.collection("notes").find().toArray();

console.log(request)
 
 res.status(200).send(request)
}