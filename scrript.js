
const secondsHand = document.querySelector('.second-hand')
const minutesHand = document.querySelector('.minute-hand')
const hoursHand = document.querySelector('.hour-hand')

function getTime(){
    const now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    // one second = six degrees rotation
    let secondRotation = second * 6;

    //one minute = six degrees rotation
    let minuteRotation =  minute * 6;

    // one hour =  thirty degrees rotation + minute rotation divided by 12
    let hourRotation = (hour * 30) + (minuteRotation/12);    

    // rotate the hands accordingly
    secondsHand.style.transform = `rotate(${secondRotation}deg)`
    minutesHand.style.transform = `rotate(${minuteRotation}deg)`
    hoursHand.style.transform = `rotate(${hourRotation}deg)`
}

// call the getTime function every 100 milliseconds
setInterval(getTime, 100);