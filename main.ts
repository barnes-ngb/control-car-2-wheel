radio.setGroup(7)
let command = 0
let screeny = image.create(160, 120)
scene.setBackgroundImage(screen)
let names = ["STOP", "FORWARD", "BACK", "LEFT", "RIGHT"]
game.onUpdateInterval(100, function () {
    if (controller.up.isPressed()) {
        command = 1
    } else if (controller.down.isPressed()) {
        command = 2
    } else if (controller.left.isPressed()) {
        command = 3
    } else if (controller.right.isPressed()) {
        command = 4
    } else {
        command = 0
    }
    radio.sendNumber(command)
    screeny.fill(9)
    screeny.print("CAR REMOTE", 50, 20, 1)
    screeny.print(names[command], 60, 60, 15)
})
