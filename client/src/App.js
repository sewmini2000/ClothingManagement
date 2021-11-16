import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import CreatePost from './component/CreatePost';
import Home from './component/Home';
import EditPost from './component/EditPost';
import PostDetails from './component/PostDetails';
import NavBar from './component/NavBar';
import CusCreate from './component/CusCreate';
import CusEdit from './component/CusEdit';
import CusHome from './component/CusHome';
import Cuspost from './component/CusPostdetails';
import CreateComp from './component/CreateComp';
import EditComp from './component/EditComp';
import HomeComp from './component/HomeComp';
import CompDetails from './component/CompDetails';
import CreateStaff from './component/CreateStaff';
import EditStaff from './component/EditStaff';
import StaffHome from './component/StaffHome';
import StaffPostDetails from './component/StaffPostDetails';

import CreateProfit from './component/CreateProfit';
import EditProfit from './component/EditProfit';
import ProfitHome from './component/ProfitHome';
import ProfitDetails from './component/ProfitDetails';
import Main from './component/Main';






export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <NavBar/>
          <Route path="/" exact component={Main}></Route>
          <Route path="/branch" exact component={Home}></Route>
          <Route path="/add" component={CreatePost}></Route>
          <Route path="/edit/:id" component={EditPost}></Route>
          <Route path="/post/:id" component={PostDetails}></Route>

          <Route path="/customer" exact component={CusHome}></Route>
          <Route path="/customer/edit/:id" component={CusEdit}></Route>
          <Route path="/customer/add" exact component={CusCreate}></Route>
          <Route path="/customer/show/:id" component={Cuspost}></Route>

          <Route path="/comp" exact component={HomeComp}></Route>
          <Route path="/comp/edit/:id" component={EditComp}></Route>
          <Route path="/comp/add" exact component={CreateComp}></Route>
          <Route path="/comp/show/:id" component={CompDetails}></Route>

          <Route path="/staff" exact component={StaffHome}></Route>
          <Route path="/staff/edit/:id" component={EditStaff}></Route>
          <Route path="/staff/add" component={CreateStaff}></Route>
          <Route path="/staff/show/:id" component={StaffPostDetails}></Route>

          
          <Route path="/profit" exact component={ProfitHome}></Route>
          <Route path="/profit/edit/:id" component={EditProfit}></Route>
          <Route path="/profit/add" component={CreateProfit}></Route>
          <Route path="/profit/show/:id" component={ProfitDetails}></Route>






        </div>
      </BrowserRouter>

    )
  }
}