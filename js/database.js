// JavaScript Document

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://wiservglass:<password>@cluster0.hlmmu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
