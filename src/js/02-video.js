const throttle = require("lodash.throttle");

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

if (localStorage.getItem("videoplayer-current-time") !== null) {
    player.setCurrentTime(localStorage.getItem("videoplayer-current-time"));
};

const saveCurrentTime = function(data) {
    
    localStorage.setItem("videoplayer-current-time", data.seconds);

};

player.on('timeupdate',  throttle(saveCurrentTime, 1000));