import React from 'react'
import { useState } from 'react'
import "./Product.scss"
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import {useDispatch} from "react-redux"
import { addToCart,addFavor } from '../../redux/cartReducer';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const Product = () => {
  const [selectedImage, setSelectedImage] = useState("img")
  const [quantity, setQuantity] = useState(1)
  const [isShown, setIsShown] = useState(false);
  const [showInfo, setshowInfo] = useState(false);
  const [showSize, setshowSize] = useState(false);
  const [showRef, setshowRef] = useState(false);
  const [isFavor, setIsFavor] = useState(false);

  const id = useParams().id;

  const { data, loading} = useFetch(
    `/products/${id}?populate=*`
  );
  
  const dispatch = useDispatch();

  return (
    <div className='product'>
      {loading ? (
        "loading"
      ) : (
      <>
      <div className="left" onMouseLeave={() => setIsShown(false)}>
        <div className="images">
        {isShown && (
        <div>
          <img src =  {process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img?.data?.attributes?.url} onClick = {e => setSelectedImage("img")} alt = ""/>
          <img src = {process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img2?.data?.attributes?.url} onClick = {e => setSelectedImage("img2")} alt = "" />
        </div>
        )}
        </div>
        <div className="mainImage" >
          <img src={process.env.REACT_APP_UPLOAD_URL + data?.attributes[selectedImage]?.data?.attributes?.url} onMouseEnter={() => setIsShown(true)}/>
        </div>
      </div>
      <div className="right">
        <h1>{data?.attributes?.title}</h1>
        <span className='price'>{data?.attributes?.price},000 vnđ</span>
        <div className="quantity">
          <span>Số lượng: </span>
          <button onClick={() => setQuantity(prev => prev === 1 ? 1 : prev - 1)}>-</button>
          {quantity}
          <button onClick={() => setQuantity(prev => prev + 1)}>+</button>
        </div>
        <div className="add">
          <button className='btn' onClick={() => {
          dispatch(addToCart({
            id: data.id,
            title: data.attributes.title,
            price: data.attributes.price,
            img: process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img?.data?.attributes?.url,
            quantity
          }))
          setQuantity(1)
          }}>Thêm vào giỏ hàng</button>
          <div className="add-icon" onClick={() => {dispatch(addFavor({
            id: data.id,
            title: data.attributes.title,
            price: data.attributes.price,
            img: process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img?.data?.attributes?.url,
          }))
          setIsFavor(true)
          }}>
              {isFavor ? (<FavoriteOutlinedIcon/>) : (<FavoriteBorderOutlinedIcon/>)}
          </div>
        </div>
        <div className="info">
          <h2 onClick={() => setshowInfo(!showInfo)}>Thông tin</h2>
          {
            showInfo && (
            <span>
              {data?.attributes?.desc}
            </span>)
          }
          
        </div>
        <div className="size">
          <h2 onClick={() => setshowSize(!showSize)}>Bảng size</h2>
          {
            showSize && (
            <span>
              Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
              amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt
              ut labore etdolore.
            </span>
            )
          }
        </div>
        <div className="refund">
          <h2 onClick={() => setshowRef(!showRef)}>Quy định đổi trả</h2>
          {
            showRef && (
            <span>
            Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
            amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt
            ut labore etdolore.
            </span>
            )
          }
        </div>
      </div>
      </>
      )}
    </div>
  )
}

export default Product