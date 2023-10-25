/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Ernest
 * Created on: oct 2023
 * This program find the distance through sonar
*/

// variables
let distanceToTarget: number = 0

// set up 
basic.clearScreen()
basic.showIcon(IconNames.Happy)
basic.pause(1000)

// find distance
input.onButtonPressed(Button.A, function () {
  basic.clearScreen()
  distanceToTarget - sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
  )
  basic.showNumber(distanceToTarget)
  basic.showIcon(IconNames.Happy)
})
