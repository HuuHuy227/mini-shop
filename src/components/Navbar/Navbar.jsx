import React, {useState, useEffect, useContext, useRef} from 'react'
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import "./Navbar.scss"
import CartFavor from '../CartFavor/CartFavor';
import Cart from '../Cart/Cart';
import {useSelector} from "react-redux"
import { Context } from '../../hooks/context';
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const { showCart, setShowCart, setQuery} = useContext(Context);
  const [showCartFavor, setShowCartFavor] = useState(false);
  const [message, setMessage] = useState('');

  const searchInput = useRef(null)

  const navigate = useNavigate();
  const products = useSelector(state => state.cart.products);
  
  const controlNavbar = () => {
    const winScroll = document.body.scrollTop || 
        document.documentElement.scrollTop;

    if (winScroll > 200) {  
      show && setShow(false);
    } 
    else {
        setShow(true);
    }      
  };

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setQuery(message)
      event.target.value = "";
      searchInput.current.blur();
      navigate('/search');
    }
  };

  useEffect(() => {   
    window.addEventListener("scroll", controlNavbar);
    // Remove Function
    return () => window.removeEventListener("scroll", controlNavbar); 
  }, [])


  return (
    <div className = "navbar">
      <div className = "wrapper">
          <div className="left"></div>
          <div className = "center">
            <Link className='link' to = "/">Minopi Clothing</Link>
          </div>
          <div className = "right">
                <FavoriteBorderIcon className='icon-shopping shopping' onClick= {() => setShowCartFavor(!showCartFavor)}/>
                <AccountCircleOutlinedIcon className='icon-shopping'/>
                <div className="cartIcon" onClick={() => setShowCart(true)}>
                      <ShoppingBagOutlinedIcon className='icon-shopping'/>
                      <span>{products.length}</span>
                </div>
                <div className="cartIcon">
                      <img src="https://levents.asia/template/assets/images/svg/ic-vn.svg" />
                </div>
        </div>
      </div>

      <div className={show ? "sub-wrapper" : "sub-wrapper-hidden"}>
           { show && <SearchIcon/>}
            <input 
            ref={searchInput}
            placeholder='BẠN TÌM GÌ CHÚNG TÔI SẼ GIÚP BẠN?'
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            />
      </div>
      {showCartFavor && (<CartFavor />)}
      {showCart && (<Cart/>)}
    </div>
  )
}

export default Navbar