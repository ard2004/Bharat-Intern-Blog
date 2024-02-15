"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router_ = require("router");
const router = router_();
/*
 * /create-article
 * /edit-article
 * /:article-name
 * */
router.get('/blog/:article', (req, res) => {
    console.log(`accessing ${req.params.article}`);
    res.sendStatus(200);
});
// router.post('/blog/create-article',(req:Request))
module.exports = router;
