import './Header.css';
import Logo from '../../Util/images/brand/logo.svg';
import { useState, useEffect } from 'react';
// Media
function importAll(r) {
    let images = {};
    r.keys().map((item) => { return images[item.replace('./', '')] = r(item); } );
    return images;
}
const dishes = importAll(require.context('../../Util/images/food', false, /\.(png|jpe?g|svg)$/));

function Header() {

    const [ bgImage, setBgImage ] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => setBgImage((bgImage + 1) % Object.keys(dishes).length), 2000);
      return () => { clearInterval(interval); };
    }, [bgImage]);

    return (
        <header style={{
            backgroundImage: `url('${dishes[Object.keys(dishes)[bgImage]]}')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }}>
            <img src={Logo} alt="Juan Calaveras Logo" height="60%"/>
            <h3>CHEF PRIVADO</h3>
        </header>
    )

}

export default Header;