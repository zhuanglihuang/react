import React, { Component } from 'react';
import './demoChild.scss';
import './../App.css'
// import start from '../public/s.png';
// import $ from 'jquery'
import Swiper from 'swiper/dist/js/swiper.js';
import 'swiper/dist/css/swiper.min.css';
class DemoChild extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // propsData:this.props.item;//通过props初始化编辑便签子组件的state
            title:this.props.title||"和vue的父子传承很像很像除了子调用父"
        };
        // 绑定react
        this.demo = this.demo.bind(this);
    }
    componentDidMount() {
       new Swiper('.morePic', {
            slidesPerView: 4,
            spaceBetween: 30,
            // centeredSlides: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    }
    demo(data) {
        if (data == '调用子组件函数') {
            console.log("被调用", data, this.props);
        } else {
            console.log("自调用", data, this.props);
        }
    }
    morePic() {
        return (
            <div>
                <div>
                   {this.state.title!="和vue的父子传承很像很像除了子调用父"?'':(<div><span onClick={this.demo} >父子传承</span><br />
                   <span onClick={this.props.byDemoChild}>子调用父</span></div>)}
                    <p className="title">{this.state.title}</p>
                </div>
                <div className="swiper-container morePic">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <img src={require('../public/book1.png')} alt="error" />
                        </div>
                        <div className="swiper-slide">
                            <img src={require('../public/book2.png')} alt="error" />
                        </div>
                        <div className="swiper-slide">
                            <img src={require('../public/book1.png')} alt="error" />
                        </div>
                        <div className="swiper-slide">
                            <img src={require('../public/book2.png')} alt="error" />
                        </div>
                        <div className="swiper-slide">
                            <img src={require('../public/book1.png')} alt="error" />
                        </div>
                        <div className="swiper-slide">
                            <img src={require('../public/book2.png')} alt="error" />
                        </div>
                    </div>
                </div>

            </div>
        )
    }
    render() {
        return (
            <div className="demoChild">
                {this.morePic()}
            </div>
        )
    }
}
export default DemoChild;