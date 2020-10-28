let overlay = document.querySelector('.overlay')
let btn = document.querySelector('.main-content-advantages__button')
let close = document.querySelector('.popup-close')

btn.addEventListener('click', () => {
    overlay.style.display = 'block'
})
close.addEventListener('click', () => {
    overlay.style.display = 'none'
})