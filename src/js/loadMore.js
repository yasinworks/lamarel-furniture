const loadMore = document.getElementById('load-more');

if (loadMore) {

    let currentItems = window.screen.availWidth < 1000 ? 6 : 12;
    let newItems = window.screen.availWidth < 1000 ? 4 : 8;

    const elementList = [...document.querySelectorAll('.products__content .product.small')];
    elementList.forEach(i => {
        i.style.display = 'none'
    })
    for (let i = 0; i < currentItems; i++) {
        elementList[i].style.display = 'flex'
    }

    if (currentItems >= elementList.length) {
        loadMore.style.display = 'none';
    }


    loadMore.addEventListener('click', (e) => {
        for (let i = currentItems; i < currentItems + newItems; i++) {
            if (elementList[i]) {
                elementList[i].style.display = 'flex';
            }
        }
        currentItems += newItems;

        if (currentItems >= elementList.length) {
            loadMore.style.display = 'none';
        }
    })
}