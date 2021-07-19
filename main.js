const itemEl = document.querySelector('.items')
const bugEl = document.querySelector('.items_bug')



bugEl.style.top = "400px"

//이벤트 위임
itemEl.addEventListener('click', (e) => {
    
    if (e.target.classList.contains('bug-item')) {
        e.target.classList.add('no-item')
    } else if (e.target.classList.contains('carrot-item')) {
        e.target.classList.add('no-item')
    }
})




