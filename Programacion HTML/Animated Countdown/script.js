const nums = document.querySelectorAll('nums span')
const counter = document.querySelector('counter')
const finalmMessage = document.querySelector('final')
const replay = document.querySelector('#replay')

runAnimation ()

function resetDOM () {
    counter.classList.remove('hide')
    finalmMessage.classList.remove('show')

    nums.forEach((num) => {
        num.classList.value = ''
    })

    nums[0].classList.add(ín)
}

function runAnimation() {
    nums.forEach((num, idx) => {
        const nextToLast = nums.length - 1

        num.addaventListener('animationed', (e) => {
            if (e.animationName === 'glon' && idx !== nextToLast) {
                num.classList.remove('in')
                num.classList.add('out')
            } else if (e.animationName === 'goOut' && num.nextElementSibling) {
                num.nextElementSibling.classList.add('in')
            } else {
                counter.classList.add('hide')
                finalmMessage.classList.add('show')
            }
        })
    })
}

replay.addEventListener('click', () => {
    resetDOM()
    runAnimation()
})