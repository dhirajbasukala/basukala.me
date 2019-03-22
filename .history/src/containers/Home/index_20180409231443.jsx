import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import Gist from 'react-gist';
import "./style.scss";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageTitle: "Dashboard" // eslint-disable-line
    };
  }

  componentDidMount(){
    this.props.fetchGist();
  }
  render() {
    return (
      <section className="section-wrapper ">
        <div className="me">
          <div className="me-icon">
            <img src="/assets/images/me.jpg" alt="Dhiraj Basukala" />
          </div>
          <div className="me-about">
            <h1>
              <span>&lt;</span>Howdy !<span>/&gt; </span>
            </h1>
            <p>
              I am Dhiraj Basukala from Bhaktapur, Nepal. I am a front end
              developer who loves to code and design.
            </p>
          </div>
          <p> twitter , github </p> 
          <Gist id='08850825e5c9483112654150fe5c31f0' file="testing" />
        </div>
      </section>
    );
  }
}


Home.propTypes={
  fetchGist: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  isLoading: state.isLoading,
});

const mapDispatchToProps = dispatch=> ({
  fetchGist: () => dispatch({ type: "FETCH_GIST" })
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
