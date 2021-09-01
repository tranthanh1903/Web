const contentBoxes = document.querySelectorAll('.content-box')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
    const bottom = window.innerHeight / 10 * 8 //innerWidth, innerHeight: Lấy chiều cao và chiều rộng của khung hiện tại

    contentBoxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top //getBoundingClientRect(): Trả lại kích thước của một phần tử và vị trí của nó so với khung nhìn

        if (boxTop < bottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}