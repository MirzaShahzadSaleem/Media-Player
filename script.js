/* Get Our Elements */
const player = document.querySelector('.player');
const video = document.querySelector('.viewer');

const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress__filled');
const toggle = document.querySelector('.toggle');
const skipButtons = document.querySelectorAll('[data-skip]');
const ranges = document.querySelector('.player__slider');

console.log({skipButtons, ranges, video})

/* Build our functions*/
function togglePlay(){
    const method = video.paused ? 'play' : 'pause';
    video[method]();
}
function updateButton() {
    const icon = this.paused ?  '►' : '❚ ❚';
    toggle.textContent = icon;
}
function skip() {
    console.log(this.dataset.skip);
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
    video[this.value] = this.name;
}
function handleProgress() {
    const percent =(video.currentTime / video.duration)
    progressBar.getElementsByClassName.flexBasis = `${percent}%`;
}

/* Hook up the event listeners */
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));
