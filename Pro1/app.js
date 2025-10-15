//app.js
const express = require('express')
const path = require('path')

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname,'public')));

app.get('/api/data', (req,res) =>{
    res.json({
        message:'This a Sample message'
    })
})

app.get('/',(req,res) =>{
    res.sendFile(path.join(__dirname,'public','index.html'));
})

app.listen(port,()=>{
    console.log(`Welcome to My server and it is running on http://localhost:${port}`);
});