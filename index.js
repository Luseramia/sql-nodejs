const express = require('express')
const mysql = require('mysql')
const path = require('path')
const cookieParser = require('cookie-parser')
const router = require('./routes/myRouters')
const readXlsxFile = require('read-excel-file/node')
const app  = express()
require('dotenv').config()

app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')
app.use(express.urlencoded({extended:false}));
app.use(express.json());
// app.use(cookieParser())
app.use(router)
app.use(express.static(path.join(__dirname,'public')))
// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', 'domain-a.com')
//     // บรรทัดนี้คือกำหนดให้อนุญาติให้เฉพาะ ‘domain-a.com’ เข้าถึงข้อมูลได้
//     res.header('Access-Control-Allow-Methods','POST, GET, PUT, PATCH, DELETE, OPTIONS')
//     // บรรทัดนี้คือกำหนดให้ HTTP method ที่สามารถยิงเข้ามาได้
//     res.header('Access-Control-Allow-Headers','Content-Type, Option, Authorization')
//     return next()
//     })



app.listen(3000,()=> console.log('listen port 3000')) 