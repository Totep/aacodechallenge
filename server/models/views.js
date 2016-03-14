/**
 * Created by Totep on 3/6/16.
 */
/**
 * Created by Totep on 3/6/16.
 */
var Video = require('./videos');
var Votes = require('./votes');

var Validator = require('jsonschema').Validator;
var v = new Validator();

var ViewSchema = {
    "title"
:
    "View Schema",
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
        "ip_address"
    :
        {
            "type"
        :
            "stringr"
        }
    ,
        "user_agent"
    :
        {
            "type"
        :
            "string"
        }
    ,
        "referrer"
    :
        {
           "type"
        :
            "string"
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



module.exports = ViewSchema;