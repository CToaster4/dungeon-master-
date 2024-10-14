controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 2 . . . . . . . . . . . 
        . 2 2 2 2 9 9 9 9 9 9 9 9 9 9 . 
        . 2 2 2 2 9 9 9 9 9 9 9 9 9 9 9 
        . . . . 2 . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 150, 6)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy = -70
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        .....77777......
        ....7777777.....
        ....22eeee......
        ....22efeee.....
        .....eee22......
        .....eeeee......
        ...dddddddddd...
        ..dddddddddddd..
        ..eeddddddddee..
        ..eeddddddddee..
        ..eeddddddddee..
        ..eeddddddddee..
        ..eeddddddddee..
        ..eeddddddddee..
        ..eeffff6fffee..
        ..ee77777777ee..
        ....77777777....
        ....777..777....
        ....eee..eee....
        ....eee..eee....
        ....eee..eee....
        ....ddd..ddd....
        ....fff..fff....
        ....ffff.ffff...
        `,img`
        .....77777......
        ....7777777.....
        ....22eeee......
        ....22efeee.....
        .....eee22......
        .....eeeee......
        ...dddddddddd...
        ..dddddddddddd..
        ..eeddddddddee..
        ..eeddddddddee..
        ..eeddddddddee..
        ..eeddddddddee..
        ..eeddddddddee..
        ..eeddddddddee..
        ..eeffff6fffee..
        ..ee77777777ee..
        ....7777777777..
        ....777....eee..
        ....eee....eee..
        ....eee....eee..
        ....eee....ddd..
        ....ddd....fff..
        ....fff....ffff.
        ....ffff........
        `,img`
        .....77777......
        ....7777777.....
        ....22eeee......
        ....22efeee.....
        .....eee22......
        .....eeeee......
        ...dddddddddd...
        ..dddddddddddd..
        ..eeddddddddee..
        ..eeddddddddee..
        ..eeddddddddee..
        ..eeddddddddee..
        ..eeddddddddee..
        ..eeddddddddee..
        ..eeffff6fffee..
        ..ee77777777ee..
        ....7777777777..
        ....777....eee..
        ....eee....eee..
        ....eee....eee..
        ....eee....ddd..
        ....ddd....fff..
        ....fff....ffff.
        ....ffff........
        `],
    200,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    sprites.destroy(mySprite, effects.fountain, 500)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile10`, function (sprite, location) {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        `],
    500,
    false
    )
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(mySprite2, effects.spray, 500)
    sprites.destroy(projectile, effects.none, 500)
})
let projectile: Sprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
let textSprite = textsprite.create("welcome")
textSprite.setPosition(52, 126)
mySprite = sprites.create(assets.image`Human being`, SpriteKind.Player)
mySprite2 = sprites.create(assets.image`forest enemy`, SpriteKind.Enemy)
mySprite.setPosition(34, 90)
mySprite.ay = 100
mySprite2.ay = 100
scene.setBackgroundColor(10)
tiles.setCurrentTilemap(tilemap`W1 Level 1`)
controller.moveSprite(mySprite, 100, 0)
mySprite.ay = 127
scene.cameraFollowSprite(mySprite)
let Gravity = 7
info.setLife(3)
