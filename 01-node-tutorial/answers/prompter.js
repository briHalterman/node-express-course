const http = require("http");
var StringDecoder = require("string_decoder").StringDecoder;

const getBody = (req, callback) => {
  const decode = new StringDecoder("utf-8");
  let body = "";
  req.on("data", function (data) {
    body += decode.write(data);
  });
  req.on("end", function () {
    body += decode.end();
    const body1 = decodeURI(body);
    const bodyArray = body1.split("&");
    const resultHash = {};
    bodyArray.forEach((part) => {
      const partArray = part.split("=");
      resultHash[partArray[0]] = partArray[1];
    });
    callback(resultHash);
  });
};

// here, you could declare one or more variables to store what comes back from the form.

const secretNumber = Math.floor(Math.random() * 101);

console.log(`Hello Node! Congratulations! Your number is ${secretNumber}...`);

let resultText = "";

// here, you can change the form below to modify the input fields and what is displayed.
// This is just ordinary html with string interpolation.
const form = () => {
  return `
  <body>
  <h1>Guess a Number!</h1>
  <h2>Guess a number between 1 and 100</h2>
  <p>${resultText}</p>
  <p>Guess an integer in numeric form, then press 'Submit Guess'</p>
  <form method="POST">
  <input name="guess" type="number"></input>
  <button type="submit">Submit Guess</button>
  </form>
  </body>
  `;

  // console.log(`Your guess is ${guess}`);

};

const server = http.createServer((req, res) => {
  console.log("req.method is ", req.method);
  console.log("req.url is ", req.url);
  if (req.method === "POST") {
    getBody(req, (body) => {
      console.log("The body of the post is ", body);

      // here, you can add your own logic

      const guessNumber = parseInt(body.guessNumber)
      let resultText = '';
      const handleGuess = (guess) => {
        if (guessNumber > secretNumber) {
          resultText = "Your guess is too high";
        } else if(guessNumber < secretNumber) {
          resultText = "Your guess is too low";
        } else if(guessNumber === secretNumber) {
          resultText = "You win!"
        } else {
          resultText = "Trouble"
        }
      };

      // form();
      // handleGuess();

      console.log(resultText);


      // if (body["guess"]) {
      //   handleGuess(body["guess"])
      // } else {
      //   resultText = ""
      // }

      // Your code changes would end here
      res.writeHead(303, {
        Location: "/",
      });
      res.end();
    });
  } else {
    res.end(form());
  }
});

server.listen(3000);
console.log("The server is listening on port 3000.");



// // here, you could declare one or more variables to store what comes back from the form.
// let item = "Enter something below.";

// // here, you can change the form below to modify the input fields and what is displayed.
// // This is just ordinary html with string interpolation.
// const form = () => {
//   return `
//   <body>
//   <p>${item}</p>
//   <form method="POST">
//   <input name="item"></input>
//   <button type="submit">Submit</button>
//   </form>
//   </body>
//   `;
// };


      // // here, you can add your own logic
      // if (body["item"]) {
      //   item = body["item"];
      // } else {
      //   item = "Nothing was entered.";
      // }
