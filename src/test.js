import React, { Component } from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import ToChange from './text/toChange.js';
import Demo from './text/demo.js'
import allPageData from './json.js';
import Mask from './common/mask';
import './test.scss'
class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maskData: { title: "书券好礼" },
    };
    this.toPath = this.toPath.bind(this);
    this.getUrlAjax = this.getUrlAjax.bind(this)
    // conClickBtn:{}
  }
  toPath() {
    this.props.history.push('/ToChange')
  }
  componentDidMount() {
    console.log(this.props.history, "路由");
  }
  pageStyleBtn(d, index) {
    var that = this;
    var showText = (d.rewardStatus !== "" ? d.rewardStatus === "1" ? "未领取" : (d.rewardStatus === '2' ? '已领取' : (d.rewardStatus === '3' ? "已失效" : (d.rewardStatus === '4' ? '待领取' : '已抽奖'))) : null);
    return (
      <button onClick={that.getUrlAjax.bind(null, showText, d.rewardDetails, index)} className={(showText === "待领取" || showText === "已失效") ? "cmr-giftbag-Btn cmr-giftbag-Btn-hui" : "cmr-giftbag-Btn"}>
        <a>
          {showText}
        </a>
      </button>
    )
  };
  // 跳转路径
  conClickBtn = {}
  getUrlAjax(showText, allData, index) {
    var [vm, len, par] = [this, allData.length, false]
    if (this.conClickBtn[index]) {
      console.log("按钮只能点击一次")
      return;
    }
    this.conClickBtn[index] = true;
    if (showText === "待领取" || showText === "已失效") {
      vm.refs.mask.show();
      return;
    }
    allData.map(function (elt, index) {
      if (len == 1) {
        if (elt.rewardType == 2 || elt.rewardType == 3) {
          vm.props.history.push('/ToChange');
          console.log("d", vm.props)
        } else if (elt.rewardType == 1) {
          vm.props.history.push('/ToChange')
        } else if (elt.rewardType == 4) {
          vm.props.history.push('/ToChange')
        }
      } else {
        par = true;
      }

    })
    if (par) {
      vm.props.history.push({ pathname: "/ToChange", query: { name: 'sunny' } });
      console.log(vm.props.history, "路由");
      /**
       *1 <Route path='/query' component={Query}/>
            <Link to={{ path : ' /query' , query : { name : 'sunny' }}}>
            this.props.history.push({pathname:"/query",query: { name : 'sunny' }});
            读取参数用: this.props.location.query.name
      *2 <Route path='/sort ' component={Sort}/>
            <Link to={{ path : ' /sort ' , state : { name : 'sunny' }}}> 
            this.props.history.push({pathname:"/sort ",state : { name : 'sunny' }});
            读取参数用: this.props.location.query.state
      *3<Route path='/path/:name' component={Path}/>
            <link to="/path/2">xxx</Link>
            this.props.history.push({pathname:"/path/" + name});
            读取参数用:this.props.match.params.name
       */
    }
  };
  pageStyle() {
    var data = allPageData.newUserGiftbag.data.rewardList;
    var vm = this;
    // 3个return 才能出来哦
    return (
      data.map((elt, i) => {
        return (
          <div className='pageStyle' key={i}>
            <p className='pageStyle_title'>
              <em>第{elt.dayNum}天</em>
              {elt.rewardDescToday}
            </p>
            {vm.pageStyleBtn(elt, i)}
            {elt.rewardDetails.map((elt2, index) => {
              return (
                <div className="pageStyle_main" key={index}>
                  <div className='pageStyle_allmost'>
                    <div>
                      <img src={elt2.src} alt="error" />
                    </div>
                    <aside>
                      <p>{elt2.rewardName}</p>
                      <p>{elt2.rewardDesc}</p>
                    </aside>
                  </div>
                </div>
              )
            })}
          </div>
        )
      })
    )
  }
  render() {
    return (
      <div>
        <Link to={{ pathname: "/Welcome/ToChange" }} >内置路由</Link>
        <div>
          <Route path="/Welcome/ToChange" exact component={ToChange} />
        </div>
        <Link to={{ pathname: "/Welcome/demo" }} >内置路由homePage</Link>
        <div>
          <Route path="/Welcome/demo" exact component={Demo} />
        </div>
        {this.pageStyle()}
        <Mask maskData={this.state.maskData} ref="mask">
          <span>不可以领用</span>
        </Mask>
      </div>
    );
  }
}
export default Welcome;