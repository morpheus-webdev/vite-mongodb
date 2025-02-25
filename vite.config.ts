/*
import { defineConfig, ViteDevServer } from "vite";
import react from "@vitejs/plugin-react";
import express, { Request, Response } from "express";
import mongoose, { Schema } from "mongoose";
import "dotenv/config";
const uri = `mongodb+srv://beliczkyzsolt:${process.env.VITE_MONGODB_PASSWORD}@animals.thgcw.mongodb.net/animals-db?retryWrites=true&w=majority&appName=animals`;

const app = express();
app.use(express.json());

async function initConnection() {
  try {
    await mongoose.connect(uri);
    await mongoose.connection.db?.admin().command({ ping: 1 });
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
  return animalSchema;
  }
  catch(e){
    console.error(e)
  }
}
app.get("/api", async (req: Request, res: Response) => {
  try {
    
    let animalSchema = await initConnection();
    const animalModel = mongoose.model('animals',animalSchema, 'animals');

    const animals = await animalModel.find();
    res.json(animals);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch animals" });
  }
});

function expressPlugin() {
  return {
    name: "express-plugin",
    configureServer(server: ViteDevServer) {
      server.middlewares.use(app);
    },
  };
}

export default defineConfig({
  plugins: [react(), expressPlugin()],
  server: {
    proxy: {
      "/api": "http://localhost:5173", // Ensure Vite dev server routes requests properly
    },
  },
});
 */

import { defineConfig, ViteDevServer } from "vite";
import react from "@vitejs/plugin-react";
import express, { Request, Response } from "express";
import mongoose, { Schema } from "mongoose";
import "dotenv/config";
import { string } from 'yup';
const uri = `mongodb+srv://beliczkyzsolt:${process.env.VITE_MONGODB_PASSWORD}@animals.thgcw.mongodb.net/middleware-proba?retryWrites=true&w=majority&appName=animals`;

const app = express();
app.use(express.json());

const newUserSchema = new Schema({
  userName: String,
  email: String,
  password: String,
  address: String,
  dob: Date
})

async function initConnection() {
  try {
    await mongoose.connect(uri);
    await mongoose.connection.db?.admin().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    
  return 1;
  }
  catch(e){
    console.error(e)
  }
}
app.get("/api/users", async (req: Request, res: Response) => {
  try {
    
    await initConnection();
    const NewUserModel = mongoose.model('users',newUserSchema, 'users');
    
    const users = await NewUserModel.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

app.post("/api/users", async (req: Request, res: Response) => {
  console.log(req.body)
})

function expressPlugin() {
  return {
    name: "express-plugin",
    configureServer(server: ViteDevServer) {
      server.middlewares.use(app);
    },
  };
}

export default defineConfig({
  plugins: [react(), expressPlugin()],
  server: {
    proxy: {
      "/api": "http://localhost:5173", // Ensure Vite dev server routes requests properly
    },
  },
});
