import React from 'react';

import ProductItem from '../ProductItem';

export default class PopularProducts extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <section className="popular clearfix">
                <div className="popular-header">
                    <h2>Популярные товары:</h2>
                    <a href="#">Посмотреть все товары</a>
                </div>
                <ProductItem title="Перфоратор BOSCH BFG 2000" imgPath="./img/perforator-3.jpg" price="12500" />
                <ProductItem title="Перфоратор BOSCH BFG 3000" imgPath="./img/perforator-2.jpg" price="13500" />
                <ProductItem title="Перфоратор BOSCH BFG 4000" imgPath="./img/perforator-1.jpg" price="14500" />
                <ProductItem title="Перфоратор BOSCH BFG 5000" imgPath="./img/perforator-2.jpg" price="15500" newElement={true} />
            </section>
        );
    }
}
