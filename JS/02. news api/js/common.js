window.addEventListener("load", Init);

function Init() {
  Requests("ua", "sports", sports);
}

function Requests(country, category, callback) {
  const URL = `http://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=18f1c87e444741aca30db0a569bba999`;
  console.log(URL);
  fetch(URL)
    .then((data) => {
      return data.json();
    })
    .then((news) => {
      callback(news.articles);
    })
    .catch((err) => console.log(err));
}

function sports(news) {
  console.log("sports ", news);
}

function science(news) {
  console.log("science", news);
}
