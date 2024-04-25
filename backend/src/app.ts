import { config } from 'dotenv';
import express from 'express'
config();

const app = express();

app.get("/", (req, res)=>{
  res.json({
    greet: "Hi There!"
  })
});

export default app;