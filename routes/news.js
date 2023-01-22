const express = require('express');
const router = express.Router();
const dbConnection = require('../config/dbConnection')
const connection = dbConnection()

/* GET home page. */
router.get('/', (req, res, next)=> {
    // res.render('index', { title: 'Express' });
    let page = req.query.page
    let limit = 5
    let offset = page*limit
    
    connection.query('SELECT COUNT(*) as total FROM news',(error, result)=>{
        let rowsTotal=result[0].total
        console.log(rowsTotal)
    })

    connection.query(`SELECT * FROM news LIMIT ${limit} OFFSET ${offset}`
    ,(error, result) => {
        // res.send('?page='+encodeURI(page))
        
        res.render('news/news.ejs',{
            news: result,
            page: Number(page),
            limit: limit,
            offset: offset
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


module.exports = router;
