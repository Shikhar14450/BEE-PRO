// server.js
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const morgan=require('morgan');
const Stock = require('./models/stock')

const app = express();

const dbURI='mongodb+srv://shikhargusain5:test1234@stockkk.oeqro.mongodb.net/?retryWrites=true&w=majority&appName=Stockkk'
mongoose.connect(dbURI)
    .then((result)=>app.listen(4000))
    .catch((err)=> console.log(err));
    

app.set('view engine', 'ejs');



app.use(express.static('public'))
app.use(express.urlencoded({ extended:true }))
app.use(morgan('dev'))


const companies=[ 
    {cname: 'ABC',cprice:'897'},
    {cname: 'EFG',cprice:'456'},
    {cname: 'HIG',cprice:'123'},
    {cname: 'KLM',cprice:'789'},
    {cname: 'NOP',cprice:'654'},
    {cname: 'QRS',cprice:'321'},
]



app.get('/',(req,res)=>{
    res.redirect('/index')
})

app.get('/mrf',(req,res)=>{
    res.render('stockpage',{title:'MRF'});
})

app.get('/jiofin',(req,res)=>{
    res.render('stockpage2',{title:'JioFin'})
})

app.get('/zomato',(req,res)=>{
    res.render('stockpage3',{title:'Zomato'})
})

app.get('/iocl',(req,res)=>{
    res.render('stockpage4',{title:'IOCL'})
})

app.get('/index',(req,res)=>{
    Stock.find()
        .then((result)=>{
            res.render('index',{ title: ' All stocks',sharesbought: result})
        })
        .catch((err)=>{
            console.log(err)
        })
})

app.post('/index',(req,res)=>{
    const stock = new Stock(req.body) 

    stock.save()
        .then((result)=>{
            res.redirect('/index')
        })
        .catch((err)=>{
            console.log(err)
        })
})

app.delete('/index/:id',(req,res)=>{
    const id = req.params.id

    Stock.findByIdAndDelete(id)
        .then(result =>{
            res.json({redirect:'/index'} )
        })
        .catch(err=>{
            console.log(err)
        })
}) 

