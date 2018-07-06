var mongo = require('mongodb').MongoClient;
mongo.connect('mongodb://localhost:27017', function(err, client){
    if (err){
        console.error(err);
    }else{
        var db = client.db('learnyoumongo');
        var docs = db.collection('docs');
        var NewData = {firstName: process.argv[2], 
                    lastName: process.argv[3]};
        //The declaration of JSON is optional, one can plug it in .insert() directly
        docs.insert(NewData, function(err, data){
            if(err){
                console.error(err);
            }else{
                console.log(JSON.stringify(NewData));
                //console.log(JSON.stringify(data));//this is incorrect
                                                    //then what 'data' is for?
            }
        });
    }
    client.close();
});
