import React, { Component } from "react";
import { Link, Route, Switch, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import GistEmbed from "react-gist-embed";
import "./style.scss";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageTitle: "Dashboard"
    };
  }

  render() {
    return (
      <section className="section-wrapper ">
        <div className="me">
          <div className="me-icon">
            <img src="/assets/images/me.jpg" />
          </div>
          <div className="me-about">
            <h1>
              <span>&lt;</span>Howdy !<span>/> </span>
            </h1>
            <p>
              I am Dhiraj Basukala from Bhaktapur, Nepal. I am a front end
              developer who loves to code and design.
            </p>
          </div>
          <p> twitter , github </p> 

          <pre>
            <code>{`
              function helloWorld() {
                return "Hello World!";
              }
            `}
            </code>
          </pre>
      </section>
    );
  }
}

Home.propTypes = {
  location: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

export default withRouter(Home);
