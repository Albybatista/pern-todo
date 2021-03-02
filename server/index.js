const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const { query } = require("./db");

app.use(express.json());
app.use(cors());

//POST/CREATE
app.post("/todos", async (req, res) => {
    try {
        const { description } = res.body;
        const { newTodo } = await pool.query(
            "INSERT INTO newtodotable(description) VALUES($1) RETURNING *", [description]
        );
        res.json(newTodo);
    } catch (err) {
        console.error(err.message);
    }
});


//GET ALL
app.get("/todos", async (req, res) => {
    try {
        const getAll = await pool.query("SELECT * FROM newtodotable");
        res.json(getAll);
    } catch (err) {
        console.error(err.message);
    }
});

//GET ONE TODO - BY ID
app.get("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { getOne } = await pool.query("SELECT FROM newtodotable WHERE $1 = $2", [id]);
        res.json(getOne);
    } catch (err) {
        console.error(err.message);
    }
});

app.put("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { description } = req.body;
        const { updateTodo } = await pool.query("UPDATE $1 WHERE ", [description, id]);
        res.json(updateTodo);
    } catch (err) {
        console.error(err.message);
    }
});

app.delete("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { deleteTodo } = await pool.query("DELETE FROM newtodotable WHERE todo_id = $1", [id]);
        res.json(deleteTodo);
    } catch (err) {
        console.error(err.message);
    }
});


app.listen(5000, () => {
    console.log("server is listening on port 500");
});