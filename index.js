/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")

const feetToMeters = 3.281
const gallonsToLiters = 0.264
const poundsToKilos = 2.204

function conversions(imperialValue, unitsList) {
    let imperialToMetric = (inputEl.value*imperialValue).toFixed(3)
    let metricToImperial = (inputEl.value/imperialValue).toFixed(3)
    
    let outputString = `${inputEl.value} ${unitsList[1]} = ${metricToImperial} ${unitsList[3]} | ${inputEl.value} ${unitsList[3]} = ${imperialToMetric} ${unitsList[3]}`
    
    if (inputEl.value == 1) {
        outputString = `${inputEl.value} ${unitsList[0]} = ${metricToImperial} ${unitsList[3]} | ${inputEl.value} ${unitsList[2]} = ${imperialToMetric} ${unitsList[1]}`
    
    } 
    
    else if (metricToImperial == 1) {
        outputString = `${inputEl.value} ${unitsList[1]} = ${Math.floor(metricToImperial)} ${unitsList[2]} | ${inputEl.value} ${unitsList[3]} = ${imperialToMetric} ${unitsList[1]}`
    }
    
    else if (imperialToMetric == 1) {
        outputString = `${inputEl.value} ${unitsList[1]} = ${Math.floor(imperialToMetric)} ${unitsList[2]} | ${inputEl.value} ${unitsList[3]} = ${metricToImperial} ${unitsList[1]}`
    }
    
    else {
        outputString
    }
    return outputString
}
    
convertBtn.addEventListener("click", function() {
       lengthEl.textContent = conversions(feetToMeters, ["meter", "meters", "foot", "feet"])
       volumeEl.textContent = conversions(gallonsToLiters, ["liter", "liters", "gallon", "gallons"])
       massEl.textContent = conversions(poundsToKilos, ["kilo", "kilos", "pound", "pounds"])
})
    