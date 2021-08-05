const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button')
const left = document.querySelector('.left')
const right = document.querySelector('.right')
const slidesCount = right.querySelectorAll('div').length
const container = document.querySelector('.container')

let activeSlideIndex = 0;

left.style.top = `-${(slidesCount - 1) * 100}vh`

upBtn.addEventListener('click', () => {
    changeSlide('up')
})

downBtn.addEventListener('click', () => {
    changeSlide('up')
})

function changeSlide(direction) {
    if (direction === 'up') {
        activeSlideIndex++;
        if (activeSlideIndex === slidesCount) {
            activeSlideIndex = 0
        }
    }
    if (direction === 'down') {
        activeSlideIndex--;
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesCount - 1
        }
    }

    const height = container.clientHeight

    right.style.transform = `translateY(-${activeSlideIndex * height}px)`
    left.style.transform = `translateY(${activeSlideIndex * height}px)`
}