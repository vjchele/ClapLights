let loudBoolean = 0
input.onSound(DetectedSound.Loud, function () {
    if (!(loudBoolean)) {
        basic.showIcon(IconNames.Heart)
        loudBoolean = 1
    } else {
        basic.clearScreen()
        loudBoolean = 0
    }
})
