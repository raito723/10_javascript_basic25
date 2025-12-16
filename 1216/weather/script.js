// ボタンを押す
const button = document.querySelector('.loadBtn');
button.addEventListener('click', function () {
    console.log('ボタン押したよ');
})
const result = document.querySelector('.box');
// fetchで APIにアクセス
// エンドポイント
fetch('https://www.jma.go.jp/bosai/forecast/data/forecast/230000.json')
    // JSONを解析
    .then(function (response) {
        //取得したjsonをオブジェクトに変換するメソッド「.json()」
        return response.json();
    })
    // 必要な情報だけ取り出す
    .then(function (json) {
        //document.body.textContent = JSON.stringify(json)
        console.log(json[0].timeSeries[0].areas[0].weathers[0]);//天気：晴れ
        console.log(json[0].timeSeries[2].areas[0].temps[0]);//最高気温：12
        console.log(json[0].timeSeries[2].areas[0].temps[1]);//最低気温：12
        console.log(json[0].timeSeries[1].areas[0].pops[0]);//降水確率（午前）０％
        console.log(json[0].timeSeries[1].areas[0].pops[1]);//降水確率（午後）０％
        const weather = json[0].timeSeries[0].areas[0].weathers[0];
        const maxtemp = json[0].timeSeries[2].areas[0].temps[0];
        const mintemp = json[0].timeSeries[2].areas[0].temps[1];
        const am = json[0].timeSeries[1].areas[0].pops[0];
        const pm = json[0].timeSeries[1].areas[0].pops[1]

        // HTMLに表示する
        result.innerHTML = `
            <h2> 今日の天気</h2><p>天気：${weather}</p><p>最高気温：${maxtemp}</p><p>最低気温：${mintemp}</p><p>降水確率（午前）：${am}</p><p>降水確率（午後）：${pm}</p>`
    })
    .catch()

// 読み込み中は「読み込み中…」を表示
// async / awaitで書き直す