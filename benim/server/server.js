const express = require('express')
const mongoose = require('mongoose')

//link mongo
const DB_URL = 'mongodb://127.0.0.1:27017/ben'
mongoose.connect(DB_URL)
mongoose.connection.on('connected',function(){
    console.log('mongo connect success!')
})
//类似于mysql的表 mongo里有文档、字段的概念
const User = mongoose.model('user',new mongoose.Schema({
    user:{type:String,require:true},
    age:{type:Number,require:true}
}))
//新增数据
// User.create({
//     user:'xiaoying',
//     age:26
// },function(err,doc){
//     if (!err) {
//         console.log(doc)
//     } else {
//         console.log(err)
//     }
// })
//移除
// User.remove({age:1},function(err,doc){
//     console.log(doc)
// })
//修改
// User.update({'user':'dawen'},{'$set':{age:99}},function(err,doc){
//     console.log(doc)
// })
//new app
const app = express()

app.get('/',function(req,res){
    res.send('<h1>Hello Express<h1/>')
})

app.get('/data',function(req,res){
    // User.find({},function(err,doc){
    //     res.json(doc)
    // })
    User.findOne({user:'dawen'},function(err,doc){
        res.json(doc)
    })
})

app.listen(9093,function(){
    console.log('Node app start at port 9093!')
})