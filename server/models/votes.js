/**
 * Created by Totep on 3/6/16.
 */
var Video = require('./videos');
var View = require('./views');

{
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

}

module.exports = json.model('Vote', VoteSchema);