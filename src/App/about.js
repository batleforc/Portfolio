import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class About extends React.Component {
  render() {
    return (
      <div
        className="w3-content w3-justify w3-text-grey w3-padding-64"
        id="about"
      >
        <h2 className="w3-text-light-grey">Qui suis-je ?</h2>
        <hr style={{ width: "200px" }} className="w3-opacity" />
        <p>
          Attention : Ce site est actuellement retravaillé afin d'intégrer toute
          la partie Infra qui me tiens particulièrement à coeur
        </p>
        <p>
          Un étudiant en fin de Licence Pro Dev Cloud. Entre le développeur Back
          et Front saupoudré d'un fan d'Infra.
        </p>
        <h3 className="w3-padding-16 w3-text-light-grey">Quelques Technos</h3>
        <p className="w3-wide">Core</p>
        <div className="w3-white" style={{ paddingLeft: "10px" }}>
          C#,C,C++,Php,Node,Python,Java
        </div>
        <p className="w3-wide">Front </p>
        <div className="w3-white" style={{ paddingLeft: "10px" }}>
          JS (ReactJS , VueJS) orientée PWA
        </div>
        <p className="w3-wide">Infra</p>
        <div className="w3-white" style={{ paddingLeft: "10px" }}>
          Heroku,Docker,VM,Vps
        </div>
        <p className="w3-wide">Base de donnée</p>
        <div className="w3-white" style={{ paddingLeft: "10px" }}>
          MariaDB,MongoDB
        </div>
        <p className="w3-wide">DevOps </p>
        <div className="w3-white" style={{ paddingLeft: "10px" }}>
          Gitlab CI , Github CI (Ce site est deployer via Github Actions)
        </div>
        <p className="w3-wide">Infra </p>
        <div className="w3-white" style={{ paddingLeft: "10px" }}>
          Microk8S (KeyCloak, Gitea, Harbor, EclipseChe)
        </div>
        <p className="w3-text-light-grey">
          Il est bien beau de seulement citer des technos alors je vous invite à
          vous rendre sur mes gits accessibles dans le menu à droite(sur pc) ou
          tout en bas de la page, afin de vous faire une idée de ce que j'ai pu
          effectuer avec ces technos
        </p>
        <br />
        <h3 className="w3-padding-16 w3-text-light-grey">Quelques chiffres</h3>
        <div className="w3-row w3-center w3-padding-16 w3-section w3-light-grey">
          <div className="w3-quarter w3-section">
            <span className="w3-xlarge">3</span>
            <br />
            Projets actif
          </div>
          <div className="w3-quarter w3-section">
            <span className="w3-xlarge">1</span>
            <br />
            Language en apprentissage
          </div>
          <div className="w3-quarter w3-section">
            <span className="w3-xlarge">7</span>
            <br />
            Languages utilisés
          </div>
          <div className="w3-quarter w3-section">
            <span className="w3-xlarge">100+</span>
            <br />
            Nouvelles idées de projet et solutions
          </div>
        </div>
        <div style={{ textAlign: "center" }}>
          <button className="w3-button w3-light-grey w3-padding-large w3-section">
            <a
              href="media/CV.pdf"
              target="_blank"
              download="CvMaximeLeriche.pdf"
            >
              <FontAwesomeIcon icon={["fas", "download"]} /> Mon CV
            </a>
          </button>
        </div>
      </div>
    );
  }
}

export default About;
