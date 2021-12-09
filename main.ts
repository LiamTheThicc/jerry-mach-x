input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
    basic.pause(1000)
    jerrys_hype += 100
    soundExpression.giggle.play()
})
input.onGesture(Gesture.ScreenUp, function () {
    basic.showLeds(`
        . . . . .
        # . . . #
        . . . . .
        . . # . .
        . # . # .
        `)
    basic.pause(1000)
    jerrys_hype += -50
    soundExpression.sad.play()
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Surprised)
    basic.pause(1000)
    jerrys_hype = 1100
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Heart)
    basic.pause(1000)
    jerrys_hype += 100
    soundExpression.giggle.play()
})
let jerrys_hype = 0
jerrys_hype = 1100
music.setVolume(53)
basic.forever(function () {
    if (jerrys_hype >= 1000) {
        basic.showLeds(`
            . . . . .
            # . . . #
            . . . . .
            . # . # .
            . . # . .
            `)
        basic.showLeds(`
            # . . . #
            . . . . .
            . # . # .
            . . # . .
            . . . . .
            `)
        jerrys_hype += -1
    } else {
        if (jerrys_hype >= 900) {
            basic.showLeds(`
                . . . . .
                # . . . #
                . . . . .
                . # . # .
                . . # . .
                `)
            basic.pause(500)
            basic.showLeds(`
                # . . . #
                . . . . .
                . # . # .
                . . # . .
                . . . . .
                `)
            jerrys_hype += -1
        } else {
            if (jerrys_hype >= 800) {
                basic.showLeds(`
                    . . . . .
                    # . . . #
                    . . . . .
                    . # . # .
                    . . # . .
                    `)
                basic.showLeds(`
                    . . # . .
                    . . . . .
                    # . . # .
                    . . # # .
                    . . . . .
                    `)
                basic.showLeds(`
                    . # . . .
                    . . . # .
                    . . . . #
                    . . . # .
                    . # . . .
                    `)
                basic.showLeds(`
                    . . . . .
                    . . # # .
                    # . . # .
                    . . . . .
                    . . # . .
                    `)
                basic.showLeds(`
                    . . # . .
                    . # . # .
                    . . . . .
                    # . . . #
                    . . . . .
                    `)
                basic.showLeds(`
                    . . . . .
                    . # # . .
                    . # . . #
                    . . . . .
                    . . # . .
                    `)
                basic.showLeds(`
                    . . . # .
                    . # . . .
                    # . . . .
                    . # . . .
                    . . . # .
                    `)
                basic.showLeds(`
                    . . # . .
                    . . . . .
                    . # . . #
                    . # # . .
                    . . . . .
                    `)
                jerrys_hype += -1
            } else {
                if (jerrys_hype >= 700) {
                    basic.showLeds(`
                        . . . . .
                        # . . . #
                        . . . . .
                        . # . # .
                        . . # . .
                        `)
                    basic.showLeds(`
                        # . . . #
                        . . . . .
                        . # . # .
                        . . # . .
                        . . . . .
                        `)
                    basic.showLeds(`
                        . . . . .
                        . # . # .
                        . . # . .
                        . . . . .
                        . . . . .
                        `)
                    basic.showLeds(`
                        . # . # .
                        . . # . .
                        . . . . .
                        . . . . .
                        # . . . #
                        `)
                    basic.showLeds(`
                        . . # . .
                        . . . . .
                        . . . . .
                        # . . . #
                        . . . . .
                        `)
                    basic.showLeds(`
                        . . . . .
                        . . . . .
                        # . . . #
                        . . . . .
                        . # . # .
                        `)
                    basic.showLeds(`
                        . . . . .
                        # . . . #
                        . . . . .
                        . # . # .
                        . . # . .
                        `)
                    basic.clearScreen()
                    jerrys_hype += -1
                } else {
                    if (jerrys_hype >= 600) {
                        basic.showLeds(`
                            . . . . #
                            # . . . .
                            . . . . .
                            . # # # .
                            . . . . .
                            `)
                        basic.showLeds(`
                            . . . . .
                            # . . . #
                            . # # # .
                            . . . . .
                            . . . . .
                            `)
                        basic.showLeds(`
                            # . . . .
                            . . . . #
                            . . . . .
                            . # # # .
                            . . . . .
                            `)
                        basic.showLeds(`
                            # . . . #
                            . . . . .
                            . # # # .
                            . . . . .
                            . . . . .
                            `)
                        jerrys_hype += -1
                    } else {
                        if (jerrys_hype >= 500) {
                            basic.showLeds(`
                                . . . . .
                                # . . . #
                                . . . . .
                                . # # # .
                                . . . . .
                                `)
                            basic.showLeds(`
                                . . . . #
                                . # . . .
                                . . . . .
                                . # # # .
                                . . . . .
                                `)
                            basic.showLeds(`
                                . # . # .
                                . . . . .
                                . . . . .
                                . # # # .
                                . . . . .
                                `)
                            basic.showLeds(`
                                # . . . .
                                . . . # .
                                . . . . .
                                . # # # .
                                . . . . .
                                `)
                            basic.showLeds(`
                                . . . . .
                                # . . . #
                                . . . . .
                                . # # # .
                                . . . . .
                                `)
                            jerrys_hype += -1
                        } else {
                            if (jerrys_hype >= 400) {
                                basic.showLeds(`
                                    . . . . .
                                    # . . . #
                                    . . . . .
                                    . # # # .
                                    . . . . .
                                    `)
                                basic.showLeds(`
                                    . . . . .
                                    . # . # .
                                    . . . . .
                                    . # # # .
                                    . . . . .
                                    `)
                                basic.showLeds(`
                                    . . . . .
                                    . . # . .
                                    . . . . .
                                    . # # # .
                                    . . . . .
                                    `)
                                basic.showLeds(`
                                    . . . . .
                                    . . . . .
                                    . . . . .
                                    . # # # .
                                    . . . . .
                                    `)
                                basic.showLeds(`
                                    . . # . .
                                    . . . . .
                                    . . . . .
                                    . # # # .
                                    . . . . .
                                    `)
                                basic.showLeds(`
                                    . . . . .
                                    . . # . .
                                    . . . . .
                                    . # # # .
                                    . . . . .
                                    `)
                                basic.showLeds(`
                                    . . . . .
                                    . # # # .
                                    . . . . .
                                    . # # # .
                                    . . . . .
                                    `)
                                basic.showLeds(`
                                    . . . . .
                                    # # # # #
                                    . . . . .
                                    . # # # .
                                    . . . . .
                                    `)
                                basic.showLeds(`
                                    . . # . .
                                    # # # # #
                                    . . . . .
                                    . # # # .
                                    . . . . .
                                    `)
                                basic.showLeds(`
                                    . # # # .
                                    # # # # #
                                    . . . . .
                                    . # # # .
                                    . . . . .
                                    `)
                                basic.showLeds(`
                                    # # # # #
                                    # # # # #
                                    . . . . .
                                    . # # # .
                                    . . . . .
                                    `)
                                basic.showLeds(`
                                    # # # # #
                                    # # . # #
                                    . . . . .
                                    . # # # .
                                    . . . . .
                                    `)
                                basic.pause(1000)
                                basic.showLeds(`
                                    # # . # #
                                    # # . # #
                                    . . . . .
                                    . # # # .
                                    . . . . .
                                    `)
                                basic.pause(1000)
                                jerrys_hype += -1
                            } else {
                                if (jerrys_hype >= 300) {
                                    basic.showLeds(`
                                        . . . . .
                                        # . . . #
                                        . . . . .
                                        . # # # .
                                        . . . . .
                                        `)
                                    basic.showLeds(`
                                        . . . . .
                                        # . . . #
                                        . . . . .
                                        # . # # .
                                        . . . . .
                                        `)
                                    basic.showLeds(`
                                        . . . . #
                                        # . . . .
                                        . . . . .
                                        # . . # #
                                        . . . . .
                                        `)
                                    basic.showLeds(`
                                        . . . . #
                                        # . . . .
                                        . . . . #
                                        # . . . #
                                        . . . . .
                                        `)
                                    basic.showLeds(`
                                        . . . . #
                                        # . . . .
                                        . . . . #
                                        # . . . .
                                        . . . . #
                                        `)
                                    basic.showLeds(`
                                        . . . . #
                                        # . . . .
                                        . . . . #
                                        # . . . .
                                        . . . . #
                                        `)
                                    basic.showLeds(`
                                        . . . # #
                                        # # . . .
                                        . . . # #
                                        # # . . .
                                        . . . # #
                                        `)
                                    basic.showLeds(`
                                        . . # # .
                                        . # # . .
                                        . . # # .
                                        . # # . .
                                        . . # # .
                                        `)
                                    basic.showLeds(`
                                        . . . # #
                                        # # . . .
                                        . . . # #
                                        # # . . .
                                        . . . # #
                                        `)
                                    basic.showLeds(`
                                        . . . . #
                                        # . . . .
                                        . . . . #
                                        # . . . .
                                        . . . . #
                                        `)
                                    basic.clearScreen()
                                    basic.showLeds(`
                                        . # . # .
                                        . . . . .
                                        . . . . .
                                        . . . . .
                                        # . # . #
                                        `)
                                    basic.showLeds(`
                                        . # . # .
                                        . # . # .
                                        . . . . .
                                        # . # . #
                                        # . # . #
                                        `)
                                    basic.showLeds(`
                                        . . . . .
                                        . # . # .
                                        # # # # #
                                        # . # . #
                                        . . . . .
                                        `)
                                    basic.showLeds(`
                                        . . . . .
                                        # . # . #
                                        # # # # #
                                        . # . # .
                                        . . . . .
                                        `)
                                    basic.showLeds(`
                                        # . # . #
                                        # . # . #
                                        . . . . .
                                        . # . # .
                                        . # . # .
                                        `)
                                    basic.showLeds(`
                                        # . # . #
                                        . . . . .
                                        . . . . .
                                        . . . . .
                                        . # . # .
                                        `)
                                    basic.clearScreen()
                                    basic.showLeds(`
                                        # . . . .
                                        . . . . #
                                        # . . . .
                                        . . . . #
                                        # . . . .
                                        `)
                                    basic.showLeds(`
                                        # # . . .
                                        . . . # #
                                        # # . . .
                                        . . . # #
                                        # # . . .
                                        `)
                                    basic.showLeds(`
                                        . # # . .
                                        . . # # .
                                        . # # . .
                                        . . # # .
                                        . # # . .
                                        `)
                                    basic.showLeds(`
                                        . . # # .
                                        . # # . .
                                        . . # # .
                                        . # # . .
                                        . . # # .
                                        `)
                                    basic.showLeds(`
                                        . . . # #
                                        # # . . .
                                        . . . # #
                                        # # . . .
                                        . . . # #
                                        `)
                                    basic.showLeds(`
                                        . . . . #
                                        # . . . .
                                        . . . . #
                                        # . . . .
                                        . . . . #
                                        `)
                                    basic.clearScreen()
                                    basic.showLeds(`
                                        # . # . #
                                        . . . . .
                                        . . . . .
                                        . . . . .
                                        . # . # .
                                        `)
                                    basic.showLeds(`
                                        # . # . #
                                        # . # . #
                                        . . . . .
                                        . # . # .
                                        . # . # .
                                        `)
                                    basic.showLeds(`
                                        . . . . .
                                        # . # . #
                                        # # # # #
                                        . # . # .
                                        . . . . .
                                        `)
                                    basic.showLeds(`
                                        . . . . .
                                        . # . # .
                                        # # # # #
                                        # . # . #
                                        . . . . .
                                        `)
                                    basic.showLeds(`
                                        . # . # .
                                        . # . # .
                                        . . . . .
                                        # . # . #
                                        # . # . #
                                        `)
                                    basic.showLeds(`
                                        . # . # .
                                        . . . . .
                                        . . . . .
                                        . . . . .
                                        # . # . #
                                        `)
                                    basic.showLeds(`
                                        . # . # .
                                        . . . . .
                                        . . . . .
                                        . . . . .
                                        . # # . #
                                        `)
                                    basic.showLeds(`
                                        . # . # .
                                        . . . . .
                                        . . . . .
                                        . . . . .
                                        . # # # .
                                        `)
                                    basic.showLeds(`
                                        # . . # .
                                        . . . . .
                                        . . . . .
                                        . . . . .
                                        . # # # .
                                        `)
                                    basic.showLeds(`
                                        # . . . #
                                        . . . . .
                                        . . . . .
                                        . . . . .
                                        . # # # .
                                        `)
                                    basic.showLeds(`
                                        # . . . #
                                        . . . . .
                                        . . . . .
                                        . # # # .
                                        . . . . .
                                        `)
                                    basic.showLeds(`
                                        . . . . .
                                        # . . . #
                                        . . . . .
                                        . # # # .
                                        . . . . .
                                        `)
                                    basic.clearScreen()
                                    jerrys_hype += -1
                                } else {
                                    if (jerrys_hype >= 200) {
                                        basic.showLeds(`
                                            # . . . .
                                            . . . . .
                                            . . . . .
                                            . . . . .
                                            . . . . #
                                            `)
                                        basic.showLeds(`
                                            # . . . .
                                            # . . . .
                                            . . . . .
                                            . . . . #
                                            . . . . #
                                            `)
                                        basic.showLeds(`
                                            # . . . .
                                            # . . . .
                                            # . . . #
                                            . . . . #
                                            . . . . #
                                            `)
                                        basic.showLeds(`
                                            # . . . .
                                            # . . . #
                                            # . . . #
                                            # . . . #
                                            . . . . #
                                            `)
                                        basic.showLeds(`
                                            # . . . #
                                            # . . . #
                                            # . . . #
                                            # . . . #
                                            # . . . #
                                            `)
                                        basic.showLeds(`
                                            . . . # #
                                            # . . . #
                                            # . . . #
                                            # . . . #
                                            # # . . .
                                            `)
                                        basic.showLeds(`
                                            . . # # #
                                            . . . . #
                                            # . . . #
                                            # . . . .
                                            # # # . .
                                            `)
                                        basic.showLeds(`
                                            . . # # #
                                            . . # . #
                                            # . . . #
                                            # . # . .
                                            # # # . .
                                            `)
                                        basic.showLeds(`
                                            . . # # #
                                            . . # . #
                                            # . # . #
                                            # . # . .
                                            # # # . .
                                            `)
                                        basic.showLeds(`
                                            . . # # #
                                            . . # # .
                                            . . # . .
                                            . # # . .
                                            # # # . .
                                            `)
                                        basic.showLeds(`
                                            . # # # .
                                            . . # # .
                                            . . # . .
                                            . # # . .
                                            . # # # .
                                            `)
                                        basic.showLeds(`
                                            # # # . .
                                            . # # . .
                                            . . # . .
                                            . . # # .
                                            . . # # #
                                            `)
                                        basic.showLeds(`
                                            # . . . .
                                            # # . . .
                                            . # # # .
                                            . . . # #
                                            . . . . #
                                            `)
                                        basic.showLeds(`
                                            # # . . .
                                            # # # . .
                                            . # # # .
                                            . . # # #
                                            . . . # #
                                            `)
                                        basic.showLeds(`
                                            # # . . .
                                            # . # . .
                                            . # # # .
                                            . . # . #
                                            . . . # #
                                            `)
                                        basic.showLeds(`
                                            # # . . .
                                            # . # . .
                                            . # # # .
                                            . . # . #
                                            . . . # #
                                            `)
                                        basic.showLeds(`
                                            # # # . .
                                            # . . . .
                                            . # # # .
                                            . . # . #
                                            . . . # #
                                            `)
                                        basic.showLeds(`
                                            # # # . .
                                            # . . . .
                                            . # # # .
                                            . . . . #
                                            . . # # #
                                            `)
                                        basic.showLeds(`
                                            # # # . .
                                            # . . . .
                                            # . # # .
                                            . . . . #
                                            . . # # #
                                            `)
                                        basic.showLeds(`
                                            # # # . .
                                            # . # . .
                                            # . # . #
                                            . . # . #
                                            . . # # #
                                            `)
                                        basic.showLeds(`
                                            # # # # .
                                            # . . # .
                                            . . # . .
                                            . # . . #
                                            . # # # #
                                            `)
                                        basic.showLeds(`
                                            # # # # #
                                            # . . # .
                                            . . . . .
                                            . # . . #
                                            # # # # #
                                            `)
                                        basic.showLeds(`
                                            # # # # #
                                            # . . . #
                                            . . . . .
                                            # . . . #
                                            # # # # #
                                            `)
                                        basic.showLeds(`
                                            # # # # #
                                            # . . . #
                                            . . # . .
                                            # . . . #
                                            # # # # #
                                            `)
                                        basic.showLeds(`
                                            # # # # #
                                            # . . . #
                                            . # . # .
                                            # . . . #
                                            # # # # #
                                            `)
                                        basic.pause(500)
                                        basic.showLeds(`
                                            # # # # #
                                            # . . . #
                                            # . . . #
                                            # . . . #
                                            # # # # #
                                            `)
                                        basic.showLeds(`
                                            # # # # #
                                            # . . . #
                                            # . . . #
                                            # . . . #
                                            # # # # #
                                            `)
                                        basic.showLeds(`
                                            # # # . #
                                            # . . . #
                                            # . . . #
                                            # . . . #
                                            # . # # #
                                            `)
                                        basic.showLeds(`
                                            # # . . #
                                            # . . . #
                                            # . . . #
                                            # . . . #
                                            # . . # #
                                            `)
                                        basic.showLeds(`
                                            # . . . #
                                            # . . . #
                                            # . . . #
                                            # . . . #
                                            # . . . #
                                            `)
                                        basic.showLeds(`
                                            . . . . #
                                            # . . . #
                                            # . . . #
                                            # . . . #
                                            # . . . .
                                            `)
                                        basic.showLeds(`
                                            . . . . #
                                            . . . . #
                                            # . . . #
                                            # . . . .
                                            # . . . .
                                            `)
                                        basic.showLeds(`
                                            . . . . #
                                            . . . . #
                                            . . . . .
                                            # . . . .
                                            # . . . .
                                            `)
                                        basic.showLeds(`
                                            . . . . #
                                            . . . . .
                                            . . . . .
                                            . . . . .
                                            # . . . .
                                            `)
                                        basic.clearScreen()
                                        basic.showLeds(`
                                            . . # . .
                                            . . . . .
                                            . . . . .
                                            . . . . .
                                            . . # . .
                                            `)
                                        basic.showLeds(`
                                            . . # . .
                                            . . # . .
                                            . . . . .
                                            . . # . .
                                            . . # . .
                                            `)
                                        basic.showLeds(`
                                            . . . . .
                                            . . # . .
                                            . . # . .
                                            . . # . .
                                            . . . . .
                                            `)
                                        basic.pause(500)
                                        basic.showLeds(`
                                            . . . . .
                                            . . . . .
                                            . . # . .
                                            . . . . .
                                            . . . . .
                                            `)
                                        basic.pause(1000)
                                        basic.showLeds(`
                                            . . . . .
                                            . . # . .
                                            . # # # .
                                            . . # . .
                                            . . . . .
                                            `)
                                        for (let index = 0; index < 4; index++) {
                                            basic.showLeds(`
                                                . . . . .
                                                . . . . .
                                                . . # . .
                                                . . . . .
                                                . . . . .
                                                `)
                                            basic.showLeds(`
                                                # # # # #
                                                # # # # #
                                                # # . # #
                                                # # # # #
                                                # # # # #
                                                `)
                                        }
                                        basic.showLeds(`
                                            # . . . #
                                            . . . . .
                                            . . . . .
                                            . . . . .
                                            # . . . #
                                            `)
                                        basic.showLeds(`
                                            . . . . .
                                            . # . # .
                                            . . . . .
                                            . # . # .
                                            . . . . .
                                            `)
                                        basic.showLeds(`
                                            . . . . .
                                            . . . . .
                                            . . # . .
                                            . . . . .
                                            . . . . .
                                            `)
                                        basic.showLeds(`
                                            . . . . .
                                            . . # . .
                                            . # # # .
                                            . . # . .
                                            . . . . .
                                            `)
                                        basic.showLeds(`
                                            . . # . .
                                            . # # # .
                                            # # # # #
                                            . # # # .
                                            . . # . .
                                            `)
                                        basic.showLeds(`
                                            # . # . #
                                            . . # . .
                                            # # # # #
                                            . . # . .
                                            # . # . #
                                            `)
                                        basic.showLeds(`
                                            # . # . #
                                            . # # # .
                                            # # . # #
                                            . # # # .
                                            # . # . #
                                            `)
                                        basic.showLeds(`
                                            # # # # #
                                            # # . # #
                                            # . . . #
                                            # # . # #
                                            # # # # #
                                            `)
                                        basic.showLeds(`
                                            # # . # #
                                            # . . . #
                                            . . . . .
                                            # . . . #
                                            # # . # #
                                            `)
                                        basic.showLeds(`
                                            # . . . #
                                            . . . . .
                                            . . # . .
                                            . . . . .
                                            # . . . #
                                            `)
                                        basic.showLeds(`
                                            . . . . .
                                            . . # . .
                                            . # # # .
                                            . . # . .
                                            . . . . .
                                            `)
                                        basic.showLeds(`
                                            . . # . .
                                            . . . . .
                                            # . # . #
                                            . . . . .
                                            . . # . .
                                            `)
                                        basic.showLeds(`
                                            . . . . .
                                            . # . # .
                                            . . . . .
                                            . # . # .
                                            . . . . .
                                            `)
                                        basic.showLeds(`
                                            # . . . #
                                            . . . . .
                                            . . . . .
                                            . . . . .
                                            # . . . #
                                            `)
                                        basic.clearScreen()
                                        jerrys_hype += -1
                                    } else {
                                        if (jerrys_hype >= 100) {
                                            basic.showLeds(`
                                                . . . . .
                                                # . . . #
                                                . . . . .
                                                . . # . .
                                                . # . # .
                                                `)
                                            basic.showLeds(`
                                                . . . . .
                                                # . . . #
                                                . # . # .
                                                . . # . .
                                                . # . # .
                                                `)
                                            basic.showLeds(`
                                                . . . . .
                                                # . # . #
                                                . # . # .
                                                . . # . .
                                                . # . # .
                                                `)
                                            basic.showLeds(`
                                                # . # . #
                                                . # . # .
                                                . . # . .
                                                . # . # .
                                                . # . # .
                                                `)
                                            basic.showLeds(`
                                                # . # . #
                                                . # # # .
                                                . . # . .
                                                . # . # .
                                                . # . # .
                                                `)
                                            for (let index = 0; index < 4; index++) {
                                                basic.showLeds(`
                                                    # . # . #
                                                    . # # # .
                                                    . . # . .
                                                    . # . # .
                                                    # . . # .
                                                    `)
                                                basic.showLeds(`
                                                    # . # . #
                                                    . # # # .
                                                    . . # . .
                                                    . # . # .
                                                    . # . # .
                                                    `)
                                                basic.showLeds(`
                                                    # . # . #
                                                    . # # # .
                                                    . . # . .
                                                    . # . # .
                                                    . # . . #
                                                    `)
                                                basic.showLeds(`
                                                    # . # . #
                                                    . # # # .
                                                    . . # . .
                                                    . # . # .
                                                    . # . # .
                                                    `)
                                            }
                                            for (let index = 0; index < 4; index++) {
                                                basic.showLeds(`
                                                    . . # . #
                                                    . # # # .
                                                    # . # . .
                                                    . # . # .
                                                    # . . # .
                                                    `)
                                                basic.showLeds(`
                                                    . . # . .
                                                    . # # # .
                                                    # . # . #
                                                    . # . # .
                                                    . # . # .
                                                    `)
                                                basic.showLeds(`
                                                    # . # . .
                                                    . # # # .
                                                    . . # . #
                                                    . # . # .
                                                    . # . . #
                                                    `)
                                                basic.showLeds(`
                                                    # . # . #
                                                    . # # # .
                                                    . . # . .
                                                    . # . # .
                                                    . # . # .
                                                    `)
                                            }
                                            basic.showLeds(`
                                                # . # . #
                                                . # # # .
                                                . . # . .
                                                . # . # .
                                                . # . # .
                                                `)
                                            basic.showLeds(`
                                                # . # . #
                                                . # # # .
                                                . . # . .
                                                . . # . .
                                                . . # . .
                                                `)
                                            basic.showLeds(`
                                                . . # . .
                                                # # # # #
                                                . . # . .
                                                . . # . .
                                                . . # . .
                                                `)
                                            for (let index = 0; index < 4; index++) {
                                                basic.showLeds(`
                                                    . . # . .
                                                    . # # # .
                                                    . . # . .
                                                    . . # . .
                                                    . . . . .
                                                    `)
                                                basic.showLeds(`
                                                    . . . # .
                                                    . . # # #
                                                    . . . # .
                                                    . . . # .
                                                    . . . . .
                                                    `)
                                                basic.showLeds(`
                                                    . . . . .
                                                    . . . # .
                                                    . . # # #
                                                    . . . # .
                                                    . . . # .
                                                    `)
                                                basic.showLeds(`
                                                    . . . . .
                                                    . . # . .
                                                    . # # # .
                                                    . . # . .
                                                    . . # . .
                                                    `)
                                                basic.showLeds(`
                                                    . . . . .
                                                    . # . . .
                                                    # # # . .
                                                    . # . . .
                                                    . # . . .
                                                    `)
                                                basic.showLeds(`
                                                    . # . . .
                                                    # # # . .
                                                    . # . . .
                                                    . # . . .
                                                    . . . . .
                                                    `)
                                            }
                                            basic.showLeds(`
                                                # . . . #
                                                . . # . .
                                                . # # # .
                                                . . # . .
                                                # . # . #
                                                `)
                                            basic.pause(1000)
                                            basic.clearScreen()
                                            basic.showString("GOD LOVES YOU")
                                            basic.clearScreen()
                                            jerrys_hype += -1
                                        } else {
                                            if (jerrys_hype >= 10) {
                                                basic.pause(100)
                                                basic.showLeds(`
                                                    # # # # #
                                                    . . . . .
                                                    . . . . .
                                                    . . . . .
                                                    . . . . .
                                                    `)
                                                basic.pause(100)
                                                basic.showLeds(`
                                                    # # # # #
                                                    # # # # #
                                                    . . . . .
                                                    . . . . .
                                                    . . . . .
                                                    `)
                                                basic.pause(100)
                                                basic.showLeds(`
                                                    # # # # #
                                                    # # # # #
                                                    # # # # #
                                                    . . . . .
                                                    . . . . .
                                                    `)
                                                basic.pause(100)
                                                basic.showLeds(`
                                                    # # # # #
                                                    # # # # #
                                                    # # # # #
                                                    # # # # #
                                                    . . . . .
                                                    `)
                                                basic.pause(100)
                                                basic.clearScreen()
                                                for (let index = 0; index < 3; index++) {
                                                    basic.showLeds(`
                                                        # # # # #
                                                        # # # # #
                                                        # # # # #
                                                        # # # # #
                                                        # # # # #
                                                        `)
                                                    basic.showLeds(`
                                                        . . . . .
                                                        . . . . .
                                                        . . . . .
                                                        . . . . .
                                                        . . . . .
                                                        `)
                                                }
                                                basic.clearScreen()
                                                basic.pause(200)
                                                for (let index = 0; index < 3; index++) {
                                                    basic.showLeds(`
                                                        # # # # #
                                                        # # # # #
                                                        # # # # #
                                                        # # # # #
                                                        # # # # #
                                                        `)
                                                    basic.pause(500)
                                                    basic.showLeds(`
                                                        . . . . .
                                                        . . . . .
                                                        . . . . .
                                                        . . . . .
                                                        . . . . .
                                                        `)
                                                }
                                                basic.clearScreen()
                                                basic.pause(200)
                                                for (let index = 0; index < 3; index++) {
                                                    basic.showLeds(`
                                                        # # # # #
                                                        # # # # #
                                                        # # # # #
                                                        # # # # #
                                                        # # # # #
                                                        `)
                                                    basic.showLeds(`
                                                        . . . . .
                                                        . . . . .
                                                        . . . . .
                                                        . . . . .
                                                        . . . . .
                                                        `)
                                                }
                                                basic.pause(100)
                                                basic.showLeds(`
                                                    . . . . .
                                                    # # # # #
                                                    # # # # #
                                                    # # # # #
                                                    # # # # #
                                                    `)
                                                basic.pause(100)
                                                basic.showLeds(`
                                                    . . . . .
                                                    . . . . .
                                                    # # # # #
                                                    # # # # #
                                                    # # # # #
                                                    `)
                                                basic.pause(100)
                                                basic.showLeds(`
                                                    . . . . .
                                                    . . . . .
                                                    . . . . .
                                                    # # # # #
                                                    # # # # #
                                                    `)
                                                basic.pause(100)
                                                basic.showLeds(`
                                                    . . . . .
                                                    . . . . .
                                                    . . . . .
                                                    . . . . .
                                                    # # # # #
                                                    `)
                                                basic.clearScreen()
                                                jerrys_hype += -1
                                            } else {
                                                if (jerrys_hype >= 5) {
                                                    basic.showLeds(`
                                                        # . . . .
                                                        . . . . .
                                                        . . . . .
                                                        . . . . .
                                                        . . . . #
                                                        `)
                                                    basic.showLeds(`
                                                        # # . . .
                                                        . . . . .
                                                        . . . . .
                                                        . . . . .
                                                        . . . # #
                                                        `)
                                                    basic.showLeds(`
                                                        # # # . .
                                                        . . . . .
                                                        . . . . .
                                                        . . . . .
                                                        . . # # #
                                                        `)
                                                    basic.showLeds(`
                                                        # # # # .
                                                        . . . . .
                                                        . . . . .
                                                        . . . . .
                                                        . # # # #
                                                        `)
                                                    basic.showLeds(`
                                                        # # # # #
                                                        . . . . .
                                                        . . . . .
                                                        . . . . .
                                                        # # # # #
                                                        `)
                                                    basic.showLeds(`
                                                        # # # # #
                                                        . . . . #
                                                        . . . . .
                                                        # . . . .
                                                        # # # # #
                                                        `)
                                                    basic.showLeds(`
                                                        # # # # #
                                                        . . . # #
                                                        . . . . .
                                                        # # . . .
                                                        # # # # #
                                                        `)
                                                    basic.showLeds(`
                                                        # # # # #
                                                        . . # # #
                                                        . . . . .
                                                        # # # . .
                                                        # # # # #
                                                        `)
                                                    basic.showLeds(`
                                                        # # # # #
                                                        . # # # #
                                                        . . . . .
                                                        # # # # .
                                                        # # # # #
                                                        `)
                                                    basic.showLeds(`
                                                        # # # # #
                                                        # # # # #
                                                        . . . . .
                                                        # # # # #
                                                        # # # # #
                                                        `)
                                                    basic.showLeds(`
                                                        # # # # #
                                                        # # # # #
                                                        # . . . #
                                                        # # # # #
                                                        # # # # #
                                                        `)
                                                    basic.showLeds(`
                                                        # # # # #
                                                        # # # # #
                                                        # # . # #
                                                        # # # # #
                                                        # # # # #
                                                        `)
                                                    basic.showLeds(`
                                                        # # # # #
                                                        # # # # #
                                                        # # # # #
                                                        # # # # #
                                                        # # # # #
                                                        `)
                                                    led.setBrightness(220)
                                                    led.setBrightness(189)
                                                    led.setBrightness(154)
                                                    led.setBrightness(125)
                                                    led.setBrightness(93)
                                                    led.setBrightness(62)
                                                    led.setBrightness(31)
                                                    led.setBrightness(0)
                                                    led.setBrightness(220)
                                                    led.setBrightness(0)
                                                    led.setBrightness(220)
                                                    basic.showString("fuckin help me! GOD!")
                                                    led.setBrightness(31)
                                                    led.setBrightness(62)
                                                    led.setBrightness(93)
                                                    led.setBrightness(125)
                                                    led.setBrightness(154)
                                                    led.setBrightness(189)
                                                    led.setBrightness(220)
                                                    basic.showLeds(`
                                                        # # # # #
                                                        # # # # #
                                                        # # . # #
                                                        # # # # #
                                                        # # # # #
                                                        `)
                                                    basic.showLeds(`
                                                        # # # # #
                                                        # # . # #
                                                        # # . # #
                                                        # # . # #
                                                        # # # # #
                                                        `)
                                                    basic.showLeds(`
                                                        # # . # #
                                                        # # . # #
                                                        # # . # #
                                                        # # . # #
                                                        # # . # #
                                                        `)
                                                    basic.showLeds(`
                                                        # . . # .
                                                        # # . # #
                                                        # # . # #
                                                        # # . # #
                                                        . # . . #
                                                        `)
                                                    basic.showLeds(`
                                                        # . . # .
                                                        # . . # .
                                                        # # . # #
                                                        . # . . #
                                                        . # . . #
                                                        `)
                                                    basic.showLeds(`
                                                        # . . # .
                                                        # . . # .
                                                        . . . . .
                                                        . # . . #
                                                        . # . . #
                                                        `)
                                                    basic.showLeds(`
                                                        # . . # .
                                                        . . . . .
                                                        . . . . .
                                                        . . . . .
                                                        . # . . #
                                                        `)
                                                    basic.clearScreen()
                                                    jerrys_hype += -1
                                                } else {
                                                    if (jerrys_hype == 1) {
                                                        basic.showString("please, Press A I beg of you, save me. Press A")
                                                        soundExpression.sad.play()
                                                        basic.showLeds(`
                                                            # # . # #
                                                            # # . # #
                                                            . # . . .
                                                            . . . . .
                                                            . . . . .
                                                            `)
                                                        basic.showLeds(`
                                                            # # . # #
                                                            # # . # #
                                                            . . . . .
                                                            . # . . .
                                                            . . . . .
                                                            `)
                                                        basic.showLeds(`
                                                            # # . # #
                                                            # # . # #
                                                            . . . # .
                                                            . . . . .
                                                            . # . . .
                                                            `)
                                                        basic.showLeds(`
                                                            # # . # #
                                                            # # . # #
                                                            . . . . .
                                                            . . . # .
                                                            . . . . .
                                                            `)
                                                        basic.showLeds(`
                                                            # # . # #
                                                            # # . # #
                                                            . . . . .
                                                            . . . . .
                                                            . . . # .
                                                            `)
                                                        basic.showLeds(`
                                                            # # . # #
                                                            # # . # #
                                                            . . . . .
                                                            . . . . .
                                                            . . . . .
                                                            `)
                                                        basic.clearScreen()
                                                        basic.showLeds(`
                                                            . # # # .
                                                            # . . . #
                                                            . . # . .
                                                            # . . . #
                                                            . # # # .
                                                            `)
                                                        basic.showLeds(`
                                                            . # # # .
                                                            # # # # #
                                                            # . # . #
                                                            # . . . #
                                                            . # # # .
                                                            `)
                                                        basic.showLeds(`
                                                            . # # # .
                                                            # # # # #
                                                            # # # # #
                                                            # . . . #
                                                            . # # # .
                                                            `)
                                                        basic.showLeds(`
                                                            . # # # .
                                                            # # # # #
                                                            # # # # #
                                                            # # # # #
                                                            . # # # .
                                                            `)
                                                        basic.showLeds(`
                                                            . # # # .
                                                            # # # # #
                                                            # # # # #
                                                            . # # # .
                                                            . # # # .
                                                            `)
                                                        basic.showLeds(`
                                                            . # # # .
                                                            # # # # #
                                                            # # # # #
                                                            . # # # .
                                                            . . # . .
                                                            `)
                                                        basic.showLeds(`
                                                            . # # # .
                                                            # # # # #
                                                            # # # # #
                                                            . . # . .
                                                            . # # # .
                                                            `)
                                                        basic.showLeds(`
                                                            . # # # .
                                                            # # # # #
                                                            # . # . #
                                                            . # # # .
                                                            . # # # .
                                                            `)
                                                        basic.showLeds(`
                                                            . # # # .
                                                            # . # . #
                                                            # # # # #
                                                            . # # # .
                                                            . # # # .
                                                            `)
                                                        jerrys_hype += -1
                                                    } else {
                                                        if (jerrys_hype == 0) {
                                                            basic.showLeds(`
                                                                . # # # .
                                                                # # # # #
                                                                # . # . #
                                                                . # # # .
                                                                . # # # .
                                                                `)
                                                            basic.showLeds(`
                                                                . # # # .
                                                                # . # . #
                                                                # # # # #
                                                                . # # # .
                                                                . # # # .
                                                                `)
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
})
basic.forever(function () {
    if (jerrys_hype >= 1000) {
        pins.servoWritePin(AnalogPin.P0, 180)
    } else {
        if (jerrys_hype >= 900) {
            pins.servoWritePin(AnalogPin.P0, 167)
        } else {
            if (jerrys_hype >= 800) {
                pins.servoWritePin(AnalogPin.P0, 154)
            } else {
                if (jerrys_hype >= 700) {
                    pins.servoWritePin(AnalogPin.P0, 141)
                } else {
                    if (jerrys_hype >= 600) {
                        pins.servoWritePin(AnalogPin.P0, 128)
                    } else {
                        if (jerrys_hype >= 500) {
                            pins.servoWritePin(AnalogPin.P0, 115)
                        } else {
                            if (jerrys_hype >= 400) {
                                pins.servoWritePin(AnalogPin.P0, 102)
                            } else {
                                if (jerrys_hype >= 300) {
                                    pins.servoWritePin(AnalogPin.P0, 90)
                                } else {
                                    if (jerrys_hype >= 200) {
                                        pins.servoWritePin(AnalogPin.P0, 77.2)
                                    } else {
                                        if (jerrys_hype >= 100) {
                                            pins.servoWritePin(AnalogPin.P0, 64)
                                        } else {
                                            if (jerrys_hype >= 10) {
                                                pins.servoWritePin(AnalogPin.P0, 52.2)
                                            } else {
                                                if (jerrys_hype >= 5) {
                                                    pins.servoWritePin(AnalogPin.P0, 38.2)
                                                } else {
                                                    if (jerrys_hype <= 0) {
                                                        pins.servoWritePin(AnalogPin.P0, 27)
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
})
