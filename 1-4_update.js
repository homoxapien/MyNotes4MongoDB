var mongo = require('mongodb').MongoClient;
mongo.connect('mongodb://localhost:27017', function(err, client){
    if (err){
        console.error(err);
    }else{
        var dbName = process.argv[2];
        
        var db = client.db(dbName);
        var users = db.collection('users');
        
        users.update({username: 'tinatime'}, {$set:{age: 40}}, function(err, data){
            if(err){
                console.error(err);
            }else{
                console.log(JSON.stringify(data));//So one can see that .update()
                                                  //returns info about the action in data
            }
        });
    }
    client.close();
});
