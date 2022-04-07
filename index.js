// Your code here
const dodger = document.getElementById('dodger')


function moveDodgerLeft() {
    //turn the current left location into a number only string
    const leftDist = dodger.style.left.replace('px', '')
    const left = parseInt(leftDist, 10)
    console.log(left)
    if (left > 0) {
        dodger.style.left = `${left - 1}px`
    }
}

function moveDodgerRight() {
    const rightDist = dodger.style.left.replace('px', '')

    const right = parseInt(rightDist, 10)
    console.log(right)

    if (right < 360) {
        dodger.style.left = `${right + 1}px`
    }
}


document.addEventListener('keydown', (e) =>{
    if (e.key === 'ArrowLeft') {
        moveDodgerLeft()
    } 
    if (e.key === 'ArrowRight') {
        moveDodgerRight()
    }

})



