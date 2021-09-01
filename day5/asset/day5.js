const loadText = document.querySelector('.loading-text')
const img = document.querySelector('.image')

let load = 0
let opacitys = 1
let blurs = 25

let int = setInterval(blurring, 50)

function blurring() {
    load++

    if (load > 99) {
        clearInterval(int)

    }

    loadText.innerText = `${load}%`
    opacitys = opacitys - 0.009;
    loadText.style.opacity = opacitys
    blurs = blurs - 0.25
    img.style.filter = `blur(${blurs}px)`
}