wing.addEventListener('click', wingLev);
feather.addEventListener('click', wingFtr);

function wingLev() {
    // 지팡이 없이 마법X
    if (wandPrint.innerText !== 'ACCIO') {
        // aguamenti 지우기
        h1.innerText = '';
        h1.style.backgroundImage = '';
        h1.className = null;

        feather.src = './image/feather.png';
        feather.style.display = 'inline';
    }
}

function wingFtr() {
    document.addEventListener('mousemove', (e) => {
        let mouseX = e.clientX;
        let mouseY = e.clientY;
        feather.style.left = `${mouseX}px`;
        feather.style.top = `${mouseY}px`;
        feather.style.transform = 'translate(-450%, -450%)';
    });
}
