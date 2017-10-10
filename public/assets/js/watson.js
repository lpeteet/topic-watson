/*
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
var fs = require('fs');

var discovery = new DiscoveryV1({
    username: 'd88fd447-4ac9-4a34-8d9e-b5c9d50dd4df',
    password: 'PWfbPt1lomav',
    version_date: '2017-09-01'
});

var file = fs.readFileSync('../testing/test-doc1.html');

discovery.addDocument(('adc9daff-1060-443b-8062-67a173edb367', '3612f4ad-2ef0-4aa1-8fa1-1063e6382a88', file),
function(error, data) {
  console.log(JSON.stringify(data, null, 2));
  }
);