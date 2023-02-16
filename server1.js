const express = require('express');
const port = 3000;
const app = express();
const cors=require('cors')



app.use(cors('*'))

app.use(

    express.urlencoded({
        extended: true
    })


)
app.use(

    express.json({

        type:"*/*"
    })


)


app.get('/', (request, response) => {
    console.log(`URL: ${request.url}`);
    response.send('Hello, Server!');
});



const server = app.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);
    console.log(`Server listening on port ${server.address().port}`);
});