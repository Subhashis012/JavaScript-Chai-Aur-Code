const promiseOne = new Promise(function (resolve, reject) {
  // Do something aync
  setTimeout(function () {
    console.log("Promise One");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise One resolved");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async task 2 resolved");
});

const promiseThree = new Promise((res, rej) => {
  setTimeout(() => {
    res({
      username: "Subashis",
      password: "1234",
    });
  }, 1000);
});

promiseThree.then((user) => {
  console.log(user);
});

const promiseFour = new Promise((res, rej) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      res({ username: "Subashis", email: "test@gamil.com" });
    } else {
      rej("Something went wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("Promise was resolved");
  });

const promiseFive = new Promise((res, rej) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      res({ username: "JavaScript", email: "test@gamil.com" });
    } else {
      rej("Something JS went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try{
    const response = await promiseFive;
  console.log(response);
  } catch(err) {
    console.log(err);
  }
}

consumePromiseFive();

// async function getAllUsers(){
//   try{
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     console.log(data);
//   } catch(err) {
//     console.log("Error: ",err);
//   }
  
// }

// getAllUsers()


fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err))