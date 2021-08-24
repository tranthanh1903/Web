let circles = document.querySelectorAll('.circle');
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let underline = document.querySelector('.underline');

let actives = 1;

function update() {
    circles.forEach((circle, i) => {
        if (i < actives) {
            circle.classList.add('first')
        } else {
            circle.classList.remove('first')
        }
    })
    const firsts = document.querySelectorAll('.first')
    underline.style.width = ((firsts.length - 1) / (circles.length - 1) * 100) + '%'
    if (actives === 1) {
        prev.disabled = true
        next.disabled = false
    } else if (actives === circles.length) {
        next.disabled = true
        prev.disabled = false
    } else {
        prev.disabled = false
        next.disabled = false
    }
}

next.addEventListener('click', () => {
    actives++
    if (actives > circles.length) {
        actives = circles.length
    }
    update()
})
prev.addEventListener('click', () => {
    actives--
    if (actives < 1) {
        actives = 1
    }
    update()
})
circles.forEach((circle, i) => {
    circle.addEventListener('click', () => {
        actives = i + 1;
        update()
    })

})
