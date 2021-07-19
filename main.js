const field = document.querySelector('.game_field');
const fieldRect = field.getBoundingClientRect();
const CARROT_SIZE = 90;


//getBoundingClientRect로 아이템을 넣어줄
// 공간의 x,y축 확인
function init() {
    console.log(fieldRect);
    addItems('carrot', 7, 'img/carrot.png')
    addItems( 'bug', 5, 'img/bug.png' )
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