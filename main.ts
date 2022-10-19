let X_variable = 0
input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.B, function () {
	
})
basic.forever(function () {
    X_variable = 0
    if (input.buttonIsPressed(Button.A)) {
        for (let index = 0; index < 5; index++) {
            basic.clearScreen()
            led.plot(X_variable, 0)
            basic.pause(1000)
            X_variable += 1
        }
    }
    if (input.buttonIsPressed(Button.B)) {
        for (let index = 0; index < 5; index++) {
            basic.clearScreen()
            led.plot(0, X_variable)
            basic.pause(1000)
            X_variable += 1
        }
    }
})
