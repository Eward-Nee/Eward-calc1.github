let sNum1 = ``
let sNum2 = ``
let operator = ``

let bNum1 = true

let click0 = document.getElementById(`0`)
let click1 = document.getElementById(`1`)
let click2 = document.getElementById(`2`)
let click3 = document.getElementById(`3`)
let click4 = document.getElementById(`4`)
let click5 = document.getElementById(`5`)
let click6 = document.getElementById(`6`)
let click7 = document.getElementById(`7`)
let click8 = document.getElementById(`8`)
let click9 = document.getElementById(`9`)

let clickPlus = document.getElementById(`+`)
let clickMin = document.getElementById(`-`)
let clickmult = document.getElementById(`*`)
let clickdiv = document.getElementById(`/`)

let clickEnter = document.getElementById(`enter`)
let clickReset = document.getElementById(`reset`)

clickReset.onclick = function () {
    bNum1 = true
    sNum1 = ``
    sNum2 = ``
    operator = ``
    document.getElementById(`screen`).textContent = `0`
}


clickMin.onclick = function () {

    if (bNum1 === true) {

        bNum1 = false
        operator = `-`
        document.getElementById(`screen`).textContent = `0`

    } else {
        if (operator === `/` && sNum2 === `0`) {
            alert(`Your second number can not be 0 when dividing.`)

            bNum1 = true
            sNum1 = ``
            sNum2 = ``
            operator = ``
            document.getElementById(`screen`).textContent = `0`

        } else {



            document.getElementById(`screen`).textContent = `0`

            if (operator === `+`) {
                sNum1 = String(Number(sNum1) + Number(sNum2))
            }

            if (operator === `-`) {
                sNum1 = String(Number(sNum1) - Number(sNum2))
            }

            if (operator === `*`) {
                sNum1 = String(Number(sNum1) * Number(sNum2))
            }

            if (operator === `/`) {
                sNum1 = String(Number(sNum1) / Number(sNum2))
            }


            sNum2 = ``
            operator = `-`

        }
    }

}

clickPlus.onclick = function () {

    if (bNum1 === true) {
        bNum1 = false
        operator = `+`
        document.getElementById(`screen`).textContent = `0`
    } else {
        if (operator === `/` && sNum2 === `0`) {
            alert(`Your second number can not be 0 when dividing.`)

            bNum1 = true
            sNum1 = ``
            sNum2 = ``
            operator = ``
            document.getElementById(`screen`).textContent = `0`

        } else {


            document.getElementById(`screen`).textContent = `0`

            if (operator === `+`) {
                sNum1 = String(Number(sNum1) + Number(sNum2))
            }

            if (operator === `-`) {
                sNum1 = String(Number(sNum1) - Number(sNum2))
            }

            if (operator === `*`) {
                sNum1 = String(Number(sNum1) * Number(sNum2))
            }

            if (operator === `/`) {
                sNum1 = String(Number(sNum1) / Number(sNum2))
            }


            sNum2 = ``
            operator = `+`

        }
    }
}

clickmult.onclick = function () {
    if (bNum1 === true) {
        bNum1 = false
        operator = `*`
        document.getElementById(`screen`).textContent = `0`
    } else {
        if (operator === `/` && sNum2 === `0`) {
            alert(`Your second number can not be 0 when dividing.`)

            bNum1 = true
            sNum1 = ``
            sNum2 = ``
            operator = ``
            document.getElementById(`screen`).textContent = `0`

        } else {



            document.getElementById(`screen`).textContent = `0`

            if (operator === `+`) {
                sNum1 = String(Number(sNum1) + Number(sNum2))
            }

            if (operator === `-`) {
                sNum1 = String(Number(sNum1) - Number(sNum2))
            }

            if (operator === `*`) {
                sNum1 = String(Number(sNum1) * Number(sNum2))
            }

            if (operator === `/`) {
                sNum1 = String(Number(sNum1) / Number(sNum2))
            }

            sNum2 = ``
            operator = `*`

        }
    }
}

clickdiv.onclick = function () {
    if (bNum1 === true) {
        bNum1 = false
        operator = `/`
        document.getElementById(`screen`).textContent = `0`
    } else {
        if (operator === `/` && sNum2 === `0`) {
            alert(`Your second number can not be 0 when dividing.`)

            bNum1 = true
            sNum1 = ``
            sNum2 = ``
            operator = ``
            document.getElementById(`screen`).textContent = `0`

        } else {



            document.getElementById(`screen`).textContent = `0`

            if (operator === `+`) {
                sNum1 = String(Number(sNum1) + Number(sNum2))
            }

            if (operator === `-`) {
                sNum1 = String(Number(sNum1) - Number(sNum2))
            }

            if (operator === `*`) {
                sNum1 = String(Number(sNum1) * Number(sNum2))
            }

            if (operator === `/`) {
                sNum1 = String(Number(sNum1) / Number(sNum2))
            }

            sNum2 = ``
            operator = `/`

        }
    }
}

click0.onclick = function () {

    if (bNum1 === true) {
        if (sNum1 !== 0) {
            sNum1 += `0`
            document.getElementById(`screen`).textContent = sNum1
        }
    } else {
        if (sNum2 !== 0) {
            sNum2 += `0`
            document.getElementById(`screen`).textContent = sNum2
        }
    }


}

click1.onclick = function () {

    if (bNum1 === true) {

        sNum1 += `1`
        document.getElementById(`screen`).textContent = sNum1


    } else {

        sNum2 += `1`
        document.getElementById(`screen`).textContent = sNum2


    }


}

click2.onclick = function () {

    if (bNum1 === true) {

        sNum1 += `2`
        document.getElementById(`screen`).textContent = sNum1

    } else {

        sNum2 += `2`
        document.getElementById(`screen`).textContent = sNum2

    }


}

click3.onclick = function () {

    if (bNum1 === true) {

        sNum1 += `3`
        document.getElementById(`screen`).textContent = sNum1

    } else {

        sNum2 += `3`
        document.getElementById(`screen`).textContent = sNum2

    }


}

click4.onclick = function () {

    if (bNum1 === true) {

        sNum1 += `4`
        document.getElementById(`screen`).textContent = sNum1

    } else {

        sNum2 += `4`
        document.getElementById(`screen`).textContent = sNum2

    }


}

click5.onclick = function () {

    if (bNum1 === true) {

        sNum1 += `5`
        document.getElementById(`screen`).textContent = sNum1

    } else {

        sNum2 += `5`
        document.getElementById(`screen`).textContent = sNum2

    }


}

click6.onclick = function () {

    if (bNum1 === true) {

        sNum1 += `6`
        document.getElementById(`screen`).textContent = sNum1

    } else {

        sNum2 += `6`
        document.getElementById(`screen`).textContent = sNum2

    }


}

click7.onclick = function () {

    if (bNum1 === true) {

        sNum1 += `7`
        document.getElementById(`screen`).textContent = sNum1

    } else {

        sNum2 += `7`
        document.getElementById(`screen`).textContent = sNum2

    }


}

click8.onclick = function () {

    if (bNum1 === true) {

        sNum1 += `8`
        document.getElementById(`screen`).textContent = sNum1
    } else {

        sNum2 += `8`
        document.getElementById(`screen`).textContent = sNum2

    }


}

click9.onclick = function () {

    if (bNum1 === true) {

        sNum1 += `9`
        document.getElementById(`screen`).textContent = sNum1

    } else {

        sNum2 += `9`
        document.getElementById(`screen`).textContent = sNum2


    }


}

clickEnter.onclick = function () {
    if (operator === `/` && sNum2 === `0`) {
        alert(`Your second number can not be 0 when dividing.`)

        bNum1 = true
        sNum1 = ``
        sNum2 = ``
        operator = ``
        document.getElementById(`screen`).textContent = `0`

    } else {
        if (operator === `+`) {
            document.getElementById(`screen`).textContent = String(Number(sNum1) + Number(sNum2))
        }

        if (operator === `-`) {
            document.getElementById(`screen`).textContent = String(Number(sNum1) - Number(sNum2))
        }

        if (operator === `*`) {
            document.getElementById(`screen`).textContent = String(Number(sNum1) * Number(sNum2))
        }

        if (operator === `/`) {
            document.getElementById(`screen`).textContent = String(Number(sNum1) / Number(sNum2))
        }
        operator = ``
        bNum1 = true
        sNum1 = ``
        sNum2 = ``
    }


}




