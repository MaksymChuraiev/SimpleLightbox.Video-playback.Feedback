import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const currentTime = 'videoplayer-current-time';
const player = new Player('vimeo-player');

player.on('timeupdate', throttle(onCurrentTime, 1000));

onSetCurrentTime();

function onCurrentTime({ seconds }) {
  localStorage.setItem(currentTime, seconds);
}

function onSetCurrentTime() {
  if (!localStorage.getItem(currentTime)) {
    return;
  }

  player.setCurrentTime(localStorage.getItem(currentTime));
}

// const iframe = document.querySelector('iframe');
// const player = new Vimeo.Player(iframe);

// player.on('timeupdate', function () {
//   player.getCurrentTime().then(function (seconds) {
//     console.log(seconds);
//   });

//   // player.setCurrentTime(0).then(function (seconds) {
//   //   console.log(seconds);
//   // });
// });

// player.off('eventName', function () {
//   player.getCurrentTime().then(function (seconds) {
//     console.log(seconds);
//   });
// });

// // player.getVideoTitle().then(function (title) {
// //   console.log('title:', title);
// // });
