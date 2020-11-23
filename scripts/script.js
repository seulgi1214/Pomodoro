// 원하는 음악 버튼 클릭
const musicLists = document.querySelectorAll('.list__button');
const audio = document.querySelectorAll('audio');
let id = '';

function musicBtnHandler(event) {
    musicLists.forEach(musicList => musicList.classList.remove('active'));
    this.classList.add('active');
    const target = event.target;
    id = target.dataset.id;
}

musicLists.forEach(musicList => musicList.addEventListener('click', musicBtnHandler));


//타이머 시간 조정
let timer;
let pauseChk = false;
const startMinute = 25; //25
let time = 0;


const countdown = document.querySelector('.countdown');

//1초 마다 함수실행
function timerHandler() {
    if (pauseChk) {
        pauseChk = false;
    } else {
        time = startMinute * 60;
    }

    timer = setInterval(updateCountdown, 1000);

}


function updateCountdown() {
    //메인타이머 정수형으로 변환하여 계산
    let min = Math.floor(time / 60);
    let sec = time % 60;

    sec = sec < 10 ? '0' + sec : sec;
    min = min < 10 ? '0' + min : min;
    countdown.innerHTML = `${min} : ${sec}`;
    time--;
    if (time < 0) {
        setTimeout(hasClass, 1000)
        clearInterval(timer);
        const timeUp = id;
        console.log(id);
        audio[timeUp].pause();
        audio[timeUp].currentTime = 0;
        return time = 0
    } else {
        return time
    }
}


//alert창 띄우기

const alertMsg = document.querySelector('#alert');
function hasClass() {
    if (alertMsg.hasClass != 'open') {
        alertMsg.classList.add('open');
        countHandler();
    } else {
        alertMsg.classList.remove('open');
    }
}

//alert창 타이머 


let alertCount;
const startCount = 5; //5
let count = 0;

const restTime = document.querySelector('.rest__time');


//1초 마다 함수실행
function countHandler() {
    count = startCount * 60;
    alertCount = setInterval(updateAlertCount, 1000);
}

function updateAlertCount() {
    let minute = Math.floor(count / 60);
    let seconds = count % 60;

    minute = minute < 10 ? '0' + minute : minute;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    restTime.innerHTML = `${minute} : ${seconds}`;
    count--;

    if (count < 0) {
        alertMsg.classList.remove('open');
        clearInterval(alertCount);
        playHandler();
        return count = 0
    } else {
        return count
    }
}


//재생
const playBtn = document.querySelector('.play');

function playHandler() {
    if (pauseChk) {

    } else if (time != 0) {
        alert('timer가 동작중입니다.');
        return
    }
    const musicPlay = id;
    audio[musicPlay].play();
    audio[musicPlay].currentTime = 0;
    audio[musicPlay].loop = true;
    timerHandler();
}

playBtn.addEventListener('click', playHandler);

//멈춤
function StopHandler() {
    pauseChk = true;
    const musicStop = id;
    audio[musicStop].pause();
    clearInterval(timer);

}

const pauseBtn = document.querySelector('.pause');
pauseBtn.addEventListener('click', StopHandler);

