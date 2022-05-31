let num = 0
let answer1 = 0
let answer2 = 0
let answer3 = 0
let answer4 = 0
let answer5 = 0
let answer6 = 0

function convert() {


    num = document.getElementById('inp').value;
    console.log(num)

    lengthCalc()
    volumeCalc()
    massCalc()
}

function lengthCalc() {
    answer1 = num * 3.281
    answer2 = num / 3.281
    document.getElementById('length-answerEl').textContent = (num + ' meters = ' + answer1 + ' feet | ' + num + ' feet = ' + answer2 + ' meters')
}

function volumeCalc() {
    answer3 = num / 3.785
    answer4 = num * 3.785
    document.getElementById('volume-answerEl').textContent = (num + ' liters = ' + answer3 + ' gallons | ' + num + ' gallons = ' + answer4 + ' liters')
}

function massCalc() {
    answer5 = num * 2.205
    answer6 = num / 2.205
    document.getElementById('mass-answerEl').textContent = (num + ' kilos = ' + answer5 + ' pounds | ' + num + ' pounds = ' + answer6 + ' kilos')
}