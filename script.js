const dayContainer = document.querySelector('#days');
const hourContainer = document.querySelector('#hours');
const minContainer = document.querySelector('#minutes');
const secContainer = document.querySelector('#seconds');

const countDown = () =>{
    const TargetDate = new Date("25 Nov 2022");
    const CurrentDate = new Date();
    const diffTime = TargetDate - CurrentDate;
    const timeInSeconds = diffTime / 1000;
    const days = Math.floor(timeInSeconds / 3600 / 24)
    const hours = Math.floor(timeInSeconds / 3600) % 24
    const minutes = Math.floor(timeInSeconds / 60) % 60
    const seconds = Math.floor(Math.floor(diffTime/1000) % 60)
    paintScreen(days,hours,minutes,seconds)
}

const paintScreen = (dd,hh,mm,ss) =>{
    dayContainer.textContent = dd
    hourContainer.textContent = hh
    minContainer.textContent = mm
    secContainer.textContent = ss
}



setInterval(countDown,1000)


