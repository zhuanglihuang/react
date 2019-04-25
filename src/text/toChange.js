import React, { Component } from 'react';
import './../App.css';
import './toChange.scss';
import Swiper from 'swiper/dist/js/swiper.js';
import 'swiper/dist/css/swiper.min.css';
import start from '../public/w.jpg'
import start2 from '../public/s.png'
import book1 from '../public/book1.png';
import book2 from '../public/book2.png';
import book3 from '../public/book3.png';
// import $ from 'jquery';
class ToChange extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { i: book1, msg: '好书' },
                { i: book2, msg: '好看' },
                { i: book3, msg: '精' }
            ],
            one:{
                src:start,
                msg:'推荐好书',
                msg2:"读过还读"
            },
            title:this.props.title||"读过还读",
            change:true,
        };
        // 绑定react
        this.toChangeHtml = this.toChangeHtml.bind(this);
        this.toChange = this.toChange.bind(this)
    }

    componentDidMount() {
       new Swiper('.ToChange_container .swiper-container', {
            autoplay: true,//可选选项，自动滑动
        })
    }
    componentDidUpdate() {
    }
    toChange(change){
        console.log("change",change)
        if(change){
            this.setState({
                data: [
                    { i: book3, msg: '霸道总裁' },
                    { i: start, msg: '爱上我' },
                    { i: book2, msg: '不忧伤' }
                ],
                one:{
                    src:start,
                    msg:'凉生，我们',
                    msg2:"猜你喜欢"
                },
                change:false
            },function(){
                this.toChangeHtml(this.state.data,this.state.one)
            })
        }else{
            this.setState({
                data: [
                    { i: book1, msg: '好书' },
                    { i: book2, msg: '好看' },
                    { i: book3, msg: '精' }
                ],
                one:{
                    src:book3,
                    msg:'推荐好书',
                    msg2:"读过还读"
                },
                change:true
            },function(){
                this.toChangeHtml(this.state.data,this.state.one)
            })
        }
        
    }
    toChangeHtml(data,one) {
        return (
            <div className="ToChange_container">
                <div className='ToChange_change'>
                    <span className="ToChange_change_title">{this.state.title}</span>
                    <span onClick={this.toChange.bind(null,this.state.change)} className="toChangeLoge">换一换</span>
                </div>
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <div className='ToChange_change_bottom '>
                            <div className='ToChange_change_bottomImg'>
                                <img src={one.src} className='ToChange_change_bottomImgImg' alt="error"/>
                                <div>{one.msg}</div>
                                <div>{one.msg2}</div>
                            </div>
                            {data.map(function (o, i) {
                                return (
                                    <div className='ToChange_change_bottomImg' key={i}>
                                        <div className='ToChange_change_bottomImgTwoChild'>
                                            <div>
                                                <img src={o.i}  alt="error"/>
                                            </div>
                                            <aside>
                                                <p>{o.msg}</p>
                                                <p>{o.msg2}</p>
                                            </aside>
                                        </div>
                                        <div className='ToChange_change_bottomImgTwoChild'>
                                            <div>
                                                <img src={o.i}  alt="error"/>
                                            </div>
                                            <aside>
                                                <p>{o.msg}</p>
                                                <p>{o.msg2}</p>
                                            </aside>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    render() {
        return (
            <div className='ToChange'>
                {this.toChangeHtml(this.state.data,this.state.one)}
            </div>);
    }
}
export default ToChange;