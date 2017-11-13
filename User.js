var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/Quiz2";
var db;
MongoClient.connect(url, function (err, database) {
    if (err) throw err;
    db = database;
    console.log("Connected to " + url);
});
function findAll(req, res) {
    //Get data from mongoDB
    var query = {};
    db.collection("User").find(query).toArray(function (err, result) {
       // if (err) throw err;
        console.log(result);
        res.json(result);
    });
}

function search(req,res){
    var fname= req.param('fname');
    var query={first_name: fname};
    db.collection("User").find(query).toArray(function(err, result) {
       // if (err) throw err;
        console.log(result);
        res.json(result);
    });
}

function role(req,res){
    var id = req.params.role;
    var query={role:id};
    db.collection("User").find(query).toArray(function(err, result) {
      //  if (err) throw err;
        console.log(result);
        res.json(result);
    });
}
function expired(req,res){
    var exp=req.param('expired');
    var query = {expired:true};
    db.collection("User").find(query).toArray(function (err, result) {
       // if (err) throw err;
        console.log(result);
        res.json(result);
    });
}

module.exports = {
    findAll: findAll,
    search: search,
    role:role,
    expired:expired
};
