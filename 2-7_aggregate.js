var mongo = require('mongodb').MongoClient;
mongo.connect('mongodb://localhost:27017', function(err, client){
    if (err){
        console.error(err);
    }else{
        var dbName = 'learnyoumongo';
        var colName = 'prices';
        var certainSize = process.argv[2];
        
        var db = client.db(dbName);
        var col = db.collection(colName);
        
        col.aggregate([{$match: {size: certainSize}}, 
                    {$group: {_id: 'mean', mean: {$avg: '$price'}}}]).toArray( function(err, result){
            if(err){
                console.error(err);
            }else{
                if(!result.length){
                    throw new Error('No result found');
                }//In case there are no data under the criteria of certainSize
                console.log(Number(result[0].mean).toFixed(2));
            }
        });
    }
    client.close();
});


