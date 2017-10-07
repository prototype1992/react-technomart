import React from 'react';
import ReactDOM from 'react-dom';

// components
import Header from './components/Header';
import Footer from './components/Footer';

const mapPath = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1998.5991043651616!2d30.320894615892275!3d59.938794181876204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696310fca5ba729%3A0xea9c53d4493c879f!2z0JHQvtC70YzRiNCw0Y8g0JrQvtC90Y7RiNC10L3QvdCw0Y8g0YPQuy4sIDE5LCDQodCw0L3QutGCLdCf0LXRgtC10YDQsdGD0YDQsywgMTkxMTg2!5e0!3m2!1sru!2sru!4v1479390464203';

function Wrapper() {
    return (
        <div className="wrapper">
            <Header/>

            <main>
                <div className="container">
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
                                <input className="btn promo-prev" id="promo-prev-id" name="promo-slider" type="radio"
                                       value="1" checked hidden/>
                                <label className="checked" htmlFor="promo-prev-id">Сюда</label>
                                <input className="btn promo-next" id="promo-next-id" name="promo-slider" type="radio"
                                       value="2" hidden/>
                                <label htmlFor="promo-next-id">Туда</label>
                            </div>
                            <div className="promo-slides">
                                <div className="promo-slide promo-slide-1">
                                    <h2>Перфораторы</h2>
                                    <img src="./img/slider-punchers.jpg" alt="Иллюстрация с перфоратором" height="266"
                                         width="620"/>
                                    <p>Настоящие мужские игрушки</p>
                                    <a href="#">Открыть каталог</a>
                                </div>
                                <div className="promo-slide promo-slide-2">
                                    <h2>Дрели</h2>
                                    <img src="img/slider-drills.jpg" alt="Иллюстрация с дрелью" height="266"
                                         width="620"/>
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
                    <section className="popular clearfix">
                        <div className="popular-header">
                            <h2>Популярные товары:</h2>
                            <a href="#">Все популярные товары</a>
                        </div>
                        <article className="pop-product">
                            <div className="product-img">
                                <img src="img/perforator-3.jpg" alt="Перфоратор BOSCH BFG 9000" height="164"
                                     width="184"/>
                            </div>
                            <div className="gallery-info">
                                <span className="prod-name">Перфоратор BOSCH BFG 9000</span>
                                <div className="product-price">
                                    <span className="old-price">32500 р.</span>
                                    <a className="new-price" href="#">25500 р.</a>
                                </div>
                            </div>
                            <div className="hover-product">
                                <a className="buy" href="#">купить</a>
                                <a className="marks-add" href="#">в закладки</a>
                            </div>
                        </article>
                        <article className="pop-product">
                            <div className="product-img">
                                <img src="img/perforator-2.jpg" alt="Перфоратор BOSCH BFG 3000" height="112"
                                     width="127"/>
                            </div>
                            <div className="gallery-info">
                                <span className="prod-name">Перфоратор BOSCH BFG 3000</span>
                                <div className="product-price">
                                    <span className="old-price">22500 р.</span>
                                    <a className="new-price" href="#">15500 р.</a>
                                </div>
                            </div>
                            <div className="hover-product">
                                <a className="buy" href="#">купить</a>
                                <a className="marks-add" href="#">в закладки</a>
                            </div>
                        </article>
                        <article className="pop-product">
                            <div className="product-img">
                                <img src="img/perforator-1.jpg" alt="Перфоратор BOSCH BFG 6000" height="128"
                                     width="144"/>
                            </div>
                            <div className="gallery-info">
                                <span className="prod-name">Перфоратор BOSCH BFG 6000</span>
                                <div className="product-price">
                                    <span className="old-price">30500 р.</span>
                                    <a className="new-price" href="#">25500 р.</a>
                                </div>
                            </div>
                            <div className="hover-product">
                                <a className="buy" href>купить</a>
                                <a className="marks-add" href="#">в закладки</a>
                            </div>
                        </article>
                        <article className="pop-product new">
                            <div className="product-img">
                                <img src="img/perforator-2.jpg" alt="Перфоратор BOSCH BFG 2000" height="112"
                                     width="127"/>
                            </div>
                            <div className="gallery-info">
                                <span className="prod-name">Перфоратор BOSCH BFG 2000</span>
                                <div className="product-price">
                                    <a className="new-price" href="#">12500 р.</a>
                                </div>
                            </div>
                            <div className="hover-product">
                                <a className="buy" href="#">купить</a>
                                <a className="marks-add" href="#">в закладки</a>
                            </div>
                        </article>
                    </section>
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
                </div>
                <section className="service">
                    <div className="container">
                        <h2>Сервисы</h2>
                        <p>Хороший интернет-магазин отличается от плохого не только ценами!Мы стараемся изо всех сил,
                            чтобы сделать ваши
                            покупки приятными.</p>
                        <div className="service-slider clearfix">
                            <div className="slider">
                                <ul>
                                    <li><input id="active-input" type="button" value="Доставка"/></li>
                                    <li><input type="button" value="Гарантия"/></li>
                                    <li><input type="button" value="Кредит"/></li>
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
                <div className="container">
                    <section className="info clearfix">
                        <div className="about-us">
                            <h2>Компания &laquo;Техномарт&raquo;</h2>
                            <p>Настоящий мужской шоппинг начинается здесь! Огромный выбор товаров для ремонта и
                                строительства не оставит
                                равнодушными любителей сэкномить на гастарбайтерах.</p>
                            <p>Мы можем доставить ваш товар в самые отдаленные точки России!<br/> Техномарт работает со
                                многими транспортными
                                компаниями:</p>
                            <ul>
                                <li>Деловые линии</li>
                                <li>Автотрейдинг</li>
                                <li>ЖелДорЭкспедиция</li>
                            </ul>
                            <a href="#">Подробнее о компании</a>
                        </div>
                        <div className="contact">
                            <h2>Контакты</h2>
                            <p>Вы можете забрать товар сами, заехав в наш офис:</p>
                            <a className="map" href="#" />
                            <a className="search-us" href="#">Заблудились? Напишите нам!</a>
                        </div>
                    </section>
                </div>
                <div className="map-popup">
                    <button className="map-popup-close" type="button" title="Закрыть">Закрыть</button>
                    <iframe src={mapPath} height="445" width="939" />
                </div>
                <div className="contact-popup">
                    <button className="contact-popup-close" type="button" title="Закрыть">Закрыть</button>
                    <form className="form clearfix" action="#" method="post">
                        <div className="popup-col popup-col1">
                            <label htmlFor="name">Ваше имя:</label>
                            <input id="name" name="name" type="text" placeholder="Представьтесь, пожалуйста"/>
                        </div>
                        <div className="popup-col popup-col2">
                            <label htmlFor="email">Ваш е-mail:</label>
                            <input id="email" name="email" type="email" placeholder="Для отправки ответа"/>
                        </div>
                        <div className="textarea">
                            <label className="comment-label" htmlFor="comment-field">Текст письма:</label>
                            <textarea id="comment-field" name="comment">в свободной форме</textarea>
                        </div>
                        <div className="finish-input">
                            <input className="contact-popup-btn" type="submit" value="отправить"/>
                        </div>
                    </form>
                </div>
            </main>

            <Footer/>
        </div>
    );
}

ReactDOM.render(
    <Wrapper/>,
    document.querySelector('#app')
);
