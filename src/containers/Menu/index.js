/* eslint-disable no-return-assign */
import Button from "../../components/Button";
import Logo from "../../components/Logo";

import "./style.scss";

const Menu = () => (
  <nav>
    <Logo />
    <ul>
    {/* ajout de window.document.location.hash qui renvoie une chaîne qui contient un # ainsi que l'identifiant du fragment de l'URL . 
    L'identifiant de fragment de l'URL commence par un # suivi d'un identifiant qui identifie de manière unique 
    une section. J'ai également rajouté les id dans page/home index.js */}
      <li>
        <a href="#nos-services" onClick={() => (window.document.location.hash = "#services")}>Nos services</a>
      </li>
      <li>
        <a href="#nos-realisations" onClick={() => (window.document.location.hash = "#realisations")}>Nos réalisations</a>
      </li>
      <li>
        <a href="#notre-equipe" onClick={() => (window.document.location.hash = "#equipe")}>Notre équipe</a>
      </li>
    </ul>
    <Button title="contact" onClick={() => (window.document.location.hash = "#contact")}>
      Contact
    </Button>
  </nav>
);

export default Menu;
