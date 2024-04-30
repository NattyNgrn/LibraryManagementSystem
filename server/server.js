
import pg from "pg";
import express  from "express";
import cors from "cors";
import bodyParser from "body-parser";

const DB = new pg.Client({
    user: 'me',
    host: 'localhost',
    database: 'LibraryManagement',
    password: 'password',
    port: 5432
});

const app = express();
const port = 8888;

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

DB.connect();

app.get("/", (req, res) => {
    res.json("IT WORKS");
});

app.get("/books", async (req, res) => {
    try {
        const result = await DB.query("SELECT * FROM books");
        console.log(`Got ${result.rowCount} rows of books`);
        res.send(result.rows);
    } catch(error) {
        console.log(error);
        return res.status(400).json({error});
    }
});

app.listen(port, () => console.log(`listening at http://localhost:${port}`));
