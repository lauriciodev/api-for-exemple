require("dotenv").config()
const express = require("express");
const app = express();



app.get("/", (req,res) =>{
res.send("lauricio o melhor programador do mundo 2023");

}
);

app.listen(process.env.PORT || 3000, () =>{
console.log("servidor rodando!")
});
