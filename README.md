# topic-watson
Topic-Watson is the name of the 2nd Team Project using the IBM Watson API and User-Entered Topics

#### Dependencies

1. npm package: `express`.

2. npm package: `body-parser'.

3. npm package: `express-handlebars'.

4. npm package: `mySQL'.

#### Watson Setup
curl -X POST -u "{username}":"{password}" -H "Content-Type: application/json" -d '{ "name":"my-first-environment", "description":"exploring environments"}' "api/v1/environments?version=2017-09-01"
curl -X POST -u 6c07ef2e-d812-4506-a1fb-8d01c882c1a9:AeZ4hz32eVIH -H "Content-Type: application/json" -d '{ "name":"my-first-environment", "description":"exploring environments"}' "https://gateway.watsonplatform.net/discovery/api/v1/environments?version=2017-09-01"
OR:

curl -u 6c07ef2e-d812-4506-a1fb-8d01c882c1a9:AeZ4hz32eVIH https://gateway.watsonplatform.net/discovery/api/v1/environments/{environment_id}?version=2017-09-01

curl -u "6c07ef2e-d812-4506-a1fb-8d01c882c1a9: https://gateway.watsonplatform.net/discovery/api/v1/environments/{environment_id}?version=2017-09-01

Error ERCDPLTFRM-INVLDCHR occurred when accessing https://gateway.watsonplatform.net/discovery/api/v1/enviro
nments/environment_id?version=2017-09-01, Tran-Id: gateway01-294349289 - " }
Larry@AlienWare MINGW64 ~/git/topic-watson (master)

#### Directory structure

```
project
│  └── .gitignore
│  └── package.json
│  └── README.md
│  └── server.js
│
└── config
│   └── connection.js
│   └── orm.js
│
└─── controllers
|    └── watsonController.js
└─── db
|    └── schema.sql
|    └── seeds.sql
└─── models
     └── watsonModel.js
└── node_modules
    └── ...
├── public
│   └── assets
│       ├── css
│       │   └── reset.css
│       │   └── style.css
│       ├── img
│       |   └── time-loading.gif
│       |   └── WatsonAPILogon.png
│       |   └── WatsonBrand.png
│       ├── js
│       |   └── watson.js
│       |   └── service-manager.js
│       |   └── service-watson-discovery.js
│       └── testing
│           └── test-doc1.html
│           └── test-doc2.html
│           └── test-doc3.html
│           └── test-doc4.html
├── unused
    └── ...
└───views
│   ├── layouts
│   │   └── main.handlebars
│   ├── partials
|   |   └── results
|   |       └── results-block.handlebars
|   └── index.handlebars
