let images = document.querySelectorAll('.image');

images.forEach(image => {
    image.addEventListener('click', () => {
        images.forEach(image =>
            image.classList.remove('first')
        );
        image.classList.add('first')
    })
})