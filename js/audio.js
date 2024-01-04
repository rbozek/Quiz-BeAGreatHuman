let click = new Audio('../assets/audio/click.wav')
let ding = new Audio('../assets/audio/ding.wav')
let sadTrombone = new Audio('../assets/audio/sadtrombone.wav')
let levelSuccess = new Audio('../assets/audio/levelsuccesstrimmed.mp3')
let levelFail = new Audio('../assets/audio/levelfailtrimmed.mp3')

function playClick() {
 click.volume = 0.15
 click.play()
}
function playDing() {
 ding.volume = 0.15
 ding.play()
}
function playTrombone() {
 sadTrombone.volume = 0.15
 sadTrombone.play()
}
function playLevelSucceed() {
 levelSuccess.volume = 0.15
 levelSuccess.play()
}
function playLevelFail() {
 levelFail.volume = 0.15
 levelFail.play()
}

export {
 playClick,
 playDing,
 playTrombone,
 playLevelSucceed,
 playLevelFail
}