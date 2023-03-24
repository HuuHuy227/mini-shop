import React from 'react'
import "./Map.scss"

const Map = () => {
  return (
    <div className="map">
        <iframe className='mapEmb'
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d375.1184272413858!2d106.70707759413652!3d10.738478360261116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f9bc0e9f93f%3A0x92416ef78e02e461!2zU-G7kSA2MywgUXXhuq1uIDcsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1678676203096!5m2!1sen!2s" 
            loading="lazy">
        </iframe>

        <div className="contact">
            <h2>Cần hỗ trợ hoặc thắc mắc 
                <br/>hãy gửi tin nhắn ngay cho chúng tôi nhé!</h2>
            <input className='name' placeholder="Họ và tên…"/>
            <div className="mail">
                <input placeholder="Email…"/>
                <input className='phone' placeholder="Số điện thoại…"/>
            </div>
            <button>Gửi</button>
        </div>

    </div>

    
  )
}

export default Map