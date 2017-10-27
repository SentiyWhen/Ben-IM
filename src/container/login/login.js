import React from 'react'
import Logo from '../../component/logo/logo'
import { Button, WhiteSpace, WingBlank, List, InputItem } from 'antd-mobile'

class Login extends React.Component {
    constructor(props) {
        super(props);

    }
    loginClick(){
        console.log('login')
    }
    registerClick(){
        console.log('Register');
        this.props.history.push('/register')
    }


    render() {

        return (
            <div>
                <Logo/>
                <WingBlank>
                    <List>
                        <InputItem>用户名</InputItem><WhiteSpace />
                        <InputItem>密码</InputItem>
                    </List><WhiteSpace />
                    <Button type="primary" onClick={this.loginClick.bind(this)}>登陆</Button><WhiteSpace />
                    <Button type="primary" onClick={this.registerClick.bind(this)}>注册</Button><WhiteSpace />
                </WingBlank>
            </div>
        )
    }
}

export default Login
