const express = require('express');
const res = require('express/lib/response');

const app = express();

app.get('/',(req,res)=>{
    res.status(200).send("My first server with EXPRESS");
});

app.get('/add/:n1/:n2',(req,res)=>{
    let n1 = Number(req.params.n1);
    let n2 = Number(req.params.n2);

    res.status(200).json({add:n1+n2});
});

app.get('/sub/:n1/:n2',(req,res)=>{
    let n1 = Number(req.params.n1);
    let n2 = Number(req.params.n2);
    
    if(isNaN(n1)  || isNaN(n2) )
    {
        res.status(400).json({err:'Se esperan valores númericos'});
    }
    else if (n1 < 0 || n2 < 0)
    {
        res.status(400).json({err:'No se puede restar números menores o iguales a cero (0)'});
    }
    else
    {
        res.status(200).json({sub:n1-n2});
    }
    
});

app.get('/myname',(req,res)=>{
    let name = req.query.name;
    let lastName = req.query.last;

    res.status(200).json({msg: `My name is ${name} ${lastName}`});
});

app.listen(3000,()=>{
    console.log('Server on port: ',3000);
});