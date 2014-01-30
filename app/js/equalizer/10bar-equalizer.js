var audioContext;

window.addEventListener('load', init, false);

function init() {
    try {
        // AudioContext
        var analyser;

        var equalizerCanvas = document.getElementById('equalizerCanvas');
        var equalizerCanvasContext = equalizerCanvas.getContext("2d");

        var gradient = equalizerCanvasContext.createLinearGradient(0, 0, 0, equalizerCanvas.width);
        gradient.addColorStop(0, '#ffff99');
        gradient.addColorStop(0.25, '#ffff00');
        gradient.addColorStop(0.75, '#ff0000');
        gradient.addColorStop(1, '#550000');
        equalizerCanvasContext.fillStyle = gradient;


        getMediaForCallback({audio: true, video: false}, function (stream) {
            // Open and connect to audio stream
            audioContext = new AudioContext();
            analyser = (analyser || audioContext.createAnalyser());
            microphone = audioContext.createMediaStreamSource(stream);

            analyser.smoothingTimeConstant = 0.8;
            analyser.fftSize = 64;
            microphone.connect(analyser);

            drawEqualizerBar();
        });

        function drawEqualizerBar() {
            var HEIGHT = equalizerCanvas.height,
                WIDTH = equalizerCanvas.width,
                array = new Uint8Array(analyser.frequencyBinCount);
            analyser.getByteFrequencyData(array);
            equalizerCanvasContext.clearRect(0, 0, WIDTH, HEIGHT);
            audioAnimation = requestAnimationFrame(drawEqualizerBar);
            for (var i = 0; i < (array.length); i++) {
                if (i < 10) {
                    var value = array[i];
                    equalizerCanvasContext.fillRect(0, (i * 12)+1, value, 10);
                }
            }
        }
    }
    catch (e) {
        alert('Web Audio API is not supported in this browser');
    }
}
