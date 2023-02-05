const express = require('express');
const cookie = require('cookie-parser')
const router = express.Router();
const dbConnection = require('../config/dbConnection')
const connection = dbConnection()

/* GET home page. */
router.get('/', (req, res, next)=> {
    // res.render('index', { title: 'Express' });
    let page = req.query.page
    let limit = 6
    let offset = page*limit
    connection.query(`SELECT * FROM news`
    ,(error, result) => {
        // res.send('?page='+encodeURI(page))
        const rows= result.length
        if (page> Math.ceil(rows/limit)){
            res.redirect('news?page='+encodeURIComponent(Math.floor(rows/limit)))
            console.log(Math.floor(rows/limit))
        }else if(page<0){
            res.redirect('news?page=0')
        }
        connection.query(`SELECT * FROM news LIMIT ${limit} OFFSET ${offset}`,(error, result)=>{
            res.render('news/news.ejs',{
                news: result,
                page: Number(page),
                limit: limit,
                offset: offset,
                rows: rows
            })
        })
    })
});

/* FORM */
router.post('/', function(req, res, next) {
    // res.render('index', { title: 'Express' });
    console.log(req.body)
    const {title, news} = req.body
    let page = req.query.page
    connection.query('INSERT INTO news SET ?',{
        title,
        news
    }, (error,result)=>{
        res.redirect('/news?page='+page)
    })
});
// COOKIES



module.exports = router;
