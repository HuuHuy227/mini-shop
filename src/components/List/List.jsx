import React from 'react'
import Card from '../Card/Card'
import "./List.scss"
import useFetch from '../../hooks/useFetch';

const List = ({catId, sort}) => {

    let url = '';

    if (catId === 0) {
        url = sort ? `/products?populate=*&[filters][isNew][$eq]=true&sort=price:${sort}` : '/products?populate=*&[filters][isNew][$eq]=true';
    }
    else if (catId === 1) {
        url = sort ? `/products?populate=*&[filters][categories][id][$eq]=2&sort=price:${sort}` : '/products?populate=*&[filters][categories][id][$eq]=2';
    }
    else {
        url = sort ? `/products?populate=*&[filters][categories][id][$eq]=1&sort=price:${sort}` : '/products?populate=*&[filters][categories][id][$eq]=1';
    }

  const { data, loading, error } = useFetch(url);
 

  return (
    <div className='list'>
        {error
        ? "Something went wrong!"
        : loading
        ? "loading"
        : data?.map((item) => {
            const id = item?.attributes?.categories?.data[0].id;
            return (<Card item={item} key={item.id} flag = {id === 1 ? true : false}/>)
        })}
    </div>
  )
}

export default List