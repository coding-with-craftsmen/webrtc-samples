navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
window.AudioContext = window.AudioContext || window.webkitAudioContext;

function errorCallback(error) {
    console.log("navigator.getUserMedia error: ", error);
}

function getMediaForCallback(constraints, successCallbackFunction, errorCallbackFunction) {

    errorCallbackFunction = errorCallbackFunction || errorCallback;

    navigator.getUserMedia(constraints, successCallbackFunction, errorCallbackFunction);
}
