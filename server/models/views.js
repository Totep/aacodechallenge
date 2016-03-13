/**
 * Created by Totep on 3/6/16.
 */
/**
 * Created by Totep on 3/6/16.
 */
var Video = require('./videos');
var Votes = require('./votes');

{
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

        {
            "type"
        :
            "string"
        }
    ,
        "referrer"

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

}



module.exports = json.model('View', ViewSchema);