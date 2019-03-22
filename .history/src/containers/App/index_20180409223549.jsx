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
      <section className="section-wrapper ">
      <div className="me">
        <div className="me-icon">
          <img src="/img/me.jpg" />
          {/* <i className="fas fa-user-circle"></i> */}
        </div>
        <div className="me-about">
          <h1>
            {" "}
            <span>&lt;</span>Howdy !<span>/> </span>
          </h1>
          <p>
            {" "}
            I am Dhiraj Basukala from Bhaktapur, Nepal. I am a front end
            developer who loves to code and design.
          </p>
        </div>
        <p> twitter , github </p> 

        {/* <GistEmbed gistId='08850825e5c9483112654150fe5c31f0'/> */}
        <pre> 
          <code>{`
function helloWorld() {
  return "Hello World!";
}
`}</code>


        </pre>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.isLoading,
});


const App = withRouter(connect(mapStateToProps)(AppComponent));
export default App;
