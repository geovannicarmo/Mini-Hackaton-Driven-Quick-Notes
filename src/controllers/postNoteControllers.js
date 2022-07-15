import { db, objectId } from "../dbs/mongo.js"

export async function postNote(req, res){


 const note= req.body

  const request = await db.collection("notes").insertOne({note})
console.log(request)
 
 res.send("foi")
}