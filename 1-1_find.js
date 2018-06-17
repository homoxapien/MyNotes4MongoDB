var mongo = require('mongodb').MongoClient;
mongo.connect('mongodb://localhost:27017', function(err, client){
    if (err){
        console.error(err);
    }else{
        var db = client.db('learnyoumongo');
        var parrots = db.collection('parrots');
        //the plus sign below is probably to convert process.argv[2] to number
        parrots.find({age: {$gt: +process.argv[2]}}).toArray(function(err, documents){
            if(err){
                console.error(err);
            }else{
                //if(documents.age > parseInt(process.argv[2])){
                //    console.log(documents);
                //}
                console.log(documents)
            }
        });
    }
    client.close()
});
//For mongodb 3.0, we now get a client object containing the db object.
//As a result, we finish executing by client.close() instead of db.close()
