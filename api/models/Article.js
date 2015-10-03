/**
* Article.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    title : { type: 'String' },

    date : { type: 'Date', default: Date.now},

    author : { type: 'String,' },

    tags : { type: 'String' },

    user : { type: 'String', required: true},

    citations : { type: 'String' }

  }
};

