// 깃털 위치 제자리
sound.addEventListener('click', () => {
    document.addEventListener('mousemove', (e) => {
        let mouseX = '300';
        let mouseY = '150';
        feather.style.left = `${mouseX}px`;
        feather.style.top = `${mouseY}px`;
        feather.style.transform = '';
    });
});

sound.addEventListener('click', () => {
    // 지팡이 없이 마법X
    if (wandPrint.innerText !== 'ACCIO') {
        // wingardium leviosa 지우기
        feather.style.display = 'none';

        // aguamenti incendio 지우기
        h1.innerText = '';
        h1.style.backgroundImage = '';
        h1.className = null;

        if (sound.innerText == 'SILENCIO') {
            sound.innerText = 'SONORUS';
            audio.pause();
            audio.currentTime = 4;
        } else {
            sound.innerText = 'SILENCIO';
            audio.play();
        }
    }
});
