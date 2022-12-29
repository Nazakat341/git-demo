const express = require('express');

const app = express();


app.get('/',(req,res)=>{
    res.status(200).send('Home page');
})


const PORT = 5000;
app.listen(PORT,()=>{
    console.log(`Listening of port ${PORT}.....`);
})