const express = require("express");

const app = express();
const port = 3000;
const fs = require('fs');
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Welcome to my server!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
app.post("/book", (req, res)=>  {
    const title = req.body.book;
    const book= findBookByTitle(title);
    if(book){
        return res.status(200).send({book})
    } else {
        return res.status(403).send({message: "Not Found"})
    }
})  


const findBookByTitle = (title) => {
    const data = fs.readFileSync('database.json', 'utf-8');
    const books = JSON.parse(data);
    return books.find(book => book.title === title);
  };