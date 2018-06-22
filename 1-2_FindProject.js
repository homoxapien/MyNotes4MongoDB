var mongo = require('mongodb').MongoClient;
mongo.connect('mongodb://localhost:27017', function(err, client){
    if (err){
        console.error(err);
    }else{
        var db = client.db('learnyoumongo');
        var parrots = db.collection('parrots');
        //the stdout of the following code still contained _id argument...
        //parrots.find({age: {$gt: +process.argv[2]}}, 
        //{name: 1, age: 1, _id: 0}).toArray(function(err, documents){
        //    if(err){
        //            console.error(err);
        //    }else{
        //            console.log(documents);
        //    }
        //});
        //}
        parrots.find().toArray(function(err, documents){
            if(err){
                console.error(err);
            }else{
                var result = [];
                for(var d of documents){
                    if(d.age > parseInt(process.argv[2])){
                        result.push({name: d.name, age: d.age});
                    }
                }
                console.log(result);
            }
        });
    }
    client.close()
});
