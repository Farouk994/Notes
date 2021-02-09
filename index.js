const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

const PORT = 3000;

app.set('view engine', 'ejs');

app.get('/', function(req,res) {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get('/notes', function(req,res) {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get('/api/blog', (req,res)=>{
    res.sendFile(path.join(__dirname, "./public/blog.html"));
});

// app.get('/about', function(req,res) {
//     res.sendFile(path.join(__dirname, "./index.html"));
// });

app.delete('api/notes/:id', (req,res)=> {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.use((req,res) => {
    res.status(404).sendFile(path.join(__dirname, "./404.html"));
})

app.listen(PORT, () => {
    console.log("Listening to Port 3000...")
});

