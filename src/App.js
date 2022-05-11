const express = require('express')
const mongoose = require('mongoose')
const bp = require('body-parser')
const colisGet = require('./routes/colis/Get')
const colisPost = require('./routes/colis/Post')
const colisDelete = require('./routes/colis/Delete')
const colisPatch = require('./routes/colis/Patch')
const colisGetId = require('./routes/colis/GetId')
const login = require('./routes/users/Login')
const register = require('./routes/users/Register')
const deleteUser = require('./routes/users/DeleteUser')
 
const app = express();
const port = 8080;

mongoose.connect('mongodb://localhost:27017/package', {useNewUrlParser: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connexion à la base OK");
});

app.listen(port, () => {
    console.log('Lancement du server sur le port : ' + port);
});

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))


app.get('/api/colis/user/:idUser', async (req, res) => {
    res.send(await colisGet(req.params.idUser))
})

app.post('/api/colis', async (req, res)  => {
  res.sendStatus(await colisPost(req.body))
})

app.delete('/api/colis/:id', async (req, res)  => {
  res.sendStatus(await colisDelete(req.params.id))
})

app.patch('/api/colis/:id', async (req, res) => {
  res.sendStatus(await colisPatch(req.body, req.params.id))
})

app.get('/api/track/:id', async (req, res) => {
  const colis = await colisGetId(req.params.id)
  if (typeof(colis) === 'number') {
    res.sendStatus(colis)
  } else {
    res.send(colis)
  }
})


app.post('/auth/login', async (req, res) =>{
  let re = await login(req.body)
  res.status(re[0]).send(re[1])
})

app.post('/auth/register', async (req, res) => {
  res.sendStatus(await register(req.body))
})

app.delete('/api/account/:id', async (req, res)  => {
  res.sendStatus(await deleteUser(req.params.id))
})

 
