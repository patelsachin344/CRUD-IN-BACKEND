const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

async function connect() {
  return new Promise((res, rej) => {
    mongoose.connect("mongodb://127.0.0.1:27017/Dj", (err) => {
      if (err) {
        console.error(err);
        return rej();
      }
    });
    console.log("Connected");
    res();
  });
}

module.exports = connect;
