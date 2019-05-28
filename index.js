const express= require('express');
const db = require('./data/db.js');
const port = 3333;



const server = express();
server.use(express.json());

server.post('/api/posts', (req,res)=>{
    const body = req.body;
    try{
        error=[];
        if(!body.title || body.title ==="")
            error.push('INVALID request:title is empty');
        if(!body.body || body.body ==="")
            error.push('INVALID request:body is empty');
        if(error.length>0)
            throw error;
        }
        catch(err){
            res.status(400).json({'error':err});
            return;
        }
    console.log(req.query);
    res.status(200).json({'body':body.body, title: body.title});
});

server.listen(port, ()=> {
    console.log(`I am listening on port ${port}`);
});