const countdownDate = () => {
    const countDate = new Date("25 June, 2022 00:00:00").getTime();
    const newDate = new Date().getTime();
    const gap = countDate - newDate;

    //How does the time work 
    const seconds = 1000;
    const minutes = seconds * 60;
    const hour = minutes * 60;
    const day = hour * 24;

    // Calculate the countdown 
    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minutes);
    const textSeconds = Math.floor((gap % minutes ) / seconds);

    document.querySelector('#daysId').innerText = textDay;
    document.querySelector('#hoursId').innerText = textHour;
    document.querySelector('#minutesId').innerText = textMinute;
    document.querySelector('#secondsId').innerText = textSeconds;

}

setInterval(countdownDate, 1000);