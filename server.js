var express = require("express");
var app = express();
const { MongoClient } = require("mongodb");
const uri =
  "mongodb+srv://admin:admin@cluster0.ctzja1c.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);
let dbCollection;

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

function dbConnection(collectionName) {
  client.connect((err) => {
    dbCollection = client.db().collection(collectionName);
    if (!err) {
      console.log("DB connected");
      console.log(dbConnection);
    } else {
      console.error(err);
    }
  });
}

app.post("/api/Monkeys", (req, res) => {
  let Monkey = req.body;
  insert(Monkey, (err, result) => {
    if (err) {
      res.json({ statusCode: 400, message: err });
    } else {
      res.json({ statusCode: 200, data: result, message: "Sucessfully Added" });
    }
  });
});

app.get("/api/Monkeys", (req, res) => {
  getAllMonkeys((err, result) => {
    if (err) {
      res.json({ statusCode: 400, message: err });
    } else {
      res.json({ statusCode: 200, data: result, message: "Sucessful" });
    }
  });
});

function insert(Monkey, callback) {
  dbCollection.insertOne(Monkey, callback);
}

function getAllMonkeys(callback) {
  dbCollection.find().toArray(callback);
}

var port = process.env.port || 3000;

app.listen(port, () => {
  console.log("App listening to: " + port);
  dbConnection("Monkeys");
});
