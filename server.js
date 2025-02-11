import express from 'express'
import { createServer as createViteServer } from 'vite'
import 'dotenv/config'
import mongoose, { Schema } from 'mongoose'

const uri = `mongodb+srv://beliczkyzsolt:${process.env.VITE_MONGODB_PASSWORD}@animals.thgcw.mongodb.net/animals-db?retryWrites=true&w=majority&appName=animals`;

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

async function initConnection() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    const animalSchema = new Schema({
      class: String, 
      biome: String, 
      name: String, 
      animalia: String, 
      legs: Number, 
      isPredator: Boolean, 
      img: String, 
      url: String, 
      like: Number, 
      dislike: Number
  })
  }
  catch(e){
    console.error(e)
  }
}

async function getAllAnimals(){
  const animalModel = mongoose.model('animals',animalSchema, 'animals');
  return animalModel.find({$or:[{biome: "Forest"},{ biome: "Desert"}]})
}

export async function createServer() {
  console.log('createServer is called');
    const app = express();
    await initConnection()
    app.get('/', async (req, res)=> {
      let allAnimals = await getAllAnimals();
      res.send(allAnimals);
    })
    app.listen(8000)
}

createServer()
