import React from 'react'
import Logo from '../../component/logo/logo'
import { Button, WhiteSpace, WingBlank, List, InputItem, Radio } from 'antd-mobile'
import { connect } from 'react-redux'
import { register } from '../../redux/user.redux'
import { Redirect } from 'react-router-dom'
const RadioItem = Radio.RadioItem;

@connect(
    state=>state.user,
    {register}
)



class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            pwd: '',
            repeatPwd: '',
            type:'genius'
        }

    }
    registerClick(){
        this.props.register(this.state);
        console.log(`${JSON.stringify(this.state)}`);
    }
    handleChang(key,val){
        this.setState({
            [key]:val
        })
    }

    render() {
        return (
            <div>
                {this.props.redirectTo? <Redirect to={this.props.redirectTo} />:null}
                <Logo/>
                <WingBlank>
                    <List>
                        <InputItem onChange={v=>this.handleChang('user',v)}>用户名</InputItem><WhiteSpace />
                        <InputItem type='password' onChange={v=>this.handleChang('pwd',v)}>密码</InputItem><WhiteSpace />
                        <InputItem type='password' onChange={v=>this.handleChang('repeatPwd',v)}>确认密码</InputItem><WhiteSpace />
                        <RadioItem checked={this.state.type=='genius'} onChange={()=>this.handleChang('type','genius')}>牛人</RadioItem><WhiteSpace />
                        <RadioItem checked={this.state.type=='boss'} onChange={()=>this.handleChang('type','boss')}>Boss</RadioItem><WhiteSpace />
                    </List><WhiteSpace />
                    <Button type="primary" onClick={this.registerClick.bind(this)}>注册</Button><WhiteSpace />
                </WingBlank>
            </div>
        )
    }
}

export default Register
