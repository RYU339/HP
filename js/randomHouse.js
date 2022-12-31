// 말하는 모자
const talk = ['Hmmm.. difficult, very difficult.', 'Plenty of courage, I see.', 'Not a bad mind, either.', "There's talent.", 'And a thirst to prove yourself.'];
const result = "Right then. It's..";

// 모자 대사
// 한 줄씩 나왔다가 fadeout
sortHouse.addEventListener(
    'load',
    () => {
        // event.preventDefault();
        // talk.push('');
        for (let i in talk) {
            setTimeout(() => {
                p1.innerText = talk[i];
                p1.className = 'fadeout';
            }, i * 2900);
        }
    },
    { once: true }
);

// 기숙사 선택
// once:true로 한 번만 클릭되게
sortHouse.addEventListener(
    'click',
    () => {
        p2.innerText = result;
        p2.className = 'fadeoutOnce';
        setTimeout(() => {
            sortHouse.className = 'fadein';
            let houseIdx = Math.floor(Math.random() * 4);
            sortHouse.src = `./image/crest/${houseIdx}.png`;
            sortHouse.style.opacity = '65%';
            sortHouse.style.width = '25%';
            sortHouse.style.height = '25%';
            // 기숙사 정해지면 주문 나오게 hidden에서 visible로
            setTimeout(() => {
                header.className = 'fadein';
                footer.className = 'fadein';
                header.style.visibility = 'visible';
                footer.style.visibility = 'visible';
            }, 5000);
        }, 2000);
    },
    { once: true }
);
