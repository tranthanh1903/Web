const labels = document.querySelectorAll('label')

labels.forEach(label => {
    label.innerHTML = label.innerText.split('').map((value, i) => `<p style="transition-delay:${i * 70}ms">${value}</p>`).join('')
})