"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router_ = require("router");
const router = router_();
const createArticle = require("../controller/createBlog.controller");
const fetchBlog = require('../controller/fetchBlog.controller');
/*
 * /create-article
 * /edit-article
 * /:article-name
 * */
router.route("/create/:createarticle").get(createArticle);
router.route('/').get(fetchBlog);
// router.post('/blog/create-article',(req:Request))
module.exports = router;
