// id 불러오기
const body = document.querySelector('body');
const audio = document.querySelector('audio');
// header
const header = document.getElementById('header');
const wandPrint = document.getElementById('wand');
const lumos = document.getElementById('lumos');
// main
const house = document.getElementById('house');
const sortHouse = document.getElementById('sortHouse');
const p1 = document.getElementById('p1');
const p2 = document.getElementById('p2');
const loader = document.getElementById('loader');
const h1 = document.querySelector('h1');
// footer
const footer = document.getElementById('footer');
const sound = document.getElementById('sound');
const ince = document.getElementById('incendio');
const agua = document.getElementById('aguamenti');
const wing = document.getElementById('wing');
const feather = document.getElementById('feather');

// body 클릭하면 배경음악 재생
body.addEventListener(
    'click',
    () => {
        audio.currentTime = 3.5;
        audio.play();
    },
    { once: true }
);
