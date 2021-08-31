
let [millisecond,second,minutes,hours] = [0,0,0,0];
let timeref = document.querySelector('.Time-Display');
let int = null;

document.getElementById('StartTimming').addEventListener('click', function(){
  int = setInterval(displaytimer, 10);
});

document.getElementById('PauseTimming').addEventListener('click', function(){
    clearInterval(int);
});

document.getElementById('ResetTiming').addEventListener('click', function(){
    clearInterval(int);
    [milliseconds,seconds,minutes,hours] = [0,0,0,0];
    timeref.innerHTML = '00 : 00 : 00 : 000 ';
});

function displaytimer() {
  millisecond += 10
  if (millisecond == 1000){
    millisecond = 0;
    second++;
    if (second == 60){
      second = 0;
      minutes++;
      if (minutes == 60){
        minutes = 0;
        hours++;
      }
    }
  }
  // console.log(millisecond);
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = second < 10 ? "0" + second : second;
  let ms = millisecond < 10 ? "00" + millisecond : millisecond < 100 ? "0" + millisecond : millisecond;
  timeref.innerHTML = `${h} : ${m} : ${s} : ${ms}`;
}
