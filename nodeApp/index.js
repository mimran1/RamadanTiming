const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


var excelDataController = require('./controllers/excelDataController.js');

const app = express();
app.use(bodyParser.json());
app.use(cors({origin: 'http://localhost:4200'}))

//Default html (not needed)
app.get('/', (req,res) =>{
    res.send('<h1>Hello World</h1>');
}); 

app.use('/api', excelDataController);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Web app serverr started on port ${PORT}`));
