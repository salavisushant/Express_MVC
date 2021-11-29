const app = require("./app");
const connect = require("./config/db")

app.listen(2525, async function () {
  await connect();
  console.log("listening on 2525 port");
});