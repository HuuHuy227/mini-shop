import { useState, React, useEffect} from 'react';
import "./Slider.scss"

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
        // "https://cdn.kkfashion.vn/blog-img/large-vayy-175099.jpg?w=656",
        // "https://cdn.kkfashion.vn/6850-large_default/dam-lech-vai-dang-xoe-mau-trang-hl15-13.jpg",
        "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
      ];

    useEffect(() => {
        const timeID = setInterval(() => {
          setCurrentSlide(currentSlide === (data.length - 1) ? 0 : (prev) => prev + 1);
        }, 5000)

        return () => clearInterval(timeID)

      }, [currentSlide])

    return (
    <div className='slider'>
        <div className="container"
        style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
            {data.map((value,idx) => {
              return (
                <img key = {idx} src={value} alt = "" draggable = "false"/>
              )
            })
            }
        </div>

      <div className="icons">
        {
          data.map((_, idx) => {
            return (
              <div 
              key = {idx}
              className={
                idx === currentSlide 
                ? "icon icon-active"
                : "icon"
              }
              onClick = {() => setCurrentSlide(idx)}
              ></div>
            )
          })
        }
      </div>

    </div>
  )
}

export default Slider