const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const routes = require('./src/routes')
const requireDir = require('require-dir')

const app = express();
app.use(express.json());
app.use(cors());


const USER = '';
const PASSWORD = '';


mongoose.connect(`mongodb+srv://${USER}:${PASSWORD}@cluster0-1nmsl.mongodb.net/nodeTeste?retryWrites=true&w=majority`,{
    useNewUrlParser: true,
    useUnifiedTopology: true 
})
requireDir('./src/models')

app.use(routes)

app.listen(3333)