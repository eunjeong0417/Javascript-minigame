//item이 추가될 field
const field = document.querySelector('.game_field');
const fieldRect = field.getBoundingClientRect();

//start버튼, 타이머, 카운트
const startBtn = document.querySelector('.startBtn')
const timerEl = document.querySelector('.timer')
const countEl = document.querySelector('.count')

//초기 상태 설정
let start = false;
let count = 0;
let timer = undefined;

//carrot 아이템 사이즈, 카운트 설정
const CARROT_SIZE = 90;
//field 밖으로 아이템이 나오지 않도록
//CARROT_SIZE를 90으로 지정해서 빼준다
const CARROT_COUNT = 7;


//start 버튼이 클릭되면 게임 시작
startBtn.addEventListener('click', () => {
    if (start) { //초기 설정은 false
        // showStopButton();
        
    } else { //true
        field.innerHTML = '';
    //field를 초기화해서 아이템이 누적되지
    //않도록 만든다
        init();
        showStopBtn();
        showTimerAndScore();
    }
    start = !start;
    //버튼 누를때마다 상태변경
})

function showStopBtn() {
    const stopIcon = document.querySelector('.fa-play');
    stopIcon.classList.add('fa-stop')
}

function showTimerAndScore() {
    timerEl.style.visibility = 'visible';
    countEl.style.visibility = 'visible';
}

//getBoundingClientRect로 아이템을 넣어줄
// 공간의 x,y축 확인
function init() {
    addItems('carrot', 7, 'img/carrot.png')
    addItems('bug', 5, 'img/bug.png')

    countEl.textContent = CARROT_COUNT;
}

function addItems(className, count, imgSrc ) {
    const x1 = 0;
    const y1 = 0;
    const x2 = fieldRect.width - CARROT_SIZE;
    const y2 = fieldRect.height - CARROT_SIZE;

    
    for (let i = 0; i < count; i++) {
        const item = document.createElement('img');
        
        item.setAttribute('class', className)
        item.setAttribute('src', imgSrc);
        item.style.position = 'absolute';

        const x = randomNum(x1, x2);
        const y = randomNum(y1, y2);
        //각각 x, y 좌표는
        //x1과 x2 , y1과 y2 사이의 숫자를 랜덤하게
        //받아온다
        item.style.left = `${x}px`;
        item.style.top = `${y}px`;
        field.appendChild(item);

        
    }
}
function randomNum(min, max) {
    return Math.random() * (max - min) + min;
}
