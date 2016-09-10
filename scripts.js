;(function () {

    var startTime = Date.now();
    var countedTime = 0;
    var instantTime;
    var timecounter = document.querySelector('.timecounter');

    var hours = document.querySelector('.hours');
    var minutes = document.querySelector('.minutes');
    var seconds = document.querySelector('.seconds');
    var milliseconds = document.querySelector('.milliseconds');

    function stopwatch() {

        instantTime = Date.now() + countedTime;
        timecounter.innerHTML = instantTime - startTime;
        milliseconds.innerHTML = (instantTime - startTime) % 1000;

        var secondsCount = Math.floor((instantTime - startTime) / 1000);
        if (secondsCount > 59) {
            secondsCount = secondsCount % 60;
        }
        seconds.innerHTML = secondsCount;

        var minutesCount = Math.floor((instantTime - startTime) / 1000 / 60);
        if (minutesCount > 59) {
            minutesCount = minutesCount % 60;
        }
        minutes.innerHTML = minutesCount;

        var hoursCount = Math.floor((instantTime - startTime) / 1000 / 60 / 60);
        if (hoursCount > 59) {
            hoursCount = hoursCount % 60;
        }
        hours.innerHTML = hoursCount;
    }

    var startButton = document.querySelector('.start__button');
    var stopButton;
    var intervalPointer;

    function startStopwatch() {
        startTime = Date.now();
        intervalPointer = setInterval(stopwatch, 1);

        startButton.classList.remove('start__button');
        startButton.classList.add('stop__button');
        startButton.innerHTML = 'STOP';
        stopButton = document.querySelector('.stop__button');

        startButton.removeEventListener('click', startStopwatch);
        stopButton.addEventListener('click', stopStopwatch);
    }


    function stopStopwatch() {
        clearInterval(intervalPointer);
        countedTime = instantTime - startTime;

        stopButton.classList.remove('stop__button');
        stopButton.classList.add('start__button');
        stopButton.innerHTML = 'START';
        startButton = document.querySelector('.start__button');

        stopButton.removeEventListener('click', stopStopwatch);
        startButton.addEventListener('click', startStopwatch);
    }

    startButton.addEventListener('click', startStopwatch);

    var resetButton = document.querySelector('.reset__button');

    function resetStopwatch() {
        clearInterval(intervalPointer); 
        countedTime = 0;
        startTime = Date.now();
        stopwatch();

        if (startButton.innerHTML === 'Stop') {

            stopButton.classList.remove('stop__button');
            stopButton.classList.add('start__button');
            stopButton.innerHTML = 'Start';
            startButton = document.querySelector('.start__button');

            stopButton.removeEventListener('click', stopStopwatch);
            startButton.addEventListener('click', startStopwatch);
        }
    }

    resetButton.addEventListener('click', resetStopwatch);

})();