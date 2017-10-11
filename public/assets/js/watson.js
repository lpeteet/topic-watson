/*

Manage Data > 'DEMO'
collection_id 3612f4ad-2ef0-4aa1-8fa1-1063e6382a88
configuration_id 3f412612-c829-4d66-8fbc-14305de8fbbf
environment_id adc9daff-1060-443b-8062-67a173edb367


    var DiscoveryV1 = require('watson-developer-cloud/discovery/v1');

    var discovery = new DiscoveryV1({
    username: 'd88fd447-4ac9-4a34-8d9e-b5c9d50dd4df',
    password: 'PWfbPt1lomav',
    version_date: '2017-09-01'
    });

    discovery.createEnvironment({
    name: 'my_environment',
    description: 'My environment',
    size: 1
    },
    function (err, response) {
        if (err)
        console.log('error:', err);
        else
        console.log(JSON.stringify(response, null, 2));
    });
*/

var watson = require('watson-developer-cloud');
var DiscoveryV1 = require('watson-developer-cloud/discovery/v1');

/*
{
    "discovery": [
      {
        "name": "watson-news-intelligence-discovery-1507595357524",
        "plan": "lite",
        "credentials": {
          "url": "https://gateway.watsonplatform.net/discovery/api",
          "username": "f4f35a73-b607-443e-b92d-4c7074ef63c6",
          "password": "ykXC7IRUHDVJ"
        }
      }
    ]
  }

};
// MY ENVIRONMENTS:
{
  "environments": [
    {
      "environment_id": "system",
      "name": "Watson System Environment",
      "description": "Shared system data sources",
      "read_only": true
    },
    {
      "environment_id": "adc9daff-1060-443b-8062-67a173edb367",
      "name": "byod",
      "description": "",
      "created": "2017-10-09T22:53:47.224Z",
      "updated": "2017-10-09T22:53:47.224Z",
      "read_only": false
    }
  ]
}
//ALSO: 
adc9daff-1060-443b-8062-67a173edb367 ENVIRONMENT ID

//COLLECTIONS (Cannot Query this yet)
'3612f4ad-2ef0-4aa1-8fa1-1063e6382a88'
*/
  var watsonFunctions = {
    test1: function() {
        console.log("Inside watsonFunctions.test1");
        var fs = require('fs');
        
        var discovery = new DiscoveryV1({
            username: 'd88fd447-4ac9-4a34-8d9e-b5c9d50dd4df',
            password: 'PWfbPt1lomav',
            version_date: '2017-09-01'
        });
        //console.log("discovery", discovery);
        
        //List Environments
/*
       discovery.getEnvironments({}, function(err, data) {
            if (err) {
                console.error("discovery.getEnvironments Error: ", err);
            }  else {
                console.log("discovery.getEnvironments data: ", JSON.stringify(data, null, 2));
        }
        });
*/
        //List Collections
        // discovery.getCollections(('adc9daff-1060-443b-8062-67a173edb367'), function(err, data) {
/*         discovery.getCollections('adc9daff-1060-443b-8062-67a173edb367', function(err, data) {
            if (err) {
                console.error(err);
            } else {
                console.log("getCollections Returned", JSON.stringify(data, null, 2));
            }
        });
        return;
 */
        var myQuery = 'IBM WATSON';
        
        discovery.query({
            // environment_id: 'adc9daff-1060-443b-8062-67a173edb367',
            environment_id: 'system',
            collection_id: 'news',
            // collection_id: '3612f4ad-2ef0-4aa1-8fa1-1063e6382a88',
            query: myQuery
            },
            function(err, data) {
                if (err) {
                    console.error("discovery.Query Error: ", err);
                } else {
                    //console.log("discovery.Query Response: ", JSON.stringify(data, null, 2));
                    var fs = require("fs");
                    
                    // Write out Query Results for Testing (FOR NOW)
                    //DELETE EXISTING CONTENTS (TRUNCATE)
                     fs.truncate("queryOut.json", 0, function() {
                        fs.writeFile("queryOut.json", JSON.stringify(data, null, 2), function (err) {
                            if (err) {
                                console.log("Error Writing to queryOut.json: ", err);
                            } else {
                            // Otherwise, it will print: "movies.txt was updated!"
                            console.log("Wrote Query to queryOut.json!");
                            }
                        }); //WriteFile
                    }); //Truncate

                    //Have Data at this point in results
                    console.log("data.matching_results", data.matching_results);
                    console.log("data.results.length", data.results.length);
                    // var results = jsonData.matching_results.results;
                    // console.log("results", results);

                } //If err
            }
        );
/*
        var file = fs.readFileSync('./public/assets/testing/test-doc1.html');
        //console.log("file", file);
         discovery.addDocument(('adc9daff-1060-443b-8062-67a173edb367', '3612f4ad-2ef0-4aa1-8fa1-1063e6382a88', file),
            function(error, data) {
                if (error) {
                    console.log("error", error);
                    return "Error Adding Discovery Document" + error;
                }
                console.log("presumably No Error from discovery Add Document, data", data);
                console.log("JSON.stringify(data): ", JSON.stringify(data, null, 2));
            }
        )
    */            },
    test2: function() {
        console.log("Inside watsonFunctions.test2");
    }
}

// Export the orm object for the model (watsonController.js).
module.exports = watsonFunctions;


