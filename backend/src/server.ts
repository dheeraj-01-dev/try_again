import { log } from "console";
import app from "./app.js";


const port = process.env.PORT;


app.listen(port, ()=>{
  log(`server started on http://localhost:${port}`)
})