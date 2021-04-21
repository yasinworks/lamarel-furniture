const foo = () => {
    if (localStorage.getItem('scroll')) {
        scrollToElement(localStorage.getItem('scroll'))
        localStorage.removeItem('scroll')
    }
}

foo()