import { hot } from 'react-hot-loader/root'
import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch, Route , withRouter } from "react-router-dom";
import Home from "../Home";
import Gists from '../Gists';

import '../../styles/style.scss'
import './style.scss';

class AppComponent extends Component {
  constructor(props) {
    super(props);
    this.state={
      title: "Hello World 123! " // eslint-disable-line
    }
  }
  render() {
    // console.log("hahaha", this.props);
    return (
      <div className="page-main">
        <div className="page-main-inner">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/gists" component={Gists} />
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.isLoading,
});


const App = withRouter(connect(mapStateToProps)(AppComponent));
export default hot(App);
