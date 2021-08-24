let search = document.querySelector('.search')
let container = document.querySelector('.container')
let btn = document.querySelector('.btn')
btn.addEventListener('click', () => {
    container.classList.toggle('click')
    search.focus()
})