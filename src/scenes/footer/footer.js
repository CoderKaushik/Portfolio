import React from 'react'
import './footer.css'
import Footerimage from './footerimage.png'
import IIIT from './iiitkota.png'
import GDSC from './gdsclogo.png'

const footer = () => {
  return (
    <div className='footer-main'>
      <div className='inside-footer'>
        {/* <div className='box'></div> */}
        <div className='box'>
            <div className='footer-box'>
              <h1>Hiteshwar Kaushik</h1>
              <p>
              Vice President - IIITians Network | Google DSC PR - Outreach Lead | B.Tech. CSE IIITK'26 | MERN Stack Dev | Web Team'23 - IIIT Kota
              </p>
              <div className='footer-logos'>
              <img src={GDSC}/>
              <img src={IIIT}/>
              <img src={GDSC}/>
              </div>
            </div>
            <div className='footer-box image-footer'>
              <img src={Footerimage}/>
            </div>
        </div>
        <hr />
        <div className='bottom-box'>
          <p>Copyright &copy; 2024. Made by Hiteshwar Kaushik.</p>
        </div>
      </div>
    </div>
  )
}

export default footer
