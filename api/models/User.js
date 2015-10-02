/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    username, : { type: 'String', required: true },

    password, : { type: 'String', required: true },

    dateJoined, : { type: 'Date', default: Date.now },

    articles : [{ type: String }],

    role : [{ type: 'String', enum:['superuser', 'admin', 'editor', 'user'] }]
  }
};

