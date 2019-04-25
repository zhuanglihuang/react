import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './../App.css';
import './home.scss'
import Swiper from 'swiper/dist/js/swiper.js';
import 'swiper/dist/css/swiper.min.css';
import Demo from './demo.js';
import Test from './../test.js';
class homePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            history: this.props.history
        }
    }
    componentDidMount() {
        var vm = this;
        var galleryThumbs = new Swiper('.smallPic', {
            spaceBetween: 10,
            slidesPerView: 4,
            freeMode: true,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            autoplay: false
        });
        var galleryTop = new Swiper('.vip', {
            autoplay: false,
            spaceBetween: 1,
            thumbs: {
                swiper: galleryThumbs
            },
            on: {
                slideChangeTransitionEnd: function () {
                    // vm.setState({
                    //     activeIndex: galleryTop.activeIndex
                    // }, function () {
                    //     console.log(this.state.activeIndex, galleryTop.activeIndex);
                    // })
                },
            },
        });
    }
    homePage() {
        return (
            <div className="swiper-container vip">
                <div className="swiper-wrapper">
                    <div className="swiper-slide ">
                        {/* <Route path="/homePage/Demo" exact component={ToChange} /> */}
                        <Demo />
                    </div>
                    <div className="swiper-slide">
                        {/* <Route path="/homePage/Test" exact component={Test} /> */}
                        <Test history={this.state.history} />
                    </div>
                    <div className="swiper-slide">
                        {/* <Route path="/homePage/ToChange" exact component={ToChange} /> */}
                        <Demo />
                    </div>
                    <div className="swiper-slide">
                        {/* <Route path="/homePage/tapOne" exact component={Demo} /> */}
                        <Test />
                    </div>
                </div>
            </div>
        )
    }
    homePageTitle() {
        return (
            <div className="swiper-container smallPic clearfix">
                <div className="swiper-wrapper">
                    <div className="swiper-slide ">
                        精选
                    </div>
                    <div className="swiper-slide">
                        男生
                    </div>
                    <div className="swiper-slide">
                        女生
                    </div>
                    <div className="swiper-slide">
                        二次元
                    </div>
                </div>
            </div>
        )
    }
    render() {
        return (
            <div className='homePage'>
                {this.homePageTitle()}
                {this.homePage()}
            </div>
        );
    }
}
export default homePage;