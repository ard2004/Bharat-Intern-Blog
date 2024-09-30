import createArticle from "../contr"
const router_ = require("router");
const router = router_();
const createArticle = require("../controller/createBlog.controller")
const fetchBlog = require('../controller/fetchBlog.controller')
const view = require("../controller/view.controller")
const profileView = require("../controller/profileViewer.controller")
/*
 * /create-article
 * /edit-article
 * /:article-name
 * */
router.get("/create",(req,res)=>{
    res.render('newBlog');
})
router.route("/profile").get(profileView)
router.route("/view/:blog_id").get(view)
router.route("/create/:title").post(createArticle);
router.route('/').get(fetchBlog);
// router.post('/blog/create-article',(req:Request))
module.exports = router; 
