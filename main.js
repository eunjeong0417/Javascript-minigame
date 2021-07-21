const field = document.querySelector('.game_field');
const fieldRect = field.getBoundingClientRect();
const CARROT_SIZE = 90;
//field 밖으로 아이템이 나오지 않도록
//CARROT_SIZE를 90으로 지정해서 빼준다
const startBtn = document.querySelector('.startBtn')
const timerEl = document.querySelector('.timer')
const countEl = document.querySelector('.count')

let start = false;
let count = 0;
let timer = undefined;

startBtn.addEventListener('click', () => {
    if (start) {
        // showStopButton();
        console.log("false")
    } else {
        field.innerHTML = '';
        init();
        console.log("Start")
    }
    start = !start;
})

//getBoundingClientRect로 아이템을 넣어줄
// 공간의 x,y축 확인
function init() {
    addItems('carrot', 7, 'img/carrot.png')
    addItems('bug', 5, 'img/bug.png')
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
init();