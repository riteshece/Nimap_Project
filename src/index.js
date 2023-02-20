const express=require('express')
const body_parser=require('body-parser')
const mongoose=require('mongoose')
const route=require('./routes')
const app=express()

app.use(body_parser.json())
app.use(body_parser.urlencoded({extended:true}))

mongoose.connect('mongodb+srv://ratneshnath:RATNESh99@cluster0.x9keh.mongodb.net/Project-3?retryWrites=true&w=majority',{
    useNewUrlParser:true
})
  .then(()=>console.log('Database is Connected Now'))
  .catch((err)=>console.log(err))

app.use('/',route)

app.listen((process.env.port||3000),function(){
    console.log('Server is running on port ',(process.env.port||3000))
})