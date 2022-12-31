agua.addEventListener('click', aguamenti);

// 깃털 위치 제자리
agua.addEventListener('click', () => {
    document.addEventListener('mousemove', (e) => {
        let mouseX = '300';
        let mouseY = '150';
        feather.style.left = `${mouseX}px`;
        feather.style.top = `${mouseY}px`;
        feather.style.transform = '';
    });
});

function aguamenti() {
    // 지팡이 없이 마법X
    if (wandPrint.innerText !== 'ACCIO') {
        // wingardium leviosa 지우기
        feather.style.display = 'none';

        // incendio 지우기
        h1.innerText = '';
        h1.style.backgroundImage = '';
        h1.className = null;

        h1.innerText = 'aguamenti';
    }
}

h1.addEventListener('click', () => {
    if (h1.innerText == 'AGUAMENTI') {
        h1.className = 'water';
    }
});
