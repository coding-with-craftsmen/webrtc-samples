navigator.getMedia = ( navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia ||
    navigator.msGetUserMedia);


// Get user media (interface for webrtc
function getUserMedia(constraints,stream) {

    return navigator.getMedia(

        constraints,
        stream,

        // errorCallback
        function (err) {
            console.log("A error occured: " + err);
        }


    );
}