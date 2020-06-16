let btn = document.querySelector("#root");
btn.addEventListener("click", Main);

class AsyncLesson {
  constructor() {
    this.__URL = "https://jsonplaceholder.typicode.com/users";
    this.userStorage = [];
    console.log("AsyncLesson constructor works");
  }
  async Request() {
    let response = await fetch(this.__URL);
    let data = await response.json();
    this.SaveUserList(data);
  }

  SaveUserList(usetList) {
    let count = 0;
    let user = usetList.map((item) => {
      count++;
      return item;
    });
    this.userStorage.push(user);
    // console.log("Users count => ", count);
    // console.log("userStorage => ", this.userStorage);
    localStorage.setItem("UsersList", this.userStorage);
  }
  GetUserList() {
    let userList = localStorage.getItem("UsersList");
    return userList;
  }
}

async function Main() {
  let obj = new AsyncLesson();
  await obj.Request();
  let arr = await obj.GetUserList();
  console.log("ARR = ", arr);
}
