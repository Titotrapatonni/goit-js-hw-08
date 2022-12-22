import Player from '@vimeo/player';
var throttle = require('lodash.throttle');
const KEY = 'videoplayer-current-time';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

function onTimeUpdate(currentTime) {
  localStorage.setItem(KEY, currentTime.seconds);
}

player.on('timeupdate', throttle(onTimeUpdate, 1000));
player.setCurrentTime(Number(localStorage.getItem(KEY)) || 0);
