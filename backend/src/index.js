const express = require('express');
const mongoose = require('mongoose')
const bodyParser=require('body-parser')
const cors=require('cors')
const route = require('./routes/route.js');




const app = express();
app.use(bodyParser.json())
const corsOption={
    origin:"http://localhost:3000",
    credentials:true
}
app.use(cors(corsOption))
mongoose.connect("mongodb+srv://shubham:Q0mHsgCUtVEFowST@cluster0.qhjri.mongodb.net",)
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/', route);


app.listen(process.env.PORT || 3500, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3500))
});