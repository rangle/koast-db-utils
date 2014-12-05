var Q = require('q');
var whenReady = Q.defer();

function getConfig(section) {
  if(section === 'databases') {
    return [{
      host: '127.0.0.1',
      port: 27017,
      db: 'koast-db-util-test-db',
      schemas: [process.cwd() +'/lib/test-data/multi-schema/schema1.js',
                process.cwd() +'/lib/test-data/multi-schema/schema2.js',
                process.cwd() +'/lib/test-data/multi-schema/schema3.js'
      ],
      handle: 'myTest'
    }];
  }
}

module.exports.getConfig = getConfig;
