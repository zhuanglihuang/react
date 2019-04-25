import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './../App.css';
import './index.scss'
import Swiper from 'swiper/dist/js/swiper.js';
import 'swiper/dist/css/swiper.min.css';
// import $ from 'jquery';
import book1 from '../public/book1.png';
import book2 from '../public/book2.png';
import book3 from '../public/book3.png';
class IndexPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: { src: book1, title: "为了你，我愿意热爱整个世界",titleWord:"唐家三少写给木子",msg:'—— 是凶险？还是转机？',price:"17.98元/本"},
            changIndex: 0,
            activeIndex: 0,
        };
        // 绑定react
        this.toChange = this.toChange.bind(this);
        this.toChangeHtml = this.toChangeHtml.bind(this);
        this.vip = this.vip.bind(this);
        this.smallPic = this.smallPic.bind(this);
    }
    componentDidMount() {
        var vm = this;
        var galleryThumbs = new Swiper('.smallPic', {
            spaceBetween: 10,
            slidesPerView: 4,
            freeMode: true,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
        });
        var galleryTop = new Swiper('.vip', {
            centeredSlides: true,
            slidesPerView: 1.4,
            spaceBetween: 0,
            thumbs: {
                swiper: galleryThumbs
            },
            on: {
                slideChangeTransitionEnd: function () {
                    vm.setState({
                        activeIndex: galleryTop.activeIndex
                    }, function () {
                        console.log(this.state.activeIndex,galleryTop.activeIndex)
                    })
                },
            },
        });
    }
    componentWillUpdate() {
    }
    toChange(index) {
        var randomNum = [
            { src: book2, title: "守夜者—法医秦明二",titleWord:"法医秦明作品",msg:'—— 感动千万人的真爱告白',price:"17.98元/本" },
            { src: book1, title: "为了你，我愿意热爱整个世界",titleWord:"唐家三少写给木子",msg:'—— 是凶险？还是转机？',price:"9.98元/本"},
            { src: book3, title: "斗破苍穹-全书",titleWord:"斗破苍穹-全书",msg:'—— 斗破苍穹-全书？',price:"37.98元/本" },
        ]
        if (index > 2) {
            index = 0
        }
        this.setState({
            data: randomNum[index],
            changIndex: index + 1
        }, function () {
        })

    }
    toChangeHtml() {
        console.log("toChangeHtml")
        var data = this.state.data;
        return (
            <div>
                <div className="bookRe">
                    <img src={require('../public/PAGE.png')} alt='bookReError' />
                </div>
                <div className="toChangePart">
                    <div className="toChange">
                        <div className="toChangImg">
                            <img src={data.src} alt='toChangeHtmlError' />
                        </div>
                        <aside className="toChangCon">
                            <p className="toChangePartTitle">《{data.title}》</p>
                            <div className="toChangePartCon">
                                <p className="titleWord">{data.titleWord}</p>
                                <p className="msg">{data.msg}</p>
                                <p className="Price"><span>{data.price}</span>开通会员，立享全站畅读</p>
                            </div>
                        </aside>
                    </div>
                    <span className="btn" onClick={this.toChange.bind(this, this.state.changIndex)} >换一换</span>
                </div>
            </div>

        )
    }
    vip() {
        return (
            <div className="swiper-container vip">
                <div className="swiper-wrapper">
                    <div className="swiper-slide ">
                        <img src={require('../public/01.png')} alt='vipError' />
                    </div>
                    <div className="swiper-slide">
                        <img src={require('../public/02.png')} alt='vipError' />
                    </div>
                    <div className="swiper-slide">
                        <img src={require('../public/03.png')} alt='vipError' />
                    </div>
                    <div className="swiper-slide">
                        <img src={require('../public/04.png')} alt='vipError' />
                    </div>
                </div>
                <div className="swiper-pagination"></div>
            </div>
        )
    }
    smallPic() {
        return (
            <div className='swiper-container smallPic'>
                <div className='swiper-wrapper'>
                    <div className='swiper-slide'>
                        <img src={this.state.activeIndex === 0 ? require('../public/E.png') : require('../public/A.png')} alt='smallPicError' />
                    </div>
                    <div className='swiper-slide'>
                        <img src={this.state.activeIndex === 1 ? require('../public/F.png') : require('../public/B.png')} alt='smallPicError' />
                    </div>
                    <div className='swiper-slide'>
                        <img src={this.state.activeIndex === 2 ? require('../public/G.png') : require('../public/C.png')} alt='smallPicError' />
                    </div>
                    <div className='swiper-slide'>
                        <img src={this.state.activeIndex === 3 ? require('../public/H.png') : require('../public/D.png')} alt='smallPicError' />
                    </div>
                </div>
            </div>
        )
    }
    render() {
        return (
            <div className='IndexPage'>
            <Link to={{ pathname: "/Welcome" }} style={{color:"#E4393C"}}>登入送好礼</Link>
                {this.vip()}
                {this.smallPic()}
                {this.toChangeHtml()}
            </div>);
    }
}
export default IndexPage;