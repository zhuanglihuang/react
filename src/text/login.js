import React, { Component } from 'react';
import './../App.css';
import './login.scss';
import { Link } from 'react-router-dom';
import logo from '../public/logo.png';
import Mask from '../common/mask';
import $ from 'jquery'
class ToChange extends Component {
    constructor(props) {
        super(props);
        this.state = {
            maskData:{title:"登入提示",className:""},
        };
        this.show=this.show.bind(this)
    }
    mingpiang() {
        return (
            <div className='mingpiang'>
                <h2>事务代理</h2>
                <div className="text_all">
                    {/* <i className="left">1</i> */}
                    <div className="name">
                        <div>
                            <h2>
                                call me
                        </h2>
                            <h2>
                                &nbsp;&nbsp; 18358137781
                        </h2>
                        </div>
                    </div>
                    <div className="text">
                        <p className="text_title">代理内容</p>
                        <p className="text_detail">
                            刻章、登报、营业执照、食品流通许可证、卫生许可证、会计代理、商标注册、环评烟草许可证、变更注销。and so on....
                    </p>
                    </div>
                    {/* <i className="right">2</i> */}
                </div>
            </div>
        )
    }
    show(){
        var userName=this.refs.userName.value;
        var userPassword=this.refs.userPassword.value;
        if(userName!=""&&userPassword!=""){
            this.props.history.push('/homeIndex')
        }else{
            this.refs.mask.show();
        }
    }
    logoin() {
        var data=this.state;
        return (
            <div className="loginPart">
                <img src={logo} className="logoinImg" />
                <section className="sectionPart">
                    <form>
                        <input  placeholder="输入用户名" ref="userName" />
                        <input  placeholder="输入密码" ref="userPassword" />
                    </form>
                    {/* <Link to={{ pathname: "/demo" }} className="login">登入</Link>  */}
                    <a onClick={this.show} href="javascript:void(0);" className="login">登入</a>
                </section>
            </div>
        )
    }
    render() {
        return (
            <div className='loginPage'>
                {/* {this.mingpiang()} */}
                {this.logoin()}
                <Mask maskData={this.state.maskData} ref="mask">
                    <p>账号或密码错误</p>
                    <p>请检查你的账好密码</p>
                    <p>忘记密码？</p>
                </Mask>
            </div>);
    }
}
export default ToChange;