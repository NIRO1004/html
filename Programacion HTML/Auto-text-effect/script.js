const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
const text = 'We Love Programing!'
let idx = 1
let speed = 400 / speedEl.value 

writetext ()

function writetext() {
    textEl.innerText = text.slice(0, idx)

    idx++

    if (idx > text.length) {
        idx = 1
    }

    setTimeout(writetext, speed)
}


speed.addEventListener('input', (e) => speed = 400 / e.target.value)