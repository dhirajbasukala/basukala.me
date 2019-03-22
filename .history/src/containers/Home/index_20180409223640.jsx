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
        
            <div id="gist88893006" class="gist">    
              <div class="gist-file">      
                <div class="gist-data">        
                <div class="js-gist-file-update-container js-task-list-container file-box">  
                <div id="file-helloworld-js" class="file">      
                <div itemprop="text" class="blob-wrapper data type-javascript">      
                <table class="highlight tab-size js-file-line-container" data-tab-size="8">      
                <tr>        <td id="file-helloworld-js-L1" class="blob-num js-line-number" data-line-number="1"><\/td>        <td id="file-helloworld-js-LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function<\/span> <span class="pl-en">helloWrold<\/span>(){<\/td>      <\/tr>      <tr>        <td id="file-helloworld-js-L2" class="blob-num js-line-number" data-line-number="2"><\/td>        <td id="file-helloworld-js-LC2" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">return<\/span> <span class="pl-s"><span class="pl-pds">&quot;<\/span><span class="pl-ii">Hello World !; <\/span><\/span><\/td>      <\/tr>      <tr>        <td id="file-helloworld-js-L3" class="blob-num js-line-number" data-line-number="3"><\/td>        <td id="file-helloworld-js-LC3" class="blob-code blob-code-inner js-file-line"><span class="pl-s"><span class="pl-ii">  <\/span><\/span><\/td>      <\/tr>      <tr>        <td id="file-helloworld-js-L4" class="blob-num js-line-number" data-line-number="4"><\/td>        <td id="file-helloworld-js-LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-s"><span class="pl-ii"> }<\/span><\/span><\/td>      <\/tr>      <tr>        <td id="file-helloworld-js-L5" class="blob-num js-line-number" data-line-number="5"><\/td>        <td id="file-helloworld-js-LC5" class="blob-code blob-code-inner js-file-line"><span class="pl-s"><span class="pl-ii"> <\/span><\/span><\/td>      <\/tr><\/table>  <\/div>  <\/div>  <\/div>      <\/div>      <div class="gist-meta">        <a href="https://gist.github.com/dhirajbasukala/08850825e5c9483112654150fe5c31f0/raw/ccf420c9ae1390b58786fab2007b3d33a0002fc8/helloWorld.js" style="float:right">view raw<\/a>        <a href="https://gist.github.com/dhirajbasukala/08850825e5c9483112654150fe5c31f0#file-helloworld-js">helloWorld.js<\/a>        hosted with &#10084; by <a href="https://github.com">GitHub<\/a>      <\/div>    <\/div><\/div>
        </div>
      </section>
    );
  }
}

Home.propTypes = {
  location: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

export default withRouter(Home);
