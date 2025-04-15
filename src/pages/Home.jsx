import React, { useState } from 'react'
import Hero from '../components/Hero/Hero'
import Title from '../components/Title/Title'
import Programs from '../components/Programs/Programs'
import About from '../components/About/About'
import Campus from '../components/Campus/Campus'
import Contact from '../components/Contact/Contact'
import Addmission from '../components/Addmission/Addmission'

const Home = () => {
    const [playState, setPlayState] = useState(false);
    return (
        <>
            <Hero />
            <div>
                <About setPlayState={setPlayState} />
                <Title subTitle='OUR Courses' title='What We Offer' />
                <Programs />
                
                <Title title='Campus Photos' />
                <Campus />
                {/* <Title subTitle='TESTIMONIALS' title='What Student Says' />
                <Testimonials /> */}
                <Addmission/>
                <Title subTitle='Contact Us ' title='Get in Touch' />
                <Contact />

            </div>
            {/* <VideoPlayer playState={playState} setPlayState={setPlayState} /> */}
        </>
    )
}

export default Home
