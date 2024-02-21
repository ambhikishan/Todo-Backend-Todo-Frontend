const express = require("express");
const bodyParser = require("body-parser");
const { createTodo} = require("./types")
const {Todos} = require("./db")
const cors = require('cors');

const corsOption = {
    origin: ['http://localhost:3000'],
};


app = express();


app.use(cors(corsOption));
//if you want in every domain then
app.use(cors())


app.use(bodyParser.urlencoded({extended:true}))

app.post("/",async(req,res)=>{
    var createPlayLoad =req.body;
    console.log(req.body)
    var response = createTodo.safeParse(createPlayLoad);
    console.log(response)
    if(!response.success){
        res.send("invalid inputs")
        return;
    }
    var tod =  await Todos.create(response.data);
    
    
    res.send("todos list created "+tod.id +" "+tod.title)
})

app.get("/", (req,res)=>{
      Todos.find().then((allTodos)=>{res.send(allTodos)})
    
})

app.put("/",(req,res)=>{})

app.listen(3000,()=>{console.log("Servver started on port 3000")})