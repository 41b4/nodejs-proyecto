const mysql = require('mysql')
const { HOST, USER, PASSWORD, DATABASE, PORTDB }= require('./config')
const { devHOST, devUSER, devPASSWORD, devDATABASE }= require('./configdev')
module.exports = () =>{
    if (process.env.NODE_ENV==='production'){
        console.log('estamos en produccion')
        return mysql.createConnection({
            user: USER,
            password: PASSWORD,
            host: HOST,
            port: PORTDB,
            database: DATABASE
        })
    
    }else{
        console.log('modo developer activado!')
        return mysql.createConnection({
            host: devHOST,
            user: devUSER,
            password: devPASSWORD,
            database: devDATABASE
        })
    }
}

