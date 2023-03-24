import React from 'react'
import "./Card.scss"
import { Link } from 'react-router-dom'


const Card = ({item, flag}) => {
  return (
    <Link className='link' to = {`/product/${item.id}`}> 
        <div className="card">
            <div className={flag ? "images imagesAccess" : "images"}>
                {item?.attributes.isNew && <span>Sản phẩm mới</span>}
                <img className='mainImg' src = {process.env.REACT_APP_UPLOAD_URL + item.attributes?.img?.data?.attributes?.url}/>
                <img className='secondImg' src = {process.env.REACT_APP_UPLOAD_URL + item.attributes?.img2?.data?.attributes?.url}/>

            </div>
            <div className="content">
                <h3>{item?.attributes.title}</h3>
                <span>{item?.attributes.price},000 vnđ</span>
            </div>
        </div>
    </Link>
  )
}

export default Card