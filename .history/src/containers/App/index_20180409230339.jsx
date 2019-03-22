import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch, Route , withRouter } from "react-router-dom";
import Home from "../Home";
import Movies from "../Movies";
import '../../styles/style.scss'
import './style.scss';

class AppComponent extends Component {
  constructor(props) {
    super(props);
    this.state={
      title: "Hello World ! " // eslint-disable-line
    }
  }
  render() {
    // console.log("hahaha", this.props);
    return (
      <div className="page-main">
        <div className="page-main-inner">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/movies" component={Movies} />
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
export default App;
