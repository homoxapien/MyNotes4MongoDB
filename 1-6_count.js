var mongo = require('mongodb').MongoClient;
mongo.connect('mongodb://localhost:27017', function(err, client){
    if (err){
        console.error(err);
    }else{
        var dbName = 'learnyoumongo';
        var colName = 'parrots';
        var ageLimit = Number(process.argv[2]);
        
        var db = client.db(dbName);
        var col = db.collection(colName);
        
        col.count({age: {$gt: ageLimit}}, function(err, count){
            if(err){
                console.error(err);
            }else{
                console.log(count);
            }
        });
    }
    client.close();
});

