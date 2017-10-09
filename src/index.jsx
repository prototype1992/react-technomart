import React from 'react';
import ReactDOM from 'react-dom';

// components
import Header from './components/Header';
import Footer from './components/Footer';

import Promo from './components/Promo';
import PopularProducts from './components/PopularProducts';
import PopularManufacturers from './components/PopularManufacturers';

import Service from './components/Service';
import Info from './components/Info';

// data
import mainMenu from './data/mainMenu.json';

console.log('menu', mainMenu);

class Wrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mapOpened: false,
            contactOpened: false
        };
    }

    render() {
        return (
            <div className="wrapper">
                <Header menu={mainMenu}/>

                <main>
                    <div className="container">
                        <Promo />

                        <PopularProducts />

                        <PopularManufacturers />
                    </div>

                    <Service />

                    <Info
                        openedMap={this.state.mapOpened}
                        openedPopup={this.state.contactOpened}
                        onMapClick={this.mapOpened}
                        onPopupClick={this.contactOpened}
                    />
                </main>

                <Footer menu={mainMenu}/>
            </div>
        );
    }
}

ReactDOM.render(
    <Wrapper/>,
    document.querySelector('#app')
);
