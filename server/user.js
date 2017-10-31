const express = require('express')
const utils = require('utility')

const Router = express.Router()
const model = require('./model')
const User = model.getModel('user')

Router.get('/list',function(req, res){
	// User.remove({},function(e,d){})
	User.find({},function(err,doc){
		return res.json(doc)
	})
})
Router.post('/register', function(req, res){
	const {user, pwd, type} = req.body
	User.findOne({user},function(err,doc){
		if (doc) {
			return res.json({code:1,msg:'用户名重复'})
		}

		User.create({user,type,pwd:md5Pwd(pwd)},function(e,d){
			if (e) {
				return res.json({code:1,msg:'后端出错了'})
			}
			return res.json({code:0})
		})
	})
})

Router.get('/info',function(req, res){
    // 用户有没有cookie
    return res.json({code:1})
})

function md5Pwd(pwd){
	const salt = 'ben_is_good_3957x8yza6!@#IUHJh~~'
	return utils.md5(utils.md5(pwd+salt))
}

module.exports = Router
