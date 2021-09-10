const toggles = document.querySelectorAll('.toggle')

toggles.forEach((questions) => {
    questions.addEventListener('click', () => {
        questions.parentNode.classList.toggle('active')
    })
});