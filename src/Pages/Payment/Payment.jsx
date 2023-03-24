import React, { useState, useContext } from 'react'
import "./Payment.scss"
import {useSelector} from "react-redux"
import Modal from '../../components/Modal/Modal'
import { Context } from '../../hooks/context';

const Payment = () => {
  const products = useSelector(state => state.cart.products);
  const [discount, setDiscount] = useState("");
  const [flag, setFlag] = useState(false);
  const [flagLeft, setFlagLeft] = useState(false);
  const { isOpen, setIsOpen } = useContext(Context);

  const totalPrice = () => {
    let total = 0;
    products.forEach(item => {
       total += item.quantity*item.price;
    });
    if (discount !== "") {
        total -= discount === "WomanDay83" ? 10 : 20;
    }
    return total;
    }

 const tmpPrice = () => {
    let total = 0;
    products.forEach(item => {
       total += item.quantity*item.price;
    });
    return total;
 }

 const handleSubmit = () => {
    let name = document.getElementById("name").value;
    let mail = document.getElementById("mail").value;
    let phone = document.getElementById("phone").value;
    let address = document.getElementById("address").value;
    let city = document.getElementById("city").value;
    if (name.length === 0 || mail.length === 0 || phone.length === 0 || address.length === 0 || city.length === 0) {
        setFlagLeft(true)
    }
    else {
        setFlagLeft(false)
        setIsOpen(true);
    }
 }

    const numberWithCommas = x => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }


  return (
    <>
    <div className='payment'>
        <span className='head'>Thanh toán</span>
        <div className="body">
            <div className="left">
                <h1>Thông tin giao hàng</h1>
                <input id='name' className='name' placeholder="Họ và tên"/>
                <div className="mail">
                    <input id='mail' placeholder="Email"/>
                    <input id='phone' className='phone' 
                    style={{marginLeft: 25}}
                    placeholder="Số điện thoại"/>
                </div>
                <div className="address">
                    <input id='address' placeholder="Địa chỉ"/>
                    <select id='city' className='selector'>
                        <option value="" disabled selected>Chọn Thành phố</option>
                        <option value="hcm">Hồ Chí Minh</option>
                        <option value="hn">Hà Nội</option>
                    </select>
                </div>
                {flagLeft && (<div className="alert">Vui lòng điền đầy đủ thông tin</div>)}
                <button className='btn' onClick={handleSubmit}>Tiến hành thanh toán</button>
            </div>
            <div className="right">
                <h1>Giỏ hàng</h1>
                <div className="items">
                    {products?.map(item => (
                        <div className="item" key={item.id}>
                            <img src = {item.img} />
                            <div className="detail">
                                <h1>{item.title}</h1>
                                <div className="price">
                                   x {item.quantity} <span>{item.quantity*item.price},000 vnđ</span>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="discount">
                        <select className='selector' onChange={(e) => setDiscount(e.target.value)}>
                            <option value="" disabled selected>Chọn Mã giảm</option>
                            <option value="WomanDay83">WomanDay83</option>
                            <option value="BlackFriday">BlackFriday</option>
                        </select>
                        <button className='btn' onClick={e => setFlag(true)}>Áp mã giảm</button>
                    </div>
                    <div className="line"></div>
                    <div className="temp-price">
                        Tạm tính
                        <span>{numberWithCommas(tmpPrice()*1000)} vnđ</span>
                    </div>
                    {flag && (
                    <div className="discount-apply">
                        <div className="code">
                            Mã giảm: {discount}
                            <div className="del-code" onClick={e => {
                                setDiscount("")
                                setFlag(false)}}>[remove]</div>
                        </div> 
                        <span>-{discount === "WomanDay83" ? 10 : 20},000 vnđ</span>
                    </div>
                    )}
                    <div className="sum-price">
                        Tổng
                        <span>{flag ? numberWithCommas(totalPrice()*1000) : numberWithCommas(tmpPrice()*1000)} vnđ</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {isOpen && (<Modal />)}
    </>
  )
}

export default Payment