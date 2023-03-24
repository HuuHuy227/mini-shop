import React from 'react'
import Slider from '../../components/Slider/Slider'
import FeatureProduct from '../../components/FeatureProduct/FeatureProduct'
import "./Home.scss"
import Map from '../../components/Map/Map'
import { useEffect } from 'react'

const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="home">
      <Slider />
      <FeatureProduct type = "sản phẩm mới" id = "0" sent_type = "arrival"/>
      <FeatureProduct type = "sản phẩm nổi bật" id = "1" sent_type = "trending"/>
      <FeatureProduct type = "phụ kiện" id = "2" sent_type = "accessories"/>
      <Map />
    </div>
  )
}

export default Home