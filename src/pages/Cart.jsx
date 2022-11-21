import React from 'react';
import cart from '../assets/img/cart.svg';
import arrowLeft from '../assets/img/grey-arrow-left.svg';
import CartItem from '../components/CartItem';

const Cart = () => {
  return (
    <>
      {/* <div className="container container--cart">
          <div className="cart cart--empty">
            <h2>
              Корзина пустая <icon>😕</icon>
            </h2>
            <p>
              Вероятней всего, вы не заказывали ещё пиццу.
              <br />
              Для того, чтобы заказать пиццу, перейди на главную страницу.
            </p>
            <img src={basketImg} alt="Empty cart" />
            <a href="/" className="button button--black">
              <span>Вернуться назад</span>
            </a>
          </div>
        </div> */}

      <div className="container container--cart">
        <div className="cart">
          <div className="cart__top">
            <h2 className="content__title">
              <img className="cart-img" src={cart} alt="" /> Корзина
            </h2>
            <div className="cart__clear">
              <span className="material-symbols-outlined trash">delete</span>
              <span>Очистить корзину</span>
            </div>
          </div>
          <div className="cart__items">
            <CartItem />
            <CartItem />
          </div>
          <div className="cart__bottom">
            <div className="cart__bottom-details">
              <span>
                {' '}
                Всего пицц: <b>3 шт.</b>{' '}
              </span>
              <span>
                {' '}
                Сумма заказа: <b>900 ₽</b>{' '}
              </span>
            </div>
            <div className="cart__bottom-buttons">
              <a href="/" className="button button--outline button--add go-back-btn">
                <img src={arrowLeft} alt="" />
                <span>Вернуться назад</span>
              </a>
              <div className="button pay-btn">
                <span>Оплатить сейчас</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
