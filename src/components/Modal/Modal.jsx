import "./Modal.scss"
import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Link } from "react-router-dom";
import { Context } from '../../hooks/context';
import { useContext } from "react";

const Modal = () => {
  const { setIsOpen } = useContext(Context);
  return (
    <div className="modal">
        <div className="opac-layer" onClick={() => setIsOpen(false)}></div> 
        <div className='modal-content'>
            <CheckCircleIcon className="success-icon"/>
            <span>Đặt đơn hàng thành công</span>
            <Link className="link" to="/">
                <button className="btn">Về trang chủ</button>
            </Link>
        </div>
    </div>
  )
}

export default Modal