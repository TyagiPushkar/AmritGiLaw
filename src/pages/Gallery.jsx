import React from 'react'
// import './Campus.css'
import gallery_1 from '../assets/op.jpg'
import gallery_2 from '../assets/aaa.jpg'
import gallery_3 from '../assets/yy.jpg'
import gallery_4 from '../assets/pdaaaa.jpeg'
import Title from '../components/Title/Title'
import Campus from '../components/Campus/Campus'

const Gallery = () => {
  return (

    <div className='campus' style={{marginTop:"100px"}}>
        <Title subTitle='Gallery' title='Events Photos'/>
       <Campus/>
        {/* <button className='btn dark-btn'>See more here <img src={white_arrow} alt="" /></button> */}
    </div>
  )
}

export default Gallery