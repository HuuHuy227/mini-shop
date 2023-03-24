import React from 'react'
import "./FeatureProduct.scss"
import Card from '../Card/Card'
import { Link } from 'react-router-dom'
import useFetch from "../../hooks/useFetch";

const FeatureProduct = ({ type, id, sent_type }) => {

    const { data, loading, error } = useFetch(
        `/products?populate=*&[filters][type][$eq]=${sent_type}`
    );


  const flag = id == 2 && true;

  return (
    <div className='featureProduct'>
        <div className="header">
            <h2>{type}</h2>
        </div>
        <div className="products">
            {error
            ? "Something went wrong!"
            : loading
            ? "loading"
            : data?.map((item) => <Card item={item} key={item.id} flag = {flag} />)}
            {/* {
                data.map((item,idx) => {
                    return <Card item = {item} key={idx} flag = {flag}/>
                })
            } */}
        </div>
        <div className="moreBtn">
            <button>
                <Link className='link' to = {`/products/${id}`}>
                    Xem thêm
                </Link>
            </button>
        </div>
    </div>
  )
}

export default FeatureProduct