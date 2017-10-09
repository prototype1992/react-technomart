import React from 'react';

export default class ProductItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <article className={this.props.newElement ? "pop-product new": "pop-product"}>
                <div className="product-img">
                    <img src={this.props.imgPath} alt={this.props.title} />
                </div>
                <div className="gallery-info">
                    <span className="prod-name">{this.props.title}</span>
                    <div className="product-price">
                        <span className="old-price">{this.props.price * 1.5} р.</span>
                        <a className="new-price" href="#">{this.props.price} р.</a>
                    </div>
                </div>
                <div className="hover-product">
                    <a className="buy" href="#">купить</a>
                    <a className="marks-add" href="#">в закладки</a>
                </div>
            </article>
        );
    }
}
