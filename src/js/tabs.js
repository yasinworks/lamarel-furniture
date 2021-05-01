const tabs = document.querySelectorAll('.top-products__tabs-item')
const tabText = document.querySelectorAll('.top-products__info')

if (tabs) {
    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            let data = e.target.dataset.tab

            tabText.forEach((i) => {
                i.classList.remove('active')
                if (e.target.dataset.tab === i.dataset.tab) {
                    i.classList.add('active')

                    tabs.forEach((j) => {
                        j.classList.remove('selected')

                        if (j.dataset.tab === data) {
                            j.classList.add('selected')
                        }
                    })
                }
            })
        })
    })
}