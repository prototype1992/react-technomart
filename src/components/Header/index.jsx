import React from 'react';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log('header menu', this.props.menu);
        return (
            <header className="main-header">
                <section className="header-top clearfix">
                    <div className="container">
                        <a href="/">
                            <img src="./img/logo.png" alt="Логотип  Техномарт" height="18" width="110"/>
                        </a>
                        <div className="header-gadget">
                            <div className="search-input">
                                <form>
                                    <input id="search-id" type="search" placeholder="Поиск:"/>
                                    <label htmlFor="search-id">Поиск по сайту</label>
                                </form>
                            </div>
                            <a className="order-btn" href="/order">Оформить заказ</a>
                            <a className="basket" href="/basket">Корзина: 10</a>
                            <a className="marks" href="/marks">Закладки: 0</a>
                        </div>
                    </div>
                </section>
                <section className="header-bottom">
                    <div className="container">
                        <div className="header-bottom__top">
                            <div className="header-description">
                                <p>Интернет-магазин строительных материалов</p>
                                <p>и инструментов для ремонта</p>
                            </div>
                            <div className="header-contacts">
                                <span className="tel-number">+7 (812) 555-05-55</span>
                                <span className="address">г. Санкт-Петербург, ул. Б. Конюшенная, д. 19/8</span>
                            </div>
                            <div className="header-auth-new active-auth">
                                <a className="login" href="/sign-in">Войти</a>
                                <a className="check-in" href="/check-in">Регистрация</a>
                            </div>
                            <div className="header-auth-old">
                                <span>Равшан Джамшутович<a className="check-out" href="#">Выйти</a></span>
                                <a href="#">Мои заказы</a>
                                <a href="#">Личный кабинет</a>
                            </div>
                        </div>
                        <div className="header-bottom__menu">
                            <nav className="main-menu">
                                <ul>
                                    {
                                        this.props.menu.map( item => (
                                            <li key={item.id}>
                                                <a href={item.href}>
                                                    {item.text}
                                                </a>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </nav>
                        </div>
                    </div>
                </section>
            </header>
        );
    }
}
