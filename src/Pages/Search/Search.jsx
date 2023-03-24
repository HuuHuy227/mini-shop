import { Context } from '../../hooks/context';
import { useContext } from 'react';
import React from 'react'
import "./Search.scss"
import useFetch from '../../hooks/useFetch';
import Card from '../../components/Card/Card';

const Search = () => {

  const {query} = useContext(Context)

  const { data, loading} = useFetch(
    `/products?populate=*&filters[title][$contains]=${query}`);

  return (
    <div className='search'>
      <div className="top">
          <span className='head'>Tìm kiếm sản phẩm</span>
      </div>
      <div className="bot">
        {
        data === null || data.length === 0 
        ?
        <div className="empty-cart">Không tìm thấy sản phẩm phù hợp với yêu cầu.</div>
        :
        loading
        ? "loading"
        : data?.map((item) => {
            const id = item?.attributes?.categories?.data[0].id;
            return (<Card item={item} key={item.id} flag = {id === 1 ? true : false}/>)
        })
        }
      </div>
    </div>
  )
}

export default Search