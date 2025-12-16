// 10. 関数の定義
function collorchange(num) {
    document.body.style.backgroundColor =
        'rgb(' +
        settingColors[num].r + ',' +
        settingColors[num].g + ',' +
        settingColors[num].b +
        ')';
}

// 1. オブジェクトで色を用意
// 3. 4色制作して、配列にする
const settingColors =
    [
        { r: 255, g: 0, b: 0 }, //赤
        { r: 0, g: 255, b: 0 }, //緑
        { r: 0, g: 0, b: 255 }, //青
        { r: 255, g: 255, b: 0 } //黄色
    ]

// 5. documentの縦の長さ取得
const fullHeight = document.documentElement.scrollHeight;
console.log(fullHeight);
// 8. スクロール量を計算
const viewHeight = document.documentElement.clientHeight;
const scrollable = fullHeight - viewHeight;

// 2. オブジェクトの色をbodyの背景色にする
const bodyElm = document.body;
console.log(bodyElm);
document.body.style.backgroundColor =
    'rgb(' +
    settingColors[0].r + ',' +
    settingColors[0].g + ',' +
    settingColors[0].b +
    ')';

// 4. スクロールするたびにイベント
window.addEventListener('scroll', function () {
    console.log('すくろーーーる')
    //現在のスクロール位置
    const scrolly = window.scrollY;
    // console.log(scrolly);
    // console.log(scrollable);
    // 6. 1 / 4進んだら色が変わるようにする
    // 7. スクロールを4分割
    // 9. 変数scrollableを4分割
    if (scrolly < (scrollable * 1) / 4) {
        // 11. 関数の呼び出し（実行）の実引数
        collorchange(0);
    } else if (scrolly < (scrollable * 1) / 2) {
        collorchange(1);
    } else if (scrolly < (scrollable * 3) / 4) {
        collorchange(2);
    } else {
        collorchange(3);
    }
})

window.addEventListener('scroll', function () {
    const button = document.querySelector('.movetoTop');
    console.log(button);
    if (window.scrollY >= 500) {
        button.style.display = 'block';
    } else {
        button.style.display = 'none';
    }
    console.log(scrollY);
})

const button = document.querySelector('.movetoTop');
console.log(button);
button.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})