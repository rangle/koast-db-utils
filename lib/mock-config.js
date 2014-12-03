var Q = require('q');
var whenReady = Q.defer();

function getConfig(section) {
  if(section === 'databases') {
    return [{
      "handle": "db1",
      "host": "127.0.0.1",
      "port": "27017",
      "db": "koast1",
      "schemas": "./lib/test-data/db-util/db1Schemas.js"
    }, {
      "handle": "db2",
      "host": "127.0.0.1",
      "port": "27017",
      "db": "koast2",
      "schemas": "../lib/test-data/db-util/db2Schemas.js"
    }]
  } else if(section === 'anotherDb') {
    return {
      "host": "127.0.0.1",
      "port": "27017",
      "db": "koast3"
    };
  } else if(section === 'dbUtilTest') {
    return {
      "host": "127.0.0.1",
      "port": "27017",
      "db": "koast3"
    };
  }
}

module.exports.getConfig = getConfig;
