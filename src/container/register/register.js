import React from 'react'
import Logo from '../../component/logo/logo'
import { Button, WhiteSpace, WingBlank, List, InputItem, Radio } from 'antd-mobile'

const RadioItem = Radio.RadioItem;

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            pwd: '',
            repeatPwd: '',
            type:'genius'
        }

    }
    registerClick(){
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
                <Logo/>
                <WingBlank>
                    <List>
                        <InputItem onChange={v=>this.handleChang('userName',v)}>用户名</InputItem><WhiteSpace />
                        <InputItem onChange={v=>this.handleChang('pwd',v)}>密码</InputItem><WhiteSpace />
                        <InputItem onChange={v=>this.handleChang('repeatPwd',v)}>确认密码</InputItem><WhiteSpace />
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
