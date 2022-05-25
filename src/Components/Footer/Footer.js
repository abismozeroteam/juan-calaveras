import './Footer.css';
// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
library.add( faFacebook, faInstagram );

function Footer() {
    return (
        <footer>
            <h5>CONTACTO</h5>
            <div className="datos-contacto">
                <p>Juan S. González García</p>
                <p>+52 55 6007 2901</p>
            </div>
            <div className="social-media">
                <FontAwesomeIcon icon={faFacebook} className="fa-lg"/>
                <FontAwesomeIcon icon={faInstagram} className="fa-lg"/>
            </div>
        </footer>
    );
}

export default Footer;