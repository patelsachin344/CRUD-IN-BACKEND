const express = require("express");
const connect = require("./Db/connect");
const app = express();

app.use(express.json());

connect()
  .then(() => {
    app.listen(8080, (err) => {
      if (err) throw err;
      console.log("listening on 8080");
    });
  })
  .catch((err) => console.error(err));
