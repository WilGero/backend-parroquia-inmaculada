import 'dotenv/config' //para las variables de entorno
import express from "express";
const app = express();

app.get("/",(req,res)=>{
    res.json({ok:true});
});
app.listen(5000, () => console.log('servidor activo http://localhost:5000'));