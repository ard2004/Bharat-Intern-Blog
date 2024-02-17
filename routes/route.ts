import {Request,Response} from 'express';
const router_ = require("router");
const router = router_();
/*
 * /create-article
 * /edit-article
 * /:article-name
 * */
router.get('/:article',(req:Request,res:Response) => {
    console.log(`accessing ${req.params.article}`)
    res.sendStatus(200);
})
// router.post('/blog/create-article',(req:Request))
module.exports = router; 
