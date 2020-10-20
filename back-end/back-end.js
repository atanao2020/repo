const express = require('express') 
const cors = require('cors')
const multer = require('multer')
const data = require('./data')

const app = express() 
const port = 3000 

const upload = multer()

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(upload.array())
app.use(express.json())


// app.get('/book', (req,res) => {
//     res.send(data.books)
// })

//==================================================================


app.get('/', function(req, res) {
    // We can access the ballPlayers part of the data like this:
    console.log('routes are working?')
    // And show it on the front end like this:
    res.send('hello world')
})

app.get('/albums', function(req, res) {
    // We can access the ballPlayers part of the data like this:
    console.log('Album route hit')
    // And show it on the front end like this:
    res.send(data.books)
})

app.post('/albums', function(req, res) {
    console.log("ALBUM POST route hit")
    console.log(req.body)
    console.log(req.body['book_title'])
    
    albumObject = {
        title: req.body['book_title'],
        author: req.body['book_author'],
        yearPublished: req.body['year_published'],
        edition: req.body['book_edition']
    }
    
    data.books.push(albumObject)
    console.log(data.books)
})


//===================================================================
    


app.listen(port, () => {   
    console.log(`Example app listening at http://localhost:${port}`) 
})