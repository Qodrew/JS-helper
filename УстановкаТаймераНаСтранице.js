// таймер

    const deadLine = '2023-03-25';
    // получаем оставшееся время
    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date());// количество миллисекунд до дня конца таймера (-) текущее значений даты
        // высчитываем кол-во дней, часов, минут, секунд для оторажения на странице
        const days = Math.floor(t / (1000 * 60 * 60 * 24)); // (1 секунду * 60 секунд в минуте * 60 минут в часе * 24 часа в сутках)
        const hours = Math.floor((t / (1000 * 60 * 60) % 24)); // получаем остаток в часах
        const minutes = Math.floor((t / (1000 / 60) % 60));
        const seconds = Math.floor((t / 1000) % 60 );

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    // для получения нуля перед значением, когда двузначное становится однозначным
    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
        days = timer.querySelector('#days'),
        hours = timer.querySelector('#hours'),
        minutes = timer.querySelector('#minutes'),
        seconds = timer.querySelector('#seconds'),
        timeInterval = setInterval(updateClock, 1000);

        updateClock(); // чтобы не было мигания при обновлении страницы
        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.innerHTML = getZero(t.days); // количество которое отображаем на странице
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }
    setClock('.timer', deadLine);
