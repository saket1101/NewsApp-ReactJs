import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


export class App extends Component {
 pageSize = 12
 apiKey ='703c89e0a7bf46c794b449b992a6f320'
 state={
  progress:0
 }
 setProgres=(progress)=>{
  this.setState({progress:progress})
 }
  render() {
    return (
      <div>
        <Router>
        <Navbar />
          <Routes>
            <Route exact path="/general" element={<News setProgres={this.setProgres} apiKey={this.apiKey} key='general' pageSize = {this.pageSize} country='in' category= 'general'/>}></Route>
            <Route exact path="/business" element={<News setProgres={this.setProgres} apiKey={this.apiKey} key='business' pageSize = {this.pageSize} country='in' category= 'business'/>}></Route>
            <Route exact path="/sports" element={<News setProgres={this.setProgres}apiKey={this.apiKey} key='sports' pageSize = {this.pageSize} country='in' category= 'sports'/>}></Route>
            <Route exact path="/technology" element={<News setProgres={this.setProgres} key='technology' pageSize = {this.pageSize} country='in' category= 'technology'/>}></Route>
            <Route exact path="/science" element={<News setProgres={this.setProgres} apiKey={this.apiKey} key='science' pageSize = {this.pageSize} country='in' category= 'science'/>}></Route>
            <Route exact path="/health" element={<News setProgres={this.setProgres} apiKey={this.apiKey} key='health' pageSize = {this.pageSize} country='in' category= 'health'/>}></Route>
            <Route exact path="/entertainment" element={<News  setProgres={this.setProgres}apiKey={this.apiKey} key='entertainment' pageSize = {this.pageSize} country='in' category= 'entertainment'/>}></Route>
          </Routes>
      
        </Router>

      </div>
    );
  }
}

export default App;
