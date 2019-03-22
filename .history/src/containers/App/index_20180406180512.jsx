import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Switch, Route , withRouter } from "react-router-dom";
import Home from "../Home";
import Movies from "../Movies";
import Charts from "../Charts";

class AppComponent extends Component {
  constructor(props) {
    super(props);
    this.state={
      title: "Hello World ! "
    }
  }
  render() {
    // console.log("hahaha", this.props);
    return (
      <div>
        <h1> Image Sorter Application </h1>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/charts">Charts</Link>
        
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/movies" component={Movies} />
          <Route exact path="/charts" component={Charts} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.isLoading,
});


const App = withRouter(connect(mapStateToProps)(AppComponent));
export default App;
