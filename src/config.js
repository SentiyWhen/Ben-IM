import axios from 'axios'
import { Toast } from 'antd-mobile'

// 拦截请求
axios.interceptors.request.use(function(config){
	console.log('拦截请求-加载中');
	Toast.loading('加载中',0)
	return config
})

// 拦截相应

axios.interceptors.response.use(function(config){
	Toast.hide()
	return config
})
