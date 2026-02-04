const express = require('express')
const router = express.Router()
const userController = require("../controllers/userController")
// level 2
router.get("/", (req, res) => {
res.render("welcome")
});

router.get("/login", (req, res) => {
res.render("auth/login")


});

router.get("/signup", (req, res) => {
res.render("auth/signup")


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














module.exports = router
