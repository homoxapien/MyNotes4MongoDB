var mongo = require('mongodb').MongoClient;
mongo.connect('mongodb://localhost:27017', function(err, client){
    if (err){
        console.error(err);
    }else{
        var dbName = process.argv[2];
        var colName = process.argv[3];
        var id = process.argv[4];
        
        var db = client.db(dbName);
        var users = db.collection(colName);
        
        users.remove({_id: id}, function(err, data){
            if(err){
                console.error(err);
            }else{
                console.log(JSON.stringify(data));//So one can see that .remove()
                                                  //returns info about the action in data
            }
        });
    }
    client.close();
});
