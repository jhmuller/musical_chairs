let timer = 0
let limit = 0
input.onGesture(Gesture.Shake, function () {
    timer = 0
    limit = randint(3, 5)
    basic.showNumber(limit)
    basic.pause(100)
    while (true) {
        music.playMelody("C5 B A G G A B C5 ", 293)
        if (timer > limit) {
            music.playMelody("B A G F E D C C ", 478)
            basic.showIcon(IconNames.Heart)
            break;
        }
        timer += 1
    }
})
