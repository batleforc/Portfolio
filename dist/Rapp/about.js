import React from 'react';

class About extends React.Component{

    render(){
        return(
            <div className="w3-content w3-justify w3-text-grey w3-padding-64" id="about">
            <h2 className="w3-text-light-grey">Qui suis je ? </h2>
            <hr style={{width:"200px"}} className="w3-opacity"/>
            <p>Some text about me. Some text about me. I am lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <h3 className="w3-padding-16 w3-text-light-grey">Quelque Techno</h3>
            <p className="w3-wide">Core</p>
            <div className="w3-white">
            C#,C,C++,Php,Node,Python,Java
            </div>
            <p className="w3-wide">Front </p>
            <div className="w3-white">
            JS (ReactJS , VueJS) orientée PWA
            </div>
            <p className="w3-wide">Infra</p>
            <div className="w3-white">
            Heroku,Docker,VM,Vps
            </div>
            <p className="w3-wide">Base de donnée</p>
            <div className="w3-white">
            MariaDB,MongoDB
            </div>
            <p>
            Il est bien beaux de seulement citer des Techno alors je vous invite a vous rendre sur mes git accessible dans le menu a droite afin de vous faire une idée de ce que j'ai pus effectuer avec ces techno
            </p>
            <br/>
            <h3 className="w3-padding-16 w3-text-light-grey">Quelque chiffre</h3>
            <div className="w3-row w3-center w3-padding-16 w3-section w3-light-grey">
              <div className="w3-quarter w3-section">
                <span className="w3-xlarge">5</span><br/>
                Projet actif
              </div>
              <div className="w3-quarter w3-section">
                <span className="w3-xlarge">1</span><br/>
                Language en apprentisage
              </div>
              <div className="w3-quarter w3-section">
                <span className="w3-xlarge">7</span><br/>
                Language pratiquer
              </div>
              <div className="w3-quarter w3-section">
                <span className="w3-xlarge">100+</span><br/>
                Nouvelles idées de projet et solutions
              </div>
            </div>
            <button className="w3-button w3-light-grey w3-padding-large w3-section">
              <a href="media/cv.pdf" target="_blank" download="CvMaximeLeriche.pdf"> <i className="fa fa-download"></i> Mon CV</a>
            </button>
         </div>
        )
    }
}

export default About;