//így is lehetne futtatni a server-t

/* import mongoose from 'mongoose'
import express from 'express'

const uri = `mongodb+srv://beliczkyzsolt:JFIPi4JowtpTLYO0@animals.thgcw.mongodb.net/animals-db?appName=animals`;
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
  app.get('/api/animals', async (req, res) => {
    try{
      let allAnimals = await getAllAnimals();
      res.status(200).json(allAnimals)
    }catch(e){console.log(e)}
  })

app.listen(5173, () => {console.log("server is running on 5173")}) */