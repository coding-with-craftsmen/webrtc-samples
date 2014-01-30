var constraints = {audio: false, video: true};
var video = document.querySelector("video");

function successCallback(stream) {
    window.stream = stream; // stream available to console
    if (window.URL) {
        video.src = window.URL.createObjectURL(stream);
    } else {
        video.src = stream;
    }
    video.play();
}

getMediaForCallback(constraints, successCallback);
