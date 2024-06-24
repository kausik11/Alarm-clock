const selectMenu = document.querySelectorAll('select');
const clock = document.querySelector('#clock');
const setAlarmBtn = document.querySelector('#btn');
const input = document.querySelector('#input');
const img = document.querySelector('img');


let alarmTime;
let isAlarmSet = 'false';
let rington = new Audio("Alarm-ringtone.mp3");
let tick = new Audio("Slow-clock-ticking.mp3");





for (let i = 0; i <= 12; i++) {
    i = i<10 ? '0'+i : i
     let option = `<option value="${i}">${i}</option>`;
    selectMenu[0].firstElementChild.insertAdjacentHTML("afterend",option);
}

for (let i = 0; i <= 59; i++) {
    i = i<10 ? '0'+i : i
     let option = `<option value="${i}">${i}</option>`;
    selectMenu[1].firstElementChild.insertAdjacentHTML("afterend",option);

}

for (let i = 0; i <= 1; i++) {
    let ampm = i==1 ? 'AM' : 'PM'
     let option = `<option value="${ampm}">${ampm}</option>`;
    selectMenu[2].firstElementChild.insertAdjacentHTML("afterend",option);
}

setInterval(() => {
    //getting hour,minute,sec
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
   let ampm = "AM";

   if (hour>=12) {
    hour = hour-12;
    ampm = "PM";
   }
  hour = hour === 0 ? hour = 12 : hour;
  
  //adding 0 before hour,min,sec if this value less than 10
  hour = hour < 10 ? '0'+hour : hour;
  min = min < 10 ? '0'+min : min;
  sec = sec < 10 ? '0'+sec : sec;
  clock.innerText = `${hour}:${min}:${sec} ${ampm}`;
 let Nowtimetocheckalarm = `${hour}:${min} ${ampm}`;
   
 if (alarmTime == Nowtimetocheckalarm) {
    console.log('alarm is ringing....');
    rington.play();
    rington.loop = true;
    img.classList.add('animate');

 }else{
    tick.play();
     tick.loop = true;
 }
},1000);

// let tick = setInterval(() => {
//     document 
// }, 10000);
// document.onload = ()=>{
//     document.getElementById('my_audio').play();
// }

function setAlarm() {

    if (isAlarmSet) {
        alarmTime = '';
        input.classList.remove('disable');
        img.classList.remove('animate');
        setAlarmBtn.innerText = 'Set Alarm';
        rington.pause();
        return isAlarmSet = false;
        
    }

    let time = `${selectMenu[0].value}:${selectMenu[1].value} ${selectMenu[2].value}`
    time.includes('hour') || time.includes('minute') || time.includes('ampm')?console.log("select proper time"): console.log(time);
    alarmTime = time; 
    isAlarmSet = true;
    console.log("this is inside the function",isAlarmSet);
    input.classList.add('disable');
     setAlarmBtn.innerText = 'Clear Alarm'
     
     
     
}

setAlarmBtn.addEventListener('click',setAlarm);