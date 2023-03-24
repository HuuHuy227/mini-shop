import React from 'react'
import "./CartFavor.scss"
import {useSelector, useDispatch} from "react-redux"
import { resetFavor } from '../../redux/cartReducer'
import { Link } from 'react-router-dom'

const CartFavor = () => {
  
  const products = useSelector(state => state.cart.productFavor);
  const dispatch = useDispatch();
  //console.log(products.length)
  return (
    <div className='cart'>
        <h1 className='cart-head'>Sản phẩm yêu thích</h1>
        {products.length !== 0 ? products?.map(item => (
            <div className="item" key={item.id}>
                <Link className="link" to={`product/${item.id}`}>
                    <img src = {item.img} />
                </Link>
                <div className="detail">
                    <Link className='link' to={`product/${item.id}`}>
                        <h1>{item.title}</h1>
                    </Link>
                    <div className="price">
                        {item.price},000 vnđ
                    </div>
                </div>
            </div>
        )) : (<div className='empty-cart'>Hiện chưa có sản phẩm yêu thích</div>)}
        <div className="reset btn" onClick={() => dispatch(resetFavor())}>
            Đặt lại
        </div>
    </div>
  )
}

export default CartFavor