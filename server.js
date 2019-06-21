const express = require('express');
const app = express();

path = require('path');

const baseDir = `${__dirname}`;
app.use(express.static(`${baseDir}`))
app.get('/', (req,res) => res.sendFile('resources/pages/index.html' , { root : `${baseDir}` }))
app.get('*', (req,res) => { res.redirect(`/?url=${req.url}`)})
app.listen(process.env.PORT || 3000, () => console.log(`Servidor subiu com sucesso em ${process.env.PORT || 3000}`));

