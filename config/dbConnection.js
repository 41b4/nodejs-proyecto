const mysql = require('mysql')
const { HOST, USER, PASSWORD, DATABASE }= require('./config')
const { devHOST, devUSER, devPASSWORD, devDATABASE }= require('./configdev')
module.exports = () =>{
    if (process.env.NODE_ENV==='production'){
        console.log('estamos en produccion')
        return mysql.createConnection({
            host: HOST,
            user: USER,
            password: PASSWORD,
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

