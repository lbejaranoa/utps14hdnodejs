const express= require('express');
const app=express();
app.use(express.json());

let productos=[
    {
        id:1,
        nombre:'Laptop',
        precio:2500
    }
];

app.get('/productos',(req,res)=>{
    res.json(productos);
});

app.post('/productos',(req,res)=>{
    const {nombre,precio}=req.body;
    if(!nombre||!precio){
        return res.status(400).json({
            error:'El nombre y precio son obligatorios'
        })
    }
    const producto={
        id:productos.length+1,
        nombre,
        precio
    }
    productos.push(producto);
    res.status(201).json(producto);
});

module.exports=app;