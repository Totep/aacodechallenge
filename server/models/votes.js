/**
 * Created by Totep on 3/6/16.
 */
var Video = require('./videos');
var View = require('./views');

var Validator = require('jsonschema').Validator;
var v = new Validator();

var VoteSchema = {
    "title"
:
    "Vote Schema",
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
        "video_id"
    :
        {
            "type"
        :
            "string"
        }
    ,
        "opinion"
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

module.exports = VoteSchema;