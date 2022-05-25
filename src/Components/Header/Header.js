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
const dishesLength = Object.keys(dishes).length;

// Interactive elements
const dishStyle = (dishNumber) => {
    return {
        backgroundImage: `url('${dishes[Object.keys(dishes)[dishNumber]]}')`,
        backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat',
        filter: 'brightness(0.5)'
    }
};

// Component
function Header() {

    const [ bgImage, setBgImage ] = useState(0);

    const carousel = () => {
        let currentDish = -1;
        return (
            <div className='dishes' style={{gridTemplateColumns: `repeat(${dishesLength}, 100%)`}}>
                {Object.keys(dishes).map( dish => {
                    currentDish ++;
                    return <div
                            id={dish.replace(/\.[a-z]{3}/, '')}
                            key={`dish-${currentDish}`}
                            className='dish'
                            style={dishStyle(currentDish)}>
                        </div>
                })}
            </div>
        )
    }

    useEffect(() => {
        const interval = setInterval(() => {
          setBgImage((bgImage + 1) % dishesLength);
          const dishCarousel = document.getElementsByClassName('dish');
          for (const carouselEl of dishCarousel) {
              carouselEl.style.transform = `translateX(${-100*bgImage}%)`;
          }
        }, 3000);
        return () => { clearInterval(interval); };
    }, [bgImage]);

    return (
        <header>
            {carousel(bgImage)}
            <img className='logo' src={Logo} alt="Juan Calaveras Logo" />
            <h3>COCINERO ERRANTE</h3>
        </header>
    )

}

export default Header;