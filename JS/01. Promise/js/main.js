let promise = new Promise(function (resolve, reject) {
  console.log("Start process");
  setTimeout(function () {
    //reject("Car not found!");
    resolve("I found car!");
  }, 2000);
})
  .then(function (data) {
    console.log("Then ", data);
    let car = {
      brend: "Tesla",
      model: "Cybertruck",
      price: "$100000",
      bank: "Enough money",
    };
    return new Promise(function (resolve, reject) {
      console.log("You want to buy: ", car);
      setTimeout(function () {
        //reject("Not enough money");
        resolve(car);
      }, 5000);
    });
  })
  .then(function (data) {
    return new Promise(function (resolve, reject) {
      let car = {
        brend: "Tesla",
        model: "Cybertruck",
        price: "$100000",
        bank: "Enough money",
        techCheck: "ok",
      };
      setTimeout(function () {
        //reject("Bad car!");
        resolve(car);
      }, 5000);
    });
  })
  .then(function (data) {
    console.log("Car status: ", data);
    return new Promise(function (resolve, reject) {
      let car = {
        brend: "Tesla",
        model: "Cybertruck",
        price: "$100000",
        bank: "Enough money",
        techCheck: "ok",
        policeCheck: "Documents ok",
      };
      setTimeout(function () {
        //reject("Bad documents!");
        resolve(car);
      }, 5000);
    });
  })
  .then(function (data) {
    console.log("Congrats... You bought: ", data);
  })
  .catch(function (error) {
    console.log("Catch ", error);
  });
