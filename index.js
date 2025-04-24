const audio = document.getElementById('bgMusic');
function trost () {
    document.querySelector('.no').classList.remove('hide')
    document.querySelector('.no').classList.add('nou')
    document.getElementById('back').classList.remove('hide')
    document.querySelector('.no').classList.add("animate__animated")
    document.querySelector('.no').classList.add("animate__bounceIn")
    audio.muted = false
    audio.play()
}

function feli () {
    document.querySelector('.obvio').classList.remove('hide')
    document.querySelector('.obvio').classList.add('popio')
    document.getElementById('back').classList.remove('hide')
    document.querySelector('.obvio').classList.add("animate__animated")
    document.querySelector('.obvio').classList.add("animate__bounceIn")
    audio.muted = false
    audio.play()
}