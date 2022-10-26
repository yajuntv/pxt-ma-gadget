let 미세먼지 = 0
music.startMelody(music.builtInMelody(Melodies.Nyan), MelodyOptions.Once)
OLED.init(128, 64)
basic.forever(function () {
    OLED.clear()
    OLED.writeString("Dust(ug/m3): ")
    미세먼지 = Environment.ReadDust(DigitalPin.P13, AnalogPin.P1)
    OLED.writeNum(미세먼지)
    if (미세먼지 > 30) {
        basic.showIcon(IconNames.No)
        music.playTone(262, music.beat(BeatFraction.Whole))
    } else {
        basic.showIcon(IconNames.Heart)
        music.startMelody(music.builtInMelody(Melodies.Ode), MelodyOptions.Once)
    }
    basic.pause(2000)
})
