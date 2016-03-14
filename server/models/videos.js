//JSON schema Video model
var Views = require('./views');
var Votes = require('./votes');

var Validator = require('jsonschema').Validator;
var v = new Validator();

var VideoSchema = {
    "title"
:
    "Video Schema",
        "type"
:
    "object",
        "properties"
:
    {
        "id"
    :
        {
            "type"
        :
            "string"
        }
    ,
        "title"
    :
        {
            "type"
        :
            "string"
        }
    ,
        "url"
    :
        {
            "type"
        :
            "string"
        }
    ,
        "slug"
    :
        {
            "type"
        :
            "string"
        }
    ,
        "view_tally"
    :
        {
            "type"
        :
            "number"
        }
    ,
        "vote_tally"
    :
        {
            "type"
        :
            "number"
        }
    ,
        "created"
    :
        {
            "type"
        :
            "string",

            "format"
        :
            "date-time"
        }
    ,
        "updated"
    :
        {
            "type"
        :
            "string",

            "format"
        :
            "date-time"
        }
    }

};

module.exports = VideoSchema;