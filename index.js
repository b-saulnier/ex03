import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv'

const app = express();
const port = process.env.PORT || 5000;


app.get('/', (req, res) => {
    res.send('Hello world!');
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });