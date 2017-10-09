import React from 'react';

export default class Promo extends React.Component {
    render() {
        return (
            <section className="promo clearfix">
                <div className="item item-1 new">
                    <span>Материалы</span>
                    <a href="#">На любой вкус</a>
                </div>
                <div className="item item-2">
                    <span>Инструмент</span> <a href="#">На все случаи</a>
                </div>
                <div className="item item-3">
                    <span>Техника</span><a href="#">Для стройки</a>
                </div>
                <div className="promo-slider">
                    <div className="slider-btn">
                        <input className="btn promo-prev" id="promo-prev-id" name="promo-slider" type="radio" value="1"/>
                        <label className="checked" htmlFor="promo-prev-id">Сюда</label>
                        <input className="btn promo-next" id="promo-next-id" name="promo-slider" type="radio" value="2"/>
                        <label htmlFor="promo-next-id">Туда</label>
                    </div>
                    <div className="promo-slides">
                        <div className="promo-slide promo-slide-1">
                            <h2>Перфораторы</h2>
                            <img src="./img/slider-punchers.jpg" alt="Иллюстрация с перфоратором" height="266" width="620"/>
                            <p>Настоящие мужские игрушки</p>
                            <a href="#">Открыть каталог</a>
                        </div>
                        <div className="promo-slide promo-slide-2">
                            <h2>Дрели</h2>
                            <img src="./img/slider-drills.jpg" alt="Иллюстрация с дрелью" height="266" width="620"/>
                            <p>Соседям на радость!</p>
                            <a href="#">Открыть каталог</a>
                        </div>
                    </div>
                </div>
                <div className="item item-4">
                    <span>Скидки 50%</span>
                    <a href="#">на 350 товаров</a>
                </div>
                <div className="item item-5">
                    <span>Доставка</span>
                    <a href="#">Бесплатно</a>
                </div>
            </section>
        );
    }
}
