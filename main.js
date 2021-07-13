const itemEl = document.querySelector('.items')

//이벤트 위임
itemEl.addEventListener('click', (e) => {
    
    if (e.target.classList.contains('bug-item')) {
        e.target.classList.add('no-item')
    } else if (e.target.classList.contains('carrot-item')) {
        e.target.classList.add('no-item')
    }

})