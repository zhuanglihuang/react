import { Route, Switch, Redirect } from 'react-router-dom';
import React from 'react';
import './App.css';
import './index.css';
import App from './App'
import Demo from './text/demo';
import Welcome from './test.js';
import ToChange from './text/toChange.js';
import IndexPage from './text/index.js';
import Login from './text/login.js';
import homePage from './text/home.js';
import homeIndex from './text/homeIndex.js';
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
// 路由嵌套
/* <div>
      <Route path="/Welcome/ToChange" exact component={ToChange} />
   </div> 
*/
const Root = () => (
  <div>
     <Switch>
        <Route
           path="/"
           render={props => (
              <App>
                 <Switch>
                    <Route path="/" exact component={Login} />
                    <Route path="/homePage" component={homePage} />
                    <Route path="/demo" component={Demo} />
                    <Route path="/Welcome" component={Welcome} />
                    <Route path="/ToChange" component={ToChange} />
                    <Route path="/IndexPage" component={IndexPage} />
                    <Route path="/homeIndex" component={homeIndex} />
                     {/*路由不正确时，默认跳回home页面*/}
                    <Route render={() => <Redirect to="/" />} />
                 </Switch>
              </App>
           )}
        />
     </Switch>
  </div>
);
export default Root;