import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import "./Footer.scss"

const Footer = () => {
  return (
    <div className="footer">
       <div className="section1">
            <div className="about">
               <h1>Về Chúng Tôi</h1>
               <span>
               Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
                amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt
                ut labore etdolore.
               </span>
               <div className="img-res">
                  <img src = "http://online.gov.vn/Content/EndUser/LogoCCDVSaleNoti/logoSaleNoti.png" />
               </div>
            </div>
       </div>
       <div className="section2">
          <div className="item">
              <h1>Liên Hệ</h1>
              <span>
                Hotline
                <br/>
                <span><b>1900 090 069</b></span>
              </span>
              <span>
                Email
                <br/>
                <span><b>minopiclothing@gmail.com</b></span>
              </span>
              <span>
                Monday - Friday
                <br/>
                <span><b>09:30 ~ 17:30</b></span>
                </span>
          </div>
          <div className="item">
              <h1>Hỗ Trợ</h1>
              <span>Chính sách khách hàng</span>
              <span>Phương thức thanh toán</span>
              <span>Vận chuyển</span>
              <span>Chính sách đổi & trả</span>
              <span>Cookies</span>
          </div>
          <div className="item">
              <h1>Mạng Xã Hội</h1>
              <div className="social">
                <FacebookIcon/>
                <InstagramIcon/>
              </div>
          </div>
          
       </div>
    </div>
  )
}

export default Footer