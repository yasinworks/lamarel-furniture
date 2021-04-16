const burger = document.querySelector('.navbar__burger')
const lines = document.querySelectorAll('.navbar__burger-line')
const menu = document.querySelector('.navbar__burger-menu')

burger.addEventListener('click', () => {
    lines.forEach(line => {
        line.classList.toggle('closed')
    })
    menu.classList.toggle('opened')
})