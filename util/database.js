const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
    MongoClient.connect('mongodb+srv://harrygothold1:nodecomplete@cluster0-5xaq4.mongodb.net/shop?retryWrites=true', {useNewUrlParser: true}).then(client => {
        console.log('Connected to DB');
        _db = client.db();
        callback();
    })
    .catch(err => {
        console.log(err);
        throw err;
    });   
}

const getDb = () => {
    if (_db) {
        return _db;
    }
    throw 'No database found!';
}


exports.mongoConnect = mongoConnect;
exports.getDb = getDb;