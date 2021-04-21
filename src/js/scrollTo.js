function scrollToElement(id) {
    let item = document.getElementById(id)
    item.scrollIntoView({behavior: "smooth", block: "start"})
}

function scrollToAnotherPage(page, id) {
    window.location.href = `/${page}.html`
    localStorage.setItem('scroll', id)
}