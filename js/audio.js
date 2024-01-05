let applause = new Audio('../assets/audio/applause.wav')
let click = new Audio('../assets/audio/click.wav')
let ding = new Audio('../assets/audio/ding.wav')
let sadTrombone = new Audio('../assets/audio/sadtrombone.wav')
let pianoWrong = new Audio('../assets/audio/pianowrong.wav')
let levelSuccess = new Audio('../assets/audio/levelsuccesstrimmed.mp3')
let levelFail = new Audio('../assets/audio/levelfailtrimmed.mp3')

function playApplause() {
 applause.volume = 0.15
 applause.play()
}
function playClick() {
 click.volume = 0.15
 click.play()
}
function playDing() {
 ding.volume = 0.08
 ding.play()
}
function playTrombone() {
 sadTrombone.volume = 0.15
 sadTrombone.play()
}
function playPianoWrong() {
 pianoWrong.volume = 0.20
 pianoWrong.play()
}
function playLevelSucceed() {
 levelSuccess.volume = 0.15
 levelSuccess.play()
}
function playLevelFail() {
 levelFail.volume = 0.15
 levelFail.play()
}
function stopAudio() {
 levelFail.pause()
 levelFail.currentTime = 0
 levelSuccess.pause()
 levelSuccess.currentTime = 0
}

export {
 playApplause,
 playClick,
 playDing,
 playTrombone,
 playPianoWrong,
 playLevelSucceed,
 playLevelFail,
 stopAudio
}