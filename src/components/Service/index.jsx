import React from 'react';

export default class Service extends React.Component {
    render() {
        return (
            <section className="service">
                <div className="container">
                    <h2>Сервисы</h2>
                    <p>Хороший интернет-магазин отличается от плохого не только ценами!Мы стараемся изо всех сил,
                        чтобы сделать ваши покупки приятными.</p>
                    <div className="service-slider clearfix">
                        <div className="slider">
                            <ul>
                                <li>
                                    <input id="active-input" type="button" value="Доставка"/>
                                </li>
                                <li>
                                    <input type="button" value="Гарантия"/>
                                </li>
                                <li>
                                    <input type="button" value="Кредит"/>
                                </li>
                            </ul>
                        </div>
                        <div className="slides">
                            <div className="slide slide-1">
                                <h3>Доставка</h3>
                                <p>Мы с удовольствием доставим ваш товар прямо к вашему подъезду совершенно
                                    бесплатно! Ведь мы неплохо
                                    заработаем,<br/> поднимая его на ваш на этаж!</p>
                            </div>
                            <div className="slide slide-2">
                                <h3>Гарантия</h3>
                                <p>Если купленный у нас товар поломается или заискрит, а также в случае пожара,
                                    спровоцированного его
                                    возгаранием, вы всегда можете быть уверены в нашей гарантии. Мы обменяем
                                    сгоревший товар на новый. Дом уж
                                    восстановите как-нибудь сами.</p>
                            </div>
                            <div className="slide slide-3">
                                <h3>Кредит</h3>
                                <p>Залезть в долговую яму стало проще! Кредитные консультанты придут вам на
                                    помощь.</p>
                                <a href="#">Отправить заявку</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
