const {Router} = require('express');

const chatRouter = Router();

function newDate(s = "") {
  if(s === ""){
    return new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})
  }
  return new Date(s).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})
}

const messages = [
  {
    user: "Mukund",
    text: "Should I shoot my shot",
    added: newDate("2026-03-11")
  },
  {
    user: "Metro B.",
    text: "Want some more? ni-",
    added: newDate("2026-03-2")
  },
  {
    user: "Spamton",
    text: "Here's a deal...",
    added: newDate("2026-02-29") // one cool thing is that Date() will make this 1 March (the next date), as this date does not exist
  }
];

chatRouter.get("/", (req, res) => {
  res.render("index", {messages: messages});
});

chatRouter.get("/new", (req, res) => {
  res.render("forms");
});

chatRouter.post('/new', (req, res) => {
  const username = req.body.name;
  const message = req.body.text;
  console.log(username, message);

  messages.push({
    user: username,
    text: message,
    added: newDate()
  });

  res.redirect('/'); // So this function redirects us to the main page once post request ends
});



module.exports = chatRouter;