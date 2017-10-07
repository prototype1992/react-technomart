import React from 'react';

export default class Footer extends React.Component {
    render() {
        return (
            <footer className="main-footer">
                <section className="footer-top clearfix">
                    <div className="container">
                        <img className="footer-logo" src="./img/footer-logo.jpg" alt="Логотип Техномарт" height="68"
                             width="220"/>
                        <nav className="footer-nav">
                            <ul>
                                <li><a href="#">Компания</a></li>
                                <li><a href="#">Новости</a></li>
                                <li><a href="#">Каталог</a></li>
                                <li><a href="#">Доставка</a></li>
                                <li><a href="#">Контакты</a></li>
                            </ul>
                        </nav>
                    </div>
                </section>
                <section className="footer-middle clearfix">
                    <div className="container">
                        <section className="contact-bottom">
                            <p>г.Санкт-Петербург, ул. Б. Конюшенная, д. 19/8</p>
                            <p className="telephone">+7 (812) 555-05-55</p>
                        </section>
                        <ul>
                            <li><a href="#">Материалы</a></li>
                            <li><a href="#">Техника</a></li>
                            <li><a href="#">Инструмент</a></li>
                            <li><a href="#">Спецпредложения</a></li>
                        </ul>
                    </div>
                </section>
                <section className="footer-bottom clearfix">
                    <div className="container">
                        <section className="footer-copyright">
                            <p>&copy; 2010-2016 Компания &laquo;Техномарт&raquo; Все права защищены</p>
                        </section>
                        <div className="footer-links">
                            <section className="footer-social">
                                <a className="social-btn social-btn-vk" href="#">Вконтакте</a>
                                <a className="social-btn social-btn-fb" href="#">Фейсбук</a>
                                <a className="social-btn social-btn-inst" href="#">Инстаграм</a>
                            </section>
                            <section className="footer-contacts">
                                <p>Обратная связь:</p>
                                <a href="#">mail@htmlcademy.ru</a>
                            </section>
                            <section className="footer-creators">
                                <p>Разработано - </p>
                                <a href="https://htmlacademy.ru">HTML Academy</a>
                            </section>
                        </div>
                    </div>
                </section>
            </footer>
        );
    }
}
