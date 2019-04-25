import React, { Component } from 'react';
// import './../App.css';
// import './login.scss';
import './mask.scss';
import $ from 'jquery'
class Mask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showMask:false,//默认不显示
            data:this.props.maskData,//父组件传来的数据
            dom:this.props.children||[],//父组件传来的html
        };
        // 绑定react
        this.hide=this.hide.bind(this)
    }
    show(){
        console.log("show")
        setTimeout(() => {
            this.setState({
                showMask:true
              });
        }, 500);
    }
    hide(){
        setTimeout(() => {
            this.setState({
                showMask:false
              });
        }, 500);
    }
    render() {
        var data=this.state.data;
        console.log(data.dom,"data.dom",this.state.dom)
        return (
            <div className={this.state.showMask?'MaskBlack block':"MaskBlack none"}>
                <div className='Mask'>
                <span className="title">{data.title}</span>
                <div className={data.className?data.className:"domClass"}>{this.state.dom}</div>
                <a className="login" onClick={this.hide}>确定</a>
            </div>
            </div>
        )
    }
}
export default Mask;