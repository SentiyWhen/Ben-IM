const express = require('express')
const mongoose = require('mongoose')
// 链接mongo 并且使用imooc这个集合
const DB_URL = 'mongodb://localhost:27017'
mongoose.connect(DB_URL)
mongoose.connection.on('connected',function(){
	console.log('mongo connect success')
})

const app = express()
app.get('/',function(req,res){
	res.send('<h1>Hello world</h1>')
})
app.get('/data',function(req,res){
	User.findOne({user:'xiaoming'},function(err,doc){
		res.json(doc)
	})
})
// app.get('/delete',function(){

// })
app.listen(9093,function(){
	console.log('Node app start at port 9093')
})
