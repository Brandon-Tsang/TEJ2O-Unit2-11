/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Brandon
 * Created on: Mar 2026
 * This program will show a comparison between 2 random integers.
*/

// variables
let randomNumber1: number = randint (0,99)
let randomNumber2: number = randint (0,99)

// setup
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// display random number 1
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.showString("#1: " + randomNumber1.toString())
    basic.showIcon(IconNames.Happy)
})

// display random number 2
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.showString("#2: " + randomNumber2.toString())
    basic.showIcon(IconNames.Happy)
})

// display comparison
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    if (randomNumber1 > randomNumber2) {
        basic.showString(randomNumber1.toString() + ">" + randomNumber2.toString()) 
    }
    else {
        basic.showString(randomNumber1.toString() + "<" + randomNumber2.toString())
    }
    basic.showIcon(IconNames.Sad)
})
