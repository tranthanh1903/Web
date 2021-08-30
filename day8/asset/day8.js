const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
    label.innerHTML = label.innerText.split('').map((value, i) => `<p style="transition-delay:${i * 70}ms">${value}</p>`).join('')
})