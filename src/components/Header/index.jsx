import React from 'react';

export default class Header extends React.Component {
    render() {
        return (
            <header className="main-header">
                <section className="header-top clearfix">
                    <div className="container">
                        <a>
                            <img src="./img/logo.png" alt="Логотип  Техномарт" height="18" width="110"/>
                        </a>
                        <div className="header-gadget">
                            <div className="search-input">
                                <form>
                                    <input id="search-id" type="search" placeholder="Поиск:"/>
                                    <label htmlFor="search-id">Поиск по сайту</label>
                                </form>
                            </div>
                            <a className="order-btn" href="#">Оформить заказ</a>
                            <a className="basket" href="#">Корзина: 10</a>
                            <a className="marks" href="#">Закладки: 0</a>
                        </div>
                    </div>
                </section>
                <section className="header-bottom">
                    <div className="container">
                        <div className="header-description">
                            <p>Интернет-магазин строительных материалов</p>
                            <p>и инструментов для ремонта</p>
                        </div>
                        <div className="header-contacts">
                            <span className="tel-number">+7 (812) 555-05-55</span>
                            <span className="address">г. Санкт-Петербург, ул. Б. Конюшенная, д. 19/8</span>
                        </div>
                        <div className="header-auth-new active-auth">
                            <a className="login" href="#">Войти</a>
                            <a className="check-in" href="#">Регистрация</a>
                        </div>
                        <div className="header-auth-old">
                            <span>Равшан Джамшутович<a className="check-out" href="#">Выйти</a></span>
                            <a href="#">Мои заказы</a>
                            <a href="#">Личный кабинет</a>
                        </div>
                        <nav className="main-menu">
                            <ul>
                                <li><a href="#">Главная</a></li>
                                <li><a href="#">Компания</a></li>
                                <li><a href="#">Каталог</a></li>
                                <li><a href="#">Новости</a></li>
                                <li><a href="#">Спецпредложения</a></li>
                                <li><a href="#">Доставка</a></li>
                                <li><a href="#">Контакты</a></li>
                            </ul>
                        </nav>
                    </div>
                </section>
            </header>
        );
    }
}
