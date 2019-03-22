import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Switch, Route , withRouter } from "react-router-dom";
import Home from "../Home";
import Movies from "../Movies";

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
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/movies" component={Movies} />
      </Switch>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.isLoading,
});


const App = withRouter(connect(mapStateToProps)(AppComponent));
export default App;
