// 初期設定
const MAX_HP = 100;
const DAMAGE_MIN = 8;
const DAMAGE_MAX = 20;

//震えるアニメーション関数の定義
function shakeEnemy() {
  const enemyArea = document.querySelector('.enemy');
  enemyArea.classList.remove('hit');
  enemyArea.offsetWidth;
  enemyArea.classList.add('hit');
}

function shakeEnemy2() {
  const enemyArea = document.querySelector('.enemy2');
  enemyArea.classList.remove('hit');
  enemyArea.offsetWidth;
  enemyArea.classList.add('hit');
}

// 状態（HP）
let hp1 = MAX_HP; //100
let hp2 = MAX_HP;

// モンスター
const enemy = document.querySelector('.enemyImg');
const enemy2 = document.querySelector('.enemyImg2');

// HP表示部分
const hpText = document.querySelector('.hpText span');
const hpText2 = document.querySelector('.hpText2 span');
const hpBar = document.querySelector('.hpBar');
const hpBar2 = document.querySelector('.hpBar2');

//効果音の取得
const sedefeat = document.querySelector('#se-defeat');
const sehit = document.querySelector('#se-hit');
console.log(sehit);

const damege = Math.floor(Math.random() * (DAMAGE_MAX - DAMAGE_MIN + 1)) + DAMAGE_MIN;

// 攻撃処理
const attackButton = document.querySelector('.attackBtn');
attackButton.addEventListener('click', function () {
  console.log(damege);
  hp1 -= damege;
  hpText.textContent = hp1;
  if (hp1 <= 0) {
    hpText.textContent = 0;
    hpBar.value = 0;
    //撃破演出
    enemy.classList.add('enemy--squash');
    //撃破後の攻撃ボタン無効化
    attackButton.disabled = true;

    document.querySelector('.log').textContent = 'モンスターを倒した!'
    sedefeat.play();
  } else {
    hpText.textContent = hp1;
    hpBar.value = hp1;
    shakeEnemy();
    sehit.currentTime = 0;
    sehit.play();
  }
})

const attackButton2 = document.querySelector('.attackBtn2');
attackButton2.addEventListener('click', function () {
  console.log(damege);
  hp2 -= damege;
  hpText2.textContent = hp2;
  if (hp2 <= 0) {
    hpText2.textContent = 0;
    hpBar2.value = 0;
    //撃破演出
    enemy2.classList.add('enemy--squash');
    //撃破後の攻撃ボタン無効化
    attackButton2.disabled = true;

    document.querySelector('.log2').textContent = 'モンスターを倒した!';
    sedefeat.play();
  } else {
    hpText2.textContent = hp2;
    hpBar2.value = hp2;
    shakeEnemy2();
    sehit.currentTime = 0;
    sehit.play();
  }
})

//リセット処理
const resetBtn = document.querySelector('.restartBtn');
resetBtn.addEventListener('click', function () {
  hp1 = MAX_HP;
  hpText.textContent = MAX_HP;
  hpBar.value = MAX_HP;
  //撃破演出
  enemy.classList.remove('enemy--squash');
  //撃破後の攻撃ボタン無効化
  attackButton.disabled = false;
  document.querySelector('.log').textContent = '';
})

const resetBtn2 = document.querySelector('.restartBtn2');
resetBtn2.addEventListener('click', function () {
  hp2 = MAX_HP;
  hpText2.textContent = MAX_HP;
  hpBar2.value = MAX_HP;
  //撃破演出
  enemy2.classList.remove('enemy--squash');
  //撃破後の攻撃ボタン無効化
  attackButton2.disabled = false;
  document.querySelector('.log2').textContent = '';
})
