import React from 'react'
import { NavBar,InputItem,TextareaItem,Button } from 'antd-mobile';
import AvatarSelector from '../../component/avatar-selector/avatar-selector.js'
import {connect} from 'react-redux'
import {update} from '../../redux/user.redux'
@connect(
    state=>state.user,
    {update}
)

class BossInfo extends React.Component{
    constructor(props){
        super(props)
    }
    onTitleChange(key,val){
        this.setState({
			[key]:val
        })
        console.log(`${key}-----${val}`)
    }
    render(){
        return (
            <div>
                <NavBar mode="dark">BOSS完善信息页</NavBar>
                <AvatarSelector selectAvatar={(imgname)=>{
                    this.setState({
                        avatar:imgname
                    })
                }
                }/>
                <InputItem onChange={this.onTitleChange.bind(this,'title')}>招聘职位</InputItem>
                <InputItem onChange={this.onTitleChange.bind(this,'company')}>公司名称</InputItem>
                <InputItem onChange={this.onTitleChange.bind(this,'money')}>职位薪资</InputItem>
                <TextareaItem autoHeight title = '职位要求' onChange={this.onTitleChange.bind(this,'desc')}></TextareaItem>  
                <Button type='primary' onClick={()=>{this.props.update(this.state)}}>保存</Button>       
            </div>
        )
    }
}

export default BossInfo