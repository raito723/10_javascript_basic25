const modaloverlay = document.querySelector('#modaloverlay');
const closeBtn = document.querySelector('.closeBtn');
const openBtn = document.querySelectorAll('.openBtn');
const modal_title = document.querySelector('#modal_title');
const modal_img = document.querySelector('#modal_img');
const modal_ruck = document.querySelector('#modal_ruck');
const modal_num = document.querySelector('#modal_num');
const modal_color = document.querySelector('#modal_color');
const ruck_container = [
    "12月は行動と決断の月。前半にアイデアが湧き、15日以降は現実的に進められる時期。年末に向けて情熱を確かな成果に変えていけます。",
    "安定志向が強まり、関係や資産面で実務的な整備が進むとき。感情よりも計画と確実さを重視すると吉。身近な人との絆が深まります。",
    "コミュニケーションと関係性がテーマ。対話や再接続で進展があり、パートナーとの理解が深まる。情報がチャンスを呼びます。",
    "仕事と健康にスポットライト。日常のルーティン改善で成果が出やすく、人間関係では境界を引くことで落ち着きを得られます。",
    "創造性と楽しみが復活。年末の新月や惑星移動でクリエイティブなプロジェクトや恋が盛り上がる予感。自己表現が評価されます。",
    "職場や家族の課題に向き合う時期。細部の手直しで信頼を得られるとき。感情的な対立は冷静さで切り抜けて。年末に向けた整理が吉。",
    "価値観や意見のすり合わせが求められる場面あり。対話で視野が広がり、長期的な人間関係や目標の再評価が進みます。妥協と調整が鍵。",
    "金銭面や内面的変容にスポット。不要なものを手放すことで新しい基盤ができる。感情の深掘りが吉と出ます。 ",
    "成長と再出発のチャンス。旅行や学びに追い風があり、年末は責任感が高まって目標にコミットしやすい時期です。",
    "責任と構築の時。仕事や長期計画に注力するときで、年末の努力が来年の基礎になる。堅実さが評価されます。",
    "独創性とグループ関係の調整がテーマ。共同作業で新しい役割が見つかり、個性を活かす場面が増えます。変化は味方。",
    "内省と統合の時期。過去の学びをまとめて新たな方向へ進めるとき。直感を信じ、感情のケアを優先して吉。"
];
const num_containar = ["19", "13", "3", "9", "43", "11", "6", "4", "8", "1", "5", "7"]
const color_comtainer = ["red", "green", "yellow", "silver", "gold", "navy", "pink", "darkviolet", "skyblue", "brown", "turquoise", "lavender"];
const master = Math.floor(Math.random(Math.random()) * 12);
console.log(master);

//クリックイベント
document.querySelectorAll(".openBtn").forEach(img => {
    img.addEventListener("click", function () {
        const imgName = this.src.split("?")[0].split("/").pop().split(".")[0];
        const num = Number(imgName)
        const result = master + num
        const src = this.src;
        const alt = this.alt;
        //星座名表示
        modal_title.textContent = alt;
        //星座画像表示
        modal_img.innerHTML = `<img src="${src}" class="viewer-img">`;
        //運勢表示
        if (result < 12) {
            modal_ruck.textContent = ruck_container[result];
        } else {
            modal_ruck.textContent = ruck_container[(result - 12)];
        }
        //ラッキーナンバー表示
        if (result < 12) {
            modal_num.textContent = num_containar[result];
        } else {
            modal_num.textContent = num_containar[(result - 12)];
        }
        //ラッキーカラー表示
        if (result < 12) {
            modal_color.textContent = color_comtainer[result];
            modal_color.style.color = color_comtainer[result];
        } else {
            modal_color.textContent = color_comtainer[(result - 12)];
            modal_color.style.color = color_comtainer[(result - 12)];
        }

        //モーダル表示
        modaloverlay.classList.remove('none');
    });
});

//☓ボタンクリックで閉じる
closeBtn.addEventListener('click', () => {
    modaloverlay.classList.add('none');
});

// 背景クリックで閉じる
modaloverlay.addEventListener('click', () => {
    modaloverlay.classList.add('none');
});
