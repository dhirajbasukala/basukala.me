import React from "react"
import '../styles/home.scss';
import db from '../images/me.jpg';


export default () =>(
  <section className="section-wrapper">
        <div className="me">
          <div className="me-icon">
            <img src={db} alt="Dhiraj Basukala" />
          </div>
          <div className="me-about">
            <h1>
              <span>&lt;</span>Namaste !<span>/&gt; </span>
            </h1>
            <p>
              I am <strong>Dhiraj Basukala</strong> from Bhaktapur, Nepal. I am a passionate front end developer with a decade of experience in the web industry, earning expertise in HTML (5), CSS (3), Javascript, front end tools and techniques. I started out as a web designer but quickly got inclined to front end development and, seriously, I never looked back. However, I do not mind occasional design stuffs.  Besides work, I’m a husband and a father and enjoy spending time with friends and family.
            </p>
          </div>
          <p className="social-links"> <a href="https://twitter.com/dhirajbasukala" target="_blank">twitter</a><a href="https://github.com/dhirajbasukala" target="_blank">github</a> </p> 
          {/* <Gist id='08850825e5c9483112654150fe5c31f0' /> */}
          {/* {
            gists && gists.map(gist => {
              console.log(gist);
              return <Gist id={gist.id} key={gist.id} />
            })
          } */}
        </div>
      </section>
  )
