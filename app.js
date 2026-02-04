const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.use(express.static("public"));
const allRoutes = require('./routes/Allroutes')
const addUserRout = require('./routes/addUser')
var methodOverride = require("method-override");
app.use(methodOverride("_method"));
// Auto Refresh

const path = require("path");
const livereload = require("livereload");
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, "public"));

const connectLivereload = require("connect-livereload");
app.use(connectLivereload());

liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});

mongoose
  .connect(
    "mongodb+srv://sherifmervat51_db_user:hamadashickoo$5@cluster0.ge7kkoj.mongodb.net/all-data?appName=Cluster0",
  )
  .then(() => {
    app.listen(port, () => {
      console.log(`http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });


  app.use( allRoutes)
  app.use(addUserRout)
