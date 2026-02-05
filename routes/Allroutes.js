const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const AuthUser = require("../models/authUser");
const { triggerAsyncId } = require("node:async_hooks");

// level 2
router.get("/", (req, res) => {
  res.render("welcome");
});

router.get("/login", (req, res) => {
  res.render("auth/login");
});

router.get("/signup", (req, res) => {
  res.render("auth/signup");
});

router.post("/signup", async (req, res) => {
const result = await AuthUser.create(req.body)
try {
     res.redirect("/")
} catch (error) {
   console.log(error); 
}
    console.log(result);

});

//level 1
// get Request
router.get("/home", userController.user_index_get);

router.get("/edit/:id", userController.user_edit_get);

router.get("/view/:id", userController.user_view_get);

// search Request
router.post("/search", userController.user_search_post);

// Delete Request
router.delete("/edit/:id", userController.user_delete);

//Put Or Edit Request
router.put("/edit/:id", userController.user_put);

module.exports = router;
