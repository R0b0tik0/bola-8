let Respuestas: string[] = []
input.onGesture(Gesture.Shake, function () {
    basic.showString("" + (Respuestas._pickRandom()))
})
basic.forever(function () {
    Respuestas = ["Si", "No", "Ni idea"]
})
