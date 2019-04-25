import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './../App.css';
import './homeIndex.scss'
import 'swiper/dist/css/swiper.min.css';
// import $ from 'jquery';
import allPageData from './../json.js';

class homeIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSix: true,
            title: this.props.title
        };
        // 绑定react
        this.showHtml = this.showHtml.bind(this);
        this.toDemo = this.toDemo.bind(this);
    }
    data = allPageData.sixOrFive;
    toDemo(){
        this.props.history.push('/Demo')
    }
    showHtml() {
        if (this.state.isSix) {
            return this.sixPic(this.data.dataSix, true)
        } else {
            return this.sixPic(this.data.dataFive, false)
        }
    }
    // 5.6图混排
    sixPic(data, showSix) {
        return (
            data.map((elt, index) => {
                return (
                    <div key={index} className={showSix ? "sixPic showLine" : "fivePic showLine"}>
                        <p className="tilte">{this.state.title || "多图混排"}</p>
                        {/* 5，6图都出现再一个页面，用传参判断 */}
                        {/* <div className={this.state.isSix ? "sixPic_one block" : "fivePic"}> */}
                        <div className={showSix ? "sixPic_one block" : "fivePic"} onClick={this.toDemo}>
                            {elt.partOne.map((e, i) => {
                                return (
                                    <div className="fivePicTop" key={i}>
                                        <div><img alt="img" src={e.src} /></div>
                                        <aside>
                                            <p className="tilte showMore">{e.title}</p>
                                            <p className="lineClamp lineClampLine" style={{ "WebkitBoxOrient": "vertical" }}>{e.msg}</p>
                                            {showSix ? <span>{e.author}</span> : <p className="lastPart">
                                                <span className="lineClamp">{e.author}</span>
                                                <span>{e.type}</span>
                                                <span>{e.word}字</span>
                                            </p>}
                                        </aside>
                                    </div>
                                )
                            })}
                        </div>
                        <section>
                            {elt.datafive.map((elt2, index2) => {
                                if (index2 >= "4") {
                                    return;
                                }
                                return (
                                    // 第一个div没有margin-left
                                    <div key={index2} className={index2 % 4 == 0 ? "nomarginLef" : ""} onClick={this.toDemo}>
                                        <img alt="img" src={elt2.src} />
                                        <p className="showMore smallFont">{elt2.title}</p>
                                        <p className="showMore smallFont">{elt2.author}</p>
                                    </div>
                                )
                            })}
                        </section>
                    </div>
                )
            })
        )
    }
    // 猜你喜欢
    guessYouLike(index) {
        var data = allPageData.guessYouLike;
        return (
            <div className="showLine">
                <p className="tilte">{this.state.title || "更多推荐"}</p>
                {data.map((e, i) => {
                    if (i >= index) {
                        return;
                    }
                    return (
                        <div className="fivePicTop" key={i} onClick={this.toDemo}>
                            <div><img alt="img" src={e.src} /></div>
                            <aside>
                                <p className="tilte showMore">{e.title}</p>
                                <p className="lineClamp lineClampLine" style={{ "WebkitBoxOrient": "vertical" }}>{e.msg}</p>
                                <p className="lastPart">
                                    <span className="lineClamp">{e.author}</span>
                                    <span>{e.type}</span>
                                    <span>{e.word}字</span>
                                </p>
                            </aside>
                        </div>
                    )
                })}
            </div>
        )
    }
    //双排4图
    dobulePic() {
        var data = allPageData.guessYouLike;//用猜你喜欢的数据
        return (
            <div className="showLine">
                <p className="tilte">{this.state.title || "私人推荐"}</p>
                <section className="dobulePic">
                    {data.map((elt2, index) => {
                        if (index >= "8") {
                            return;
                        }
                        return (
                            <div key={index} className={index % 4 == 0 ? "nomarginLef" : ""} onClick={this.toDemo}>
                                <img alt="img" src={elt2.src} />
                                <p className="showMore smallFont">{elt2.title}</p>
                                <p className="showMore smallFont">{elt2.author}</p>
                            </div>
                        )
                    })}
                </section>
            </div>

        )
    }
    render() {
        return (
            <div className='homeIndex'>
                {/* {this.showHtml()} */}
                {this.sixPic(this.data.dataFive, false)}
                {this.guessYouLike(1)}
                {this.sixPic(this.data.dataSix, true)}
                {this.guessYouLike(3)}
                {this.dobulePic()}
                {this.guessYouLike(6)}
            </div>);
    }
}
export default homeIndex;