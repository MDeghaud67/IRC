const express = require('express');
const bodyParser = require('body-parser');

const userRoute = require('./routes/user');
const channelRoute = require('./routes/channel');
const chatRoute = require('./routes/chat');



const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://mdeghaud:Deghaud67@irc.315yy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

/*app.use((req, res, next) => {
  res.json({ message: 'Votre requête a bien été reçue !' });
  next(); 
});*/

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use('/api', userRoute, channelRoute, chatRoute);

module.exports = app;