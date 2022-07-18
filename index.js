const seedColor = document.getElementById("seed")
const colorSelect = document.getElementById("colors")

const dispArray = document.getElementsByClassName("color-disp")
const hexValArray = document.getElementsByClassName("color-hex")

function generateRandomColor() {
    let maxVal = 0xFFFFFF
    let randomNumber = Math.random() * maxVal 
    randomNumber = Math.floor(randomNumber)
    randomNumber = randomNumber.toString(16)
    let randColor = randomNumber.padStart(6, 0)   
    return `#${randColor.toUpperCase()}`
}

seedColor.value = generateRandomColor()

function arrangeColors(object) {
    for (let i = 0; i < 5; i++) {
        dispArray[i].style.backgroundColor = object.colors[i].hex.value
        hexValArray[i].textContent = object.colors[i].hex.value
        hexValArray[i].value = object.colors[i].hex.value
    }
}

function showColors() {
    const colorCode = seedColor.value.slice(1)
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorCode}&mode=${colorSelect.value}&count=5`)
        .then(res => res.json())
        .then(data => arrangeColors(data))
}

function copyText(index) {
    var copiedText = hexValArray[index]
    console.log(copiedText.value)
    
    navigator.clipboard.writeText(copiedText.value)
    if (copiedText.value != undefined) {
        alert("Copied the color: " + copiedText.value)
    }
}