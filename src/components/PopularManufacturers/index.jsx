import React from 'react';

export default class PopularManufacturers extends React.Component {
    render() {
        return (
            <section className="brands clearfix">
                <div className="popular-header">
                    <h2>Популярные производители:</h2>
                    <a href>Все производители</a>
                </div>
                <a className="brands-logo" href="#">
                    <img src="./img/bosch.jpg" alt="Bosch" height="37" width="126"/>
                </a>
                <a className="brands-logo" href="#">
                    <img src="./img/makita.jpg" alt="Makita" height="40" width="123"/>
                </a>
                <a className="brands-logo" href="#">
                    <img src="./img/dewalt.jpg" alt="DeWALT" height="44" width="146"/>
                </a>
                <a className="brands-logo" href="#">
                    <img src="./img/interskol.jpg" alt="Интерскол" height="88" width="200"/>
                </a>
                <a className="brands-logo" href="#">
                    <img src="./img/hitachi.jpg" alt="Hitachi" height="31" width="169"/>
                </a>
                <a className="brands-logo" href="#">
                    <img src="./img/lg.jpg" alt="LG" height="73" width="121"/>
                </a>
                <a className="brands-logo" href="#">
                    <img src="./img/aeg.jpg" alt="AEG" height="96" width="151"/>
                </a>
                <a className="brands-logo" href="#">
                    <img src="./img/metabo.jpg" alt="Metabo" height="69" width="204"/>
                </a>
            </section>
        );
    }
}
