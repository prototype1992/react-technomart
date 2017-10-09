import React from 'react';

export default class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer className="main-footer">
                <section className="footer-middle clearfix">
                    <div className="container">
                        <ul className="footer-middle__list">
                            {
                                this.props.menu.map( item => (
                                    <li className="footer-middle__item" key={item.id}>
                                        <a href={item.href} className="footer-middle__link">{item.text}</a>
                                    </li>
                                ))
                            }
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
                                <a href="http://alisultanov.ru" target="_blank">Alisultanov.ru</a>
                            </section>
                        </div>
                    </div>
                </section>
            </footer>
        );
    }
}
