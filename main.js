// selecting html elements //
let char = document.querySelector('.char')
let spike = document.querySelector('.spike')
let stone = document.querySelector('.stone')
let coin = document.querySelector('.coin-block')
let score = document.querySelector('.score')
let messege = document.querySelector('.messege')
let jumpBtn = document.querySelector('.jump')
let highJumpBtn = document.querySelector('.high-jump')
let mobileControls = document.querySelector('.mobile-controls')

// game variables //
let spikeSpeed = 6000
let stoneSpeed = 8000
let point = 0

// checking user event
window.onclick = () => {
    char.classList.add("jump")
    setTimeout(() => {
        char.classList.remove("jump")
    }, 500)
}
window.oncontextmenu = e => {
    e.preventDefault()
    char.classList.add("jump-high-animation")
    setTimeout(() => {
        char.classList.remove("jump-high-animation")
    }, 500)
}

jumpBtn.addEventListener('click', () => {
    char.classList.add("jump")
    setTimeout(() => {
        char.classList.remove("jump")
    }, 500)
})
highJumpBtn.addEventListener('click', () => {
    char.classList.add("jump-high-animation")
    setTimeout(() => {
        char.classList.remove("jump-high-animation")
    }, 500)
})
// check weather mobile device or not //
let screenWidth = window.innerWidth;
if (screenWidth < 600) {
    mobileControls.style.display = 'flex'
    messege.style.display = 'none'
}


// game logics //
setInterval(() => {
    let playerPosition = parseInt(window.getComputedStyle(char).getPropertyValue("bottom"))
    let spikePosition = parseInt(window.getComputedStyle(spike).getPropertyValue("left"))
    let coinPosition = parseInt(window.getComputedStyle(coin).getPropertyValue("left"))
    let stonePosition = parseInt(window.getComputedStyle(stone).getPropertyValue("left"))
    if (playerPosition < 80 && spikePosition < 70 && spikePosition > 50) {
        alert("Game Over!!" + " Your score " + point)
        location.reload()
    }
    if (playerPosition < 80 && stonePosition < 75 && stonePosition > 10) {
        alert("Game Over!!" + " Your score " + point)
        location.reload()
    }
    if (playerPosition < 82 && coinPosition < 75 && coinPosition > 50) {
        coin.style.visibility = 'hidden'
        point++
        score.innerHTML = `score : ${point}`
        setTimeout(() => {
            coin.style.visibility = 'visible'
        }, 3000)
    }

    if (point > 20) {
        stone.style.display = 'block'
    }
    if (point > 30) {
        messege.innerHTML = "Doing Good"
    }
    let randomNum = Math.random()
    stoneSpeed = stoneSpeed - randomNum
    spikeSpeed = spikeSpeed - randomNum
    stone.style.animationDuration = `${stoneSpeed}ms`
    spike.style.animationDuration = `${spikeSpeed}ms`

}, 20);

