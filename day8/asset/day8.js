const labels = document.querySelectorAll('label')

labels.forEach(label => {
    let a = label.innerHTML
    a = label.innerText.split('')
    a = a.map((value, i) => `<p style="transition-delay:${i * 70}ms">${value}</p>`)
    a = a.join('')
    label.innerHTML = a;
})