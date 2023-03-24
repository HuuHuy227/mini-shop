import React from 'react'
import "./Products.scss"
import { useState, useEffect} from 'react'
import { useParams } from "react-router-dom";
import List from '../../components/List/List';

const Products = () => {
  const catId = parseInt(useParams().id);
  const [sort, setSort] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  let proName = '';

  if (catId === 0) {
    proName = 'Sản phẩm mới';
  }
  else if (catId === 1) {
    proName = 'Sản phẩm / Váy'
  }
  else {
    proName = "Sản phẩm / Phụ kiện"
  }

  return (
    <div className='products'>
      <div className="top">
          <span className='head'>{proName}</span>
          <div className="filterItem">
            <span>Lọc bởi</span>
            <select className='selector' name='price' defaultValue = "Lọc bởi" onChange={(e) => setSort(e.target.value)}>
              <option disabled selected>Lọc bởi</option>
              <option value="asc" >Từ thấp đến cao</option>
              <option value="desc">Từ cao đến thấp</option>
            </select>
          </div>
      </div>
      <div className="bot">
        <List catId={catId} sort={sort}/>
      </div>
    </div>
  )
}

export default Products

