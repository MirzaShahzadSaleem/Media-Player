/* Get Our Elements */
const player = document.querySelector('.player');
const video = document.querySelector('.viewer');

const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress__filled');
const toggle = document.querySelector('.toggle');
const skipButtons = document.querySelectorAll('[data-skip]');
const ranges = document.querySelector('.player__slider');


//console.log({skipButtons, ranges, video})
// console.log(ranges.value);
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
   // console.log(this.dataset.skip);
    video.currentTime += parseFloat(this.dataset.skip);
}

// function handleRangeUpdate() {
//     video.playbackRate[this.value] = this.value;
//      console.log('range working');
//     //video.playbackRate = 2;
// }

function playbackRate() {
    video[this.name] = this.value;
    video.playbackRate = video[this.name];

    console.log(video[this.name]);
}

function handleProgress() {
    const percent =(video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

/* Hook up the event listeners */
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);
ranges.addEventListener('change',playbackRate);
//ranges.addEventListener('mousemove', handleRangeUpdate);

toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip));

// ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
// ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));


// <input type="range" name="volume" class="player__slider" min="0" max="1" step="0.2" value="1">
