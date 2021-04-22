function handleCallback() {
    const wrap = document.querySelector('.callback__wrap')
    const closeCallback = document.querySelector('.callback__content-close')
    const submitCallback = document.querySelector('.callback__content .button_purple')

    wrap.style.display = 'flex'

    closeCallback.addEventListener('click', () => {
        wrap.style.display = 'none'
    })

    submitCallback.addEventListener('click', () => {
        wrap.style.display = 'none'
    })

    wrap.addEventListener('click', (e) => {
        if (e.target === wrap) {
            wrap.style.display = 'none'
        }
    })
}