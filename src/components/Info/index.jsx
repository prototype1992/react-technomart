import React from 'react';

export default class Info extends React.Component {
    constructor(props) {
        super(props);
        this.handleOpenMap = this.handleOpenMap.bind(this);
        this.handleOpenPopup = this.handleOpenPopup.bind(this);
    }

    handleOpenMap(event) {
        event.preventDefault();
    }

    handleOpenPopup(event) {
        event.preventDefault();
    }

    render() {
        const mapPath = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1998.5991043651616!2d30.320894615892275!3d59.938794181876204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696310fca5ba729%3A0xea9c53d4493c879f!2z0JHQvtC70YzRiNCw0Y8g0JrQvtC90Y7RiNC10L3QvdCw0Y8g0YPQuy4sIDE5LCDQodCw0L3QutGCLdCf0LXRgtC10YDQsdGD0YDQsywgMTkxMTg2!5e0!3m2!1sru!2sru!4v1479390464203";
        return (
            <div className="container">
                <section className="info clearfix">
                    <div className="about-us">
                        <h2>Компания &laquo;Техномарт&raquo;</h2>
                        <p>Настоящий мужской шоппинг начинается здесь! Огромный выбор товаров для ремонта и
                            строительства не оставит равнодушными любителей сэкномить на гастарбайтерах.</p>
                        <p>Мы можем доставить ваш товар в самые отдаленные точки России!<br/> Техномарт работает со
                            многими транспортными компаниями:</p>
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
                        <a className="map" href="#" onClick={this.handleOpenMap}/>
                        <a className="search-us" href="#" onClick={this.handleOpenPopup}>Заблудились? Напишите нам!</a>
                    </div>
                </section>

                <div className={this.props.openedMap ? "map-popup map-popup-show": "map-popup"}>
                    <button className="map-popup-close" type="button" title="Закрыть">Закрыть</button>
                    <iframe src={mapPath} height="445" width="939" />
                </div>

                <div className={this.props.openedPopup ? "contact-popup contact-popup-show" : "contact-popup"}>
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
            </div>
        );
    }
}
