import React from 'react'
import "./Cart.scss"
import { Context } from '../../hooks/context';
import {useContext} from 'react'
import {useSelector, useDispatch} from "react-redux"
import { Link } from 'react-router-dom';
import { delItem } from '../../redux/cartReducer'

const Cart = () => {
  const {setShowCart} = useContext(Context);
  const products = useSelector(state => state.cart.products);
  const dispatch = useDispatch();
  
  const totalPrice = () => {
    let total = 0;
    products.forEach(item => {
       total += item.quantity*item.price;
    });
    return total;
 }

 const numberWithCommas = x => {
   return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
   }

  return (
    <div className='cart-panel'>
        <div className="opac-layer" onClick={() => setShowCart(false)}></div> 
        <div className='cart-content'>
            <div className="cart-header">
                <h1>Giỏ Hàng</h1>
                <div className="close-cart" onClick={() => setShowCart(false)}>Đóng</div>
            </div>
            <div className="cart-body">
                {products.length !== 0 ? products?.map(item => (
                    <div className="item" key={item.id}>
                        <img src = {item.img} />
                        <div className="detail">
                            <h1>{item.title}</h1>
                            <div className="price">
                                {item.quantity} x {item.price},000 vnđ
                            </div>
                        </div>
                        <div className="clear-icon" onClick={() => dispatch(delItem(item.id))}>x</div>
                    </div>
                )) : (<div className='empty-cart'>Giỏ hàng trống</div>)}
                <div className="total">
                    <span>Tạm tính</span>
                    <span>{numberWithCommas(totalPrice()*1000)} vnđ</span>
                </div>
                <Link className="link" to = "/payment" reloadDocument>
                    <div className="btn-cart">
                        Thanh toán
                    </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Cart