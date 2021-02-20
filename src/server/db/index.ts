declare var module: any;

const sqlite3 = require('sqlite3').verbose()

const DBSOURCE = "db.sqlite"

// @ts-ignore
const db = new sqlite3.Database(DBSOURCE, (err: any) => {
  if (err) {
    // Cannot open database
    console.error(err.message)
    throw err
  }else {
    console.log('Connected to the SQLite database.');
    //db.run(`drop table if exists users`);
    db.run(`CREATE TABLE IF NOT EXISTS users (
        id UUID primary key,
        name TEXT,
        password TEXT
    )`)
  }
});


module.exports = {db};
