function showMyName () {
    basic.showString("My name is:")
    basic.pause(100)
    basic.showString("Lee Boden")
}
let count = 10
while (count > 0) {
    basic.showNumber(count)
    count += 0 - 1
}
showMyName()
