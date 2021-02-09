const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

// const PORT = 3000;

// app.set('view engine', 'ejs');


app.get('/', function(req,res) {
    res.sendFile(path.join(__dirname, "./views/index.html"));
    // res.render('index');
});

// app.get('/notes', function(req,res) {
//     res.sendFile(path.join(__dirname, "./views/index.html"));
// });

// app.get('/about', (req,res)=>{
    // res.sendFile(path.join(__dirname, "./views/blog.html"));
    // res.render('about');
// });

app.get('/blog/create', (req,res)=>{
    res.sendFile(path.join(__dirname, "./views/blog.html"));
    // res.render('blog');
});

// app.get('/about', function(req,res) {
//     res.sendFile(path.join(__dirname, "./index.html"));
// });

app.delete('api/notes/:id', (req,res)=> {
    res.sendFile(path.join(__dirname, "./views/index.html"));
});

app.use((req,res) => {
    res.status(404).sendFile(path.join(__dirname, "./views/404.html"));
    // res.status(404).render('404');
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Listening to Port...")
});

