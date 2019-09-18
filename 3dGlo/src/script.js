window.addEventListener('DOMContentLoaded', function() {
    'use strict';
    //Timer
    function countTimer(deadLine) {
        let timerHours   = document.querySelector('#timer-hours'),
            timerMinutes = document.querySelector('#timer-minutes'),
            timerSeconds = document.querySelector('#timer-seconds');
        
        function getTimeRemaining() {
            let dateStop = new Date(deadLine).getTime(),
                dateNow = new Date().getTime(),
                timeRemaining = (dateStop - dateNow) / 1000,
                seconds = Math.floor(timeRemaining % 60),
                minutes = Math.floor((timeRemaining / 60) % 60),
                hours = Math.floor(timeRemaining / 60 / 60);
            return {timeRemaining, hours, minutes, seconds};
        }

        function updateClock() {
            let timer = getTimeRemaining();

            for(let key in timer) {
                if(key !== 'timeRemaining'){
                    if(timer[key] < 10 ) {
                        timer[key] = '0' + timer[key];
                    }
                }
            }
           
    
            
            timerHours.textContent   = timer.hours;
            timerMinutes.textContent = timer.minutes;
            timerSeconds.textContent = timer.seconds;

            if(timer.timeRemaining > 0) {
                setInterval(updateClock, 1000);
            } else {
                timerHours.textContent   = '00';
                timerMinutes.textContent = '00';
                timerSeconds.textContent = '00'; 
            }
            
        }
        updateClock();
    }
   countTimer('20 september 2019');
});