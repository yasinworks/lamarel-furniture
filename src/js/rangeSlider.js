let slider = document.getElementById('range-slider');

noUiSlider.create(slider, {
    start: [10000, 25000],
    connect: true,
    step: 1,
    range: {
        'min': 2500,
        'max': 35000
    }
});