const eventkey = document.querySelector('.key.eventkey')
const eventkeyCode = document.querySelector('.key.eventkeycode')
const eventcode = document.querySelector('.key.eventcode')

window.addEventListener('keydown', (event) => {
    eventkey.innerHTML = `<p>event.key</p> <div class="eventkeys">${event.key === ' ' ? 'Space' : event.key}</div>`
    eventkeyCode.innerHTML = `<p>event.keyCode</p> <div class="eventkeyCodes">${event.keyCode}</div>`
    eventcode.innerHTML = `<p>event.code</p> <div class="eventcodes">${event.code}</div>`
})