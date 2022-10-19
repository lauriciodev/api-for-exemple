require("dotenv").config()
const express = require("express");
const app = express();

const carros = [
  {modelo:"hillux",marca:"toyota",ano:2022},
  {modelo:"gol",marca:"ford",ano:2021},
  {modelo:"fiesta",marca:"fiat",ano:2012},
  {modelo:"uno",marca:"fiat",ano:2012}
];



app.get("/", (req,res) =>{
res.json(carros)

}
);

app.listen(process.env.PORT || 3000, () =>{
console.log("servidor rodando!")
});
