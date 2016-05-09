import { Meteor } from 'meteor/meteor';

import { Tokens } from '../imports/api/tokens.js';

Tokens.schema = new SimpleSchema({
  token: {type: String},
  applicationId: {type: String},
  deviceUuid: {type: String},
  deviceModel: {type: String},
  devicePlatform: {type: String},
  deviceOsVersion: {type: String},
  notificationKey: {type: String, optional: true},
  notificationKeyName: {type: String, optional: true}
});

function validateToken(token) {
    try {
        Tokens.schema.validate(token);
        return true;
    } catch (e) {
        console.log(e);
    }
    return false;
}

Meteor.startup(() => {
    // All values listed below are default
    tokensApi = new CollectionAPI({
      authToken: undefined,    // Require this string to be passed in on each request
      apiPath: 'api',          // API path prefix
      standAlone: false        // Run as a stand-alone HTTP(S) server
    });

    // Add the collection Players to the API "/players" path
    tokensApi.addCollection(Tokens, 'tokens', {
      // All values listed below are default
      authToken: undefined,                   // Require this string to be passed in on each request
      methods: ['POST','GET','PUT','DELETE'],  // Allow creating, reading, updating, and deleting
      before: {  // This methods, if defined, will be called before the POST/GET/PUT/DELETE actions are performed on the collection. If the function returns false the action will be canceled, if you return true the action will take place.
        POST: validateToken,  // function(obj) {return true/false;},
        GET: undefined,  // function(collectionID, objs) {return true/false;},
        PUT: undefined,  //function(collectionID, obj, newValues) {return true/false;},
        DELETE: undefined,  //function(collectionID, obj) {return true/false;}
      }
    });

    // Starts the API server
    tokensApi.start();
});
