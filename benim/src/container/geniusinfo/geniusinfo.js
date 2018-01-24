import React from 'react'
import { NavBar,InputItem,TextareaItem,Button } from 'antd-mobile';
import AvatarSelector from '../../component/avatar-selector/avatar-selector.js'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {update} from '../../redux/user.redux'

@connect(
    state=>state.user,
    {update}
)

class GeniusInfo extends React.Component{
    constructor(props){
        super(props)
        this.state = {
			title:'',
			desc:''
		}
    }
    onTitleChange(key,val){
        this.setState({
			[key]:val
        })
        console.log(`${key}-----${val}`)
    }
    render(){
        const path = this.props.location.pathname
        const redirect = this.props.redirectTo
        
        return (
            <div>
				{redirect&&redirect!==path? <Redirect to={this.props.redirectTo}></Redirect> :null}                
                <NavBar mode="dark">牛人完善信息页</NavBar>
                <AvatarSelector selectAvatar={(imgname)=>{
                    this.setState({
                        avatar:imgname
                    })
                }
                }/>
                <InputItem onChange={this.onTitleChange.bind(this,'title')}>求职职位</InputItem>
                <TextareaItem autoHeight title = '个人简介' onChange={this.onTitleChange.bind(this,'desc')}></TextareaItem>  
                <Button type='primary' onClick={()=>{this.props.update(this.state)}}>保存</Button>       
            </div>
        )
    }
}

export default GeniusInfo