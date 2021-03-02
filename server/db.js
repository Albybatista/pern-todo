const Pool = require("pg").Pool


const pool = new Pool({
    host: "localhost",
    server: 5432,
    database: "newtodo"
})

module.exports = pool;