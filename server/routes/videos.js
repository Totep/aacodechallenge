/**
 * Created by Totep on 3/5/16.
 */
var express = require('express');
var router = express.Router();
var Video = require('./models/videos');


//get videos
router.get('/', function(req, res, next) {
    Video.find({_id: {$exists: true}}, function(err, data){
        res.send(data);
    });
});

//get single video
router.get('/:id', function(req, res, next) {
    var videoId = req.params.id;
    Video.find({_id: videoId}, function(err, data){
        console.log(data);
        res.send(data[0]);
    });

});

//post video
router.post('/', function(req, res, next) {
    console.log('eventRouter:', req.body);
    var newVideo = req.body;


    if(newVideo.title != undefined) {
        Video.create(newVideo, function (err, data) {
            if(err){
                console.log('video post:', err);
            }
            res.send(data);
        });
    }

});

//update video
router.put('/:id', function(req, res, next) {
    var videoID = req.params.id;
    var video = req.body;
    Video.findByIdAndUpdate(videoID, video, {new:true}, function(err, data){
        res.send(data);
    });
});

//delete video
router.delete('/:id', function(req, res, next) {
    var ID = req.params.id;
    Video.delete(ID, function(err){
        if(err) throw err;
        res.send();
    });
});

module.exports = router;