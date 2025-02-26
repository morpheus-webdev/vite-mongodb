import { defineConfig, ViteDevServer } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import 'dotenv/config';
import mongoose from 'mongoose'
import express, {Request, Response} from 'express'
const uri = `mongodb+srv://beliczkyzsolt:${process.env.VITE_MONGODB_PASSWORD}@animals.thgcw.mongodb.net/animals-db?appName=animals`;
const app = express()
app.use(express.json())
async function connectToAnimalsDb() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await mongoose.connect(uri)
    // Send a ping to confirm a successful connection
    await mongoose.connection.db?.admin().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch(e) {
    // Ensures that the client will close when you finish/error
    console.log(e)
  }
}
async function getAllAnimals(){
  try{
    await connectToAnimalsDb();
    const animalSchema = new mongoose.Schema({
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
    let allAnimals;
    if(mongoose.modelNames().includes('animal')){
      mongoose.deleteModel('animal')
    }
    let AnimalModel = mongoose.model('animal', animalSchema)//TODO collection?
    allAnimals = await AnimalModel.find({})

    return allAnimals;

  }catch(e){
    console.error(e)
  }
}
app.get('/api/animals', async (req: Request, res: Response) => {
  try{
    let allAnimals = await getAllAnimals();
    res.status(200).json(allAnimals)
  }catch(e){console.log(e)}
})

function expressPlugin() {
  return {
    name: "express-plugin",
    configureServer(server: ViteDevServer) {
      server.middlewares.use(app);
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), expressPlugin()],
  server: {
    proxy: {
      "/api": "http://localhost:5173", // Ensure Vite dev server routes requests properly
    },
  },
})

