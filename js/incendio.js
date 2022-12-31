ince.addEventListener('click', incendio);

// 깃털 위치 제자리
ince.addEventListener('click', () => {
    document.addEventListener('mousemove', (e) => {
        let mouseX = '300';
        let mouseY = '150';
        feather.style.left = `${mouseX}px`;
        feather.style.top = `${mouseY}px`;
        feather.style.transform = '';
    });
});

function incendio() {
    // 지팡이 없이 마법X
    if (wandPrint.innerText !== 'ACCIO') {
        // wingardium leviosa 지우기
        feather.style.display = 'none';

        // aguamenti 지우기
        h1.innerText = '';
        h1.style.backgroundImage = '';
        h1.className = null;

        h1.innerText = 'incendio';
    }
}

h1.addEventListener('click', () => {
    if (h1.innerText == 'INCENDIO') {
        h1.className = 'fire';
    }
});
