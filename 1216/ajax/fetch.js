const result = document.querySelector('resultFetch');

const loadNews = function () {
    fetch('./news.json')
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            result.innerHTML = '<p>${json.news}</p>';
        })
        .catch(function (error) {
            console.log(error);
        })
}

loadNews();

const Btn = document.querySelector('.loadAjaxBtn');
Btn.addEventListener('click', function () {
    //読み込み直し
    loadNews();
})
