// 나무 종류
let woodList = [
    'Acacia',
    'Alder',
    'Apple',
    'Ash',
    'Aspen',
    'Beech',
    'Birch',
    'Blackthorn',
    'Black Walnut',
    'Cedar',
    'Cherry',
    'Chestnut',
    'Cypress',
    'Dogwood',
    'Ebony',
    'Elder',
    'Elm',
    'English Oak',
    'Fir',
    'Hawthorn',
    'Hazel',
    'Holly',
    'Hornbeam',
    'Ivy',
    'Larch',
    'Laurel',
    'Mahogany',
    'Maple',
    'Pear',
    'Pine',
    'Poplar',
    'Prickly Ash',
    'Red Oak',
    'Redwood',
    'Reed',
    'Rosewood',
    'Rowan',
    'Sliver Lime',
    'Snakewood',
    'Spruce',
    'Suger Maple',
    'Swamp Mayhaw',
    'Sycamore',
    'Tamarack',
    'Vine',
    'Walnut',
    'Willow',
    'Yew',
];

// 코어 종류
let coreList = [
    'Dragon heartstring',
    'Phoenix feather',
    'Unicorn tail hair',
    'Veela hair',
    'Thestral tail hair',
    'Troll whisker',
    'Coral',
    'Dittany Stalk',
    'Thunderbird tail feather',
    'Wampus cat hair',
    'White River Monster spine',
    'Rougarou hair',
    'Horned Serpent horn',
    'Snallygaster heartstring',
    'Jackalope antler',
    'Kneazle whisker',
    'Kelpie hair',
    'Basilisk horn',
    'Curupira hair',
    'African mermaid hair',
];

// 길이
let lengthList = [8, 8.25, 8.5, 8.75, 9, 9.25, 9.5, 9.75, 10, 10.25, 10.5, 10.75, 11, 12.25, 12.5, 12.75, 13, 13.25, 13.5, 13.75, 14, 14.25, 14.5, 14.75, 15, 15.25, 15.5, 15.75, 16, 16.25, 16.5, 16.75, 17, 17.25, 17.5, 17.75, 18];

// cursor 지팡이로 바꾸기
wandPrint.addEventListener(
    'click',
    function () {
        const body = document.querySelector('body');
        let idx = Math.floor(Math.random() * 23);
        body.style.cursor = `url("./image/cursor/${idx}.png"), auto`;
    },
    { once: true }
);

// accio
wandPrint.addEventListener('click', makeWand, { once: true });

function makeWand() {
    let wand = {};
    let woods = Math.floor(Math.random() * 48);
    let cores = Math.floor(Math.random() * 20);
    let lengths = Math.floor(Math.random() * 37);
    wand['Wood'] = woodList[woods];
    wand['Core'] = coreList[cores];
    wand['Length'] = lengthList[lengths];
    wandPrint.className = 'fadein';
    wandPrint.innerHTML = `Wood: <b>${wand['Wood']}</b><br>Core: <b>${wand['Core']}</b><br>Length: <b>${wand['Length']} Inch</b>`;
}
