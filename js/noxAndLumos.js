lumos.addEventListener('click', lightOn);

// 깃털 위치 제자리
lumos.addEventListener('click', () => {
    document.addEventListener('mousemove', (e) => {
        let mouseX = '300';
        let mouseY = '150';
        feather.style.left = `${mouseX}px`;
        feather.style.top = `${mouseY}px`;
        feather.style.transform = '';
    });
});

function lightOn() {
    // 지팡이 없이 마법X
    if (wandPrint.innerText !== 'ACCIO') {
        // wingardium leviosa 지우기
        feather.style.display = 'none';

        // aguamenti incendio 지우기
        h1.innerText = '';
        h1.style.backgroundImage = '';
        h1.className = null;

        if (lumos.innerText == 'NOX') {
            body.style.background = '#000';
            body.style.color = '#fff';
            lumos.innerText = 'LUMOS';
        } else {
            body.style.background = '#fff';
            body.style.color = '#000';
            lumos.innerText = 'NOX';
        }
    }
}
