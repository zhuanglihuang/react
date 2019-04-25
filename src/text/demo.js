import React, { Component } from 'react';
import './demo.scss';
import './../App.css';
import start from '../public/s.png';
import $ from  'jquery';
import DemoChild from './domeChild';
import ToChange from './toChange';

class Demo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: 'ddd',
            name: this.props.name,
            start: [{ src: start }, { src: start }, { src: start }, { src: start }, { src: start }],
        };
        // 绑定react
        this.bookDetail = this.bookDetail.bind(this);
        this.toPath = this.toPath.bind(this);
    }
    componentDidMount() {
        console.log("dd", this.props.name);
        this.setState({
            data: "ssss"
        }, function () {
            console.log("ddeee", this.props.name);
        })
    }
    toSee(){
        $('.demo_bookDetail_partTwo').toggleClass('maxHeight')
        console.log($('.demo_bookDetail_partTwo'),"ppp")
    }
    toDemoChild(data){
        console.log("调用子组件函数",data,this.refs.DemoChild.demo(data))
    }   
    byDemoChild(data){
        console.log("子组件调用函数",data)
    }
    toPath(){
        this.props.history.push('/IndexPage')
    }
    bookDetail() {
        return (
            <div className='demo_bookDetail'>
                {/*  */}
                <p onClick={this.toPath} style={{color:"#E4393C"}}>进入会员页面</p>
                <div className="demo_bookDetail_part">
                    <div>
                        <img src={require('../public/book1.png')} alt="error_ads" />
                    </div>
                    <aside>
                        <h4 onClick={this.toDemoChild.bind(this,"调用子组件函数")}>名称</h4>
                        {/* map 能出来 forEach出不来*/}
                        <p>
                            {this.state.start.map(function (o, i) {
                                return (
                                    <img src={o.src} key={i} alt="error_ads"/>
                                )
                            })}
                        </p>
                        <p>作者</p>
                        <p>介绍</p>
                    </aside>
                </div>
                <div className="demo_bookDetail_partTwo" style={{"WebkitBoxOrient": "vertical"}} onClick={this.toSee}>
                    容貌娇美而又爱慕虚荣的英国女子凯蒂，为了避免自己变成一位老姑娘，接受了生性孤僻的医生瓦尔特?费恩的求婚。她离开了上世纪20年代伦敦浮华而空虚的社交圈，随瓦尔特远赴神秘的东方殖民地——香港。<br />    对婚姻感到不满和无趣，凯蒂开始悄悄与令她芳心摇动的香港助理布政司查理?唐生偷情。瓦尔特发现妻子的不忠后，孤注一掷，开始了他奇特而可怕的报复计划：凯蒂必须随他前往遥远的中国内地，去平息一场正疯狂流行的霍乱瘟疫。在异国美丽却凶险的环境中，他们经历了在英国家乡的舒适生活中无法想象和体验的情感波澜……<br />    在爱情、背叛与死亡的漩涡中挣扎的凯蒂，亲历了幻想破灭与生死离别之后，终将生活的面纱从她的眼前渐渐揭去，从此踏上了不悔的精神成长之路。
                </div>
                <div className='demo_bookDetail_partThree'>

                </div>
                <div className='demo_bookDetail_partFour'>
                    <img src={require('../public/morebook.png')} alt="error_ads" onClick={this.toPath}/>
                </div>
            </div>

        );
    }
    render() {
        return (
            <div className='Demo'>
                {this.bookDetail()}
                <DemoChild ref="DemoChild" start={start} byDemoChild={this.byDemoChild}/>
                <ToChange title="猜你喜欢"></ToChange>
                <DemoChild title="读过还读"/>
            </div>
        );
    }
}
export default Demo;