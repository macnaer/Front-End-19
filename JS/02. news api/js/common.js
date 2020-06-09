window.addEventListener("load", Init);

function Init() {
  let category = [
    "sports",
    "entertainment",
    "health",
    "science",
    "technology",
    "business",
  ];

  let callbackFunctions = [
    { news: sportsNews },
    { news: entertaimentNews },
    { news: healthNews },
    { news: scinceNews },
    { news: technologyNews },
    { news: businessNews },
  ];

  for (let i = 0; i < category.length; i++) {
    Requests("ua", category[i], callbackFunctions[i].news);
  }
}

function Requests(country, category, callback) {
  const URL = `http://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=18f1c87e444741aca30db0a569bba999`;
  fetch(URL)
    .then((data) => {
      return data.json();
    })
    .then((news) => {
      callback(news.articles);
    })
    .catch((err) => console.log(err));
}

function sportsNews(news) {
  console.log("sportsNews ", news);
}

function entertaimentNews(news) {
  console.log("entertaimentNews", news);
}

function healthNews(news) {
  console.log("healthNews", news);
}

function scinceNews(news) {
  console.log("scinceNews", news);
}
function technologyNews(news) {
  console.log("technologyNews", news);
}

function businessNews(news) {
  console.log("businessNews", news);
}
