const express = require("express");
const app = express();
const path = require("path");
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

const db = mysql.createPool({
    host: "localhost",
    user: "hansot",
    password: "hansot",
    database: "HDB",
})

app.listen(8080, function(){
    console.log("listening on 8080 http://localhost:8080");
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, '../client/build')));

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

app.get("/menu/gogi", (req, res) => {
    const sqlSelect = "SELECT * FROM gogi";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    })
})

app.get("/menu/jungsik", (req, res) => {
    const sqlSelect = "SELECT * FROM jungsik";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    })
})

app.get("/menu/modum", (req, res) => {
    const sqlSelect = "SELECT * FROM modum";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    })
})

app.get("/menu/newmenu", (req, res) => {
    const sqlSelect = "SELECT * FROM newmenu";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    })
})

// react router 쓰는경우 최하단에 추가
//고객이 URL란에 아무거나 입력하면 걍 리액트 프로젝트나 보내주셈이라는 뜻
app.get('*', function(req, res){
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// html을 서버가 만들면 server-side rendering
// html을 react가 만들면 client-side rendering


