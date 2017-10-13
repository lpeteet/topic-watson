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
    listEnvironments() {
        discovery.getEnvironments({}, function(err, data) {
            if (err) {
                console.error("discovery.getEnvironments Error: ", err);
            }  else {
                console.log("discovery.getEnvironments data: ", JSON.stringify(data, null, 2));
            }
        });
        return;
    },

    listCollections() {
        discovery.getCollections('adc9daff-1060-443b-8062-67a173edb367', function(err, data) {
            if (err) {
                console.error(err);
            } else {
                console.log("getCollections Returned", JSON.stringify(data, null, 2));
            }
        });
    return;
    },

    writeJSONFIle() {
        var fs = require("fs");
        //DELETE EXISTING CONTENTS (TRUNCATE)
        fs.truncate("outputJSON.json", 0, function() {
            fs.writeFile("outputJSON.json", JSON.stringify(outputJSON, null, 2), function (err) {
                if (err) {
                    console.log("Error Writing to outputJSON.json: ", err);
                } else {
                    console.log("Wrote Query to outputJSON.json!");
                }
            }); //WriteFile
        }); //Truncate
    },

    test1: function(limit, searchString, callback) {
        console.log("Inside watsonFunctions.test1");
        
        var discovery = new DiscoveryV1({
            username: 'd88fd447-4ac9-4a34-8d9e-b5c9d50dd4df',
            password: 'PWfbPt1lomav',
            version_date: '2017-09-01'
        });
        //console.log("discovery", discovery);
        var myQuery;
        // var myQuery = 'IBM WATSON';
        // myQuery = "query=bees,return=title,url";
        //myQuery = 'natural_language_query=How do bees fly, count=15';
        myQuery = 'natural_language_query=' + searchString + ", count=" + limit;
        //console.log("myQuery", myQuery);
        // myQuery = {'query': "bees", 'count':10}
        // myQuery = {'query': "Example",'term':"nested(entities).filter(entities.type:Person).term(entities.text)"}
        // myQuery = {"keywords":"(text:bees,relevance>0.9)"};
        // myQuery = {"keywords:(text:IBM Watson)"};
        //FROM WEB

        var outputJSON = [];
        discovery.query({
            // environment_id: 'adc9daff-1060-443b-8062-67a173edb367',
            environment_id: 'system',
            collection_id: 'news',
            // collection_id: '3612f4ad-2ef0-4aa1-8fa1-1063e6382a88',
            query: myQuery,
            aggregations: '[term(enrichedTitle.entities.text,count:20)]'
            // filter: 'language:(english)'
            },
            function(err, data) {
                if (err) {
                    console.error("discovery.Query Error: ", err);
                } else {
                    //Have Data at this point in results
                    console.log("data.matching_results", data.matching_results);
                    console.log("data.results.length", data.results.length);
                    for (var i = 0; ( (i < data.results.length) || (outputJSON.length >= limit)); i++) {
                        var element = data.results[i];
                        // console.log("element", element);
                        if (typeof(element.enriched_title) != "undefined") {
                            if (typeof(element.enriched_title.concepts) != "undefined") {
                                //console.log("element.enriched_title.concepts", element.enriched_title.concepts);
                                var concepts = element.enriched_title.concepts;
                                outputJSON.push({"concepts": concepts});
                            }
                        }
                    } // For Loop
                    //console.log("returning outputJSON", outputJSON);
                    //console.log("res Inside CallBack", res);
                    //ERROR or: Can't set headers after they are sent.
                    //res.json(outputJSON);
                    callback(outputJSON);
                    // return outputJSON;
                } //If err
            }
        );
    },    
    test2: function() {
        console.log("Inside watsonFunctions.test2");
    }
}

// Export the orm object for the model (watsonController.js).
module.exports = watsonFunctions;


