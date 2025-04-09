let dataBase = [
  {
    username: "guest1",
    password: "123",
  },
  {
    username: "guest2",
    password: "1234",
  },
  {
    username: "guest3",
    password: "1235",
  },
];
let newsFeed = [
  {
    username: "osniel",
    timeline: "comment example",
  },
  {
    username: "aly",
    timeline: "new post example",
  },
];

function isValidCredentials(user, pass) {
  return dataBase.some(account => 
    account.username === user && account.password === pass
  );
}

function signIn(user, pass) {
  if (isValidCredentials(user, pass)) {
    console.log("Welcome!", user);
    console.log("Here's your news feed:");
    console.log(newsFeed);
  } else {
    alert("Sorry, wrong username or password");
  }
}

//osmelInput validation
const userNamePrompt = prompt("Username: ").trim();
const passwordPrompt = prompt("Password: ").trim();

if (userNamePrompt && passwordPrompt) {
  signIn(userNamePrompt, passwordPrompt);
} else {
  alert("Username and password are required");
}