import express from 'express';

const app = express();

app.use(express.urlencoded({extended:true}));

app.set('view engine', 'ejs');

app.use(express.static('public'));

const PORT = 3000;

const books = [];

app.get('/', (req,res) =>
{
    res.render('home');
});

app.post('/summary', (req, res) =>
{
    const book = {
        title: req.body.title,
        comments: req.body.comments,
        ratings: req.body.ratings
    }

    // const err = [];

    // if(book.title.trim() === "")
    // {
    //     err.push('must have a title');
    // }

    // if(err.length !== 0)
    // {
    //     // return err;
    //     res.render('summary', err);
    // }

    console.log(book);
    books.push(book);

    res.render('summary', {books});
});

app.listen(PORT, () => 
{
    console.log(`Server is running at http://localhost:${PORT}`);
});