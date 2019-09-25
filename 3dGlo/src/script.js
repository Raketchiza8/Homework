window.addEventListener('DOMContentLoaded', function() {
    'use strict';
    //Timer
    // const countTimer = (deadLine) => {
    //     const  timerHours   = document.querySelector('#timer-hours'),
    //             timerMinutes = document.querySelector('#timer-minutes'),
    //             timerSeconds = document.querySelector('#timer-seconds');
        
    //     const getTimeRemaining = () => {
    //         const dateStop = new Date(deadLine).getTime(),
    //                 dateNow = new Date().getTime(),
    //               timeRemaining = (dateStop - dateNow) / 1000,
    //               seconds = Math.floor(timeRemaining % 60),
    //               minutes = Math.floor((timeRemaining / 60) % 60),
    //               hours = Math.floor(timeRemaining / 60 / 60);
    //         return {timeRemaining, hours, minutes, seconds};
    //     };

    //     function updateClock() {
    //         let timer = getTimeRemaining();
            
    //         const addZero = (num) => {
    //             if(num < 10) {
    //                 num = '0' + num;
    //             } 
    //             return num;
    //         };

            
    //         timerHours.textContent   = addZero(timer.hours);
    //         timerMinutes.textContent = addZero(timer.minutes);
    //         timerSeconds.textContent = addZero(timer.seconds);

    //         if(timer.timeRemaining > 0) {
    //             setInterval(updateClock, 1000);
    //         } else {
    //             timerHours.textContent   = '00';
    //             timerMinutes.textContent = '00';
    //             timerSeconds.textContent = '00'; 
    //         }
            
    //     }
    //     updateClock();
    // };

    // countTimer('20 november 2019');

    //menu
    const toggleMenu = () => {
        const btnMenu = document.querySelector('.menu'),
              menu = document.querySelector('menu'),
              closeBtn = document.querySelector('.close-btn'),
              menuItems = menu.querySelectorAll('ul>li'),
              btnScroll = document.querySelector('a[href="#service-block"]');
              

        const openMenu = () => {
            btnMenu.removeEventListener('click', openMenu);
            btnMenu.addEventListener('click', closeMenu);
            let animateInterval,
            count = -100;
            function animate() {
                animateInterval = requestAnimationFrame(animate);
                count += 2;
                if(count <= 50) {
                    menu.style.transform = `translateX(${count}%)`;
                } else {
                    cancelAnimationFrame(animateInterval);
                }
            }
            animateInterval = requestAnimationFrame(animate);
        };
        const closeMenu = () => {
            btnMenu.removeEventListener('click', closeMenu);
            btnMenu.addEventListener('click', openMenu);
            let animateInterval,
            count = 50;
            function animate() {
                animateInterval = requestAnimationFrame(animate);
                count -= 2;
                if(count >= -100) {
                    menu.style.transform = `translateX(${count}%)`;
                } else {
                    cancelAnimationFrame(animateInterval);
                }
            }
            animateInterval = requestAnimationFrame(animate);
        };

        const scroll = function(event) {
            event.preventDefault(); 
            let coordY = document.querySelector(this.firstChild.getAttribute('href'))
                                 .getBoundingClientRect()
                                 .top + window.pageYOffset; 
            console.log(coordY);
            let animateInterval,
                count = 0;
            function animateScroll() {
                animateInterval = requestAnimationFrame(animateScroll);
                count += 10;
                if(count <= coordY) {
                    document.documentElement.scrollTop = count;
                } else {
                    cancelAnimationFrame(animateInterval);
                }
            }
            animateInterval = requestAnimationFrame(animateScroll);
        };

        const scrollNextSlide = function(event) {
            event.preventDefault();
            let animateInterval,
            count = 0;
            function animate() {
                animateInterval = requestAnimationFrame(animate);
                count += 10;
                if(count <= 830) {
                    document.documentElement.scrollTop = count;
                } else {
                    cancelAnimationFrame(animateInterval);
                }
            }
            animateInterval = requestAnimationFrame(animate);

        };

        btnMenu.addEventListener('click', openMenu);
        closeBtn.addEventListener('click', closeMenu);
        btnScroll.addEventListener('click', scrollNextSlide);
        menuItems.forEach((elem) =>{
            elem.addEventListener('click', closeMenu);
            elem.addEventListener('click', scroll);
        });
      

    };
    toggleMenu();
//popup 
    const togglePopup = () => {
        const popup = document.querySelector('.popup'),
              popupBtb = document.querySelectorAll('.popup-btn'),
              popupClose = document.querySelector('.popup-close');
              

            popupBtb.forEach((btn) => {
                btn.addEventListener('click', () => {
                    popup.style.display = 'block';
                });
            });

            popupClose.addEventListener('click', () => {
            popup.style.display = 'none';
            });
    };

    togglePopup();
});