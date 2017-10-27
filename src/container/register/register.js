import React from 'react'
import Logo from '../../component/logo/logo'
import { Button, WhiteSpace, WingBlank, List, InputItem, Radio } from 'antd-mobile'

const RadioItem = Radio.RadioItem;

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type:'genius'
        }

    }
    registerClick(){
        console.log('Register');
    }

    render() {
        return (
            <div>
                <Logo/>
                <WingBlank>
                    <List>
                        <InputItem>用户名</InputItem><WhiteSpace />
                        <InputItem>密码</InputItem><WhiteSpace />
                        <InputItem>确认密码</InputItem><WhiteSpace />
                        <RadioItem checked={this.state.type=='genius'}>牛人</RadioItem><WhiteSpace />
                        <RadioItem checked={this.state.type=='boss'}>Boss</RadioItem><WhiteSpace />
                    </List><WhiteSpace />
                    <Button type="primary" onClick={this.registerClick.bind(this)}>注册</Button><WhiteSpace />
                </WingBlank>
            </div>
        )
    }
}

export default Register
