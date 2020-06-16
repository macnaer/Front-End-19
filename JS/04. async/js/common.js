let btn = document.querySelector("#root");
btn.addEventListener("click", Main);
const __URL = "https://jsonplaceholder.typicode.com/users";

class AsyncLesson {
  constructor() {}
  Request() {}
}

function Main() {
  let obj = new AsyncLesson();
  console.log("Works", typeof obj);
}
