import * as sqlite3 from "sqlite3";

const dbname = "mspr.sqlite";
const db = new sqlite3.Database(dbname, (err) => {
  if (err) {
    throw err;
  }
  console.log("Connecté à", dbname);
});

export default db;
