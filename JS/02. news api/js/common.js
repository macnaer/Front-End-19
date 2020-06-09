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
  let sportElem = document.querySelector("#sport");
  for (let i = 0; i < 5; i++) {
    let img = document.createElement("img");
    let h4 = document.createElement("h4");
    let subText = document.createElement("span");
    let desc = document.createElement("p");
    let a = document.createElement("a");

    img.setAttribute("class", "img-responsive");
    img.setAttribute("src", news[i].urlToImage);
    subText.setAttribute("class", "sub-text");
    a.setAttribute("href", "http://" + news[i].source.name);
    a.setAttribute("target", "_blank");

    subText.innerHTML = news[i].author;
    a.innerHTML = news[i].title;
    desc.innerHTML = news[i].description;

    h4.appendChild(a);
    sportElem.appendChild(img);
    sportElem.appendChild(h4);
    sportElem.appendChild(subText);
    sportElem.appendChild(desc);
  }
}

function entertaimentNews(news) {
  let sportElem = document.querySelector("#entertaiment");
  for (let i = 0; i < 5; i++) {
    let img = document.createElement("img");
    let h4 = document.createElement("h4");
    let subText = document.createElement("span");
    let desc = document.createElement("p");
    let a = document.createElement("a");

    img.setAttribute("class", "img-responsive");
    img.setAttribute("src", news[i].urlToImage);
    subText.setAttribute("class", "sub-text");
    a.setAttribute("href", "http://" + news[i].source.name);
    a.setAttribute("target", "_blank");

    subText.innerHTML = news[i].author;
    a.innerHTML = news[i].title;
    desc.innerHTML = news[i].description;

    h4.appendChild(a);
    sportElem.appendChild(img);
    sportElem.appendChild(h4);
    sportElem.appendChild(subText);
    sportElem.appendChild(desc);
  }
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
