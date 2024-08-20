import React from 'react'
import './CSS/Page6.css'
import video1 from '../assets/Video/Galaxy Motion Background Video [HD] ~ FREE.webm'

const Page6 = () => {
  return (
    <>
    <section className="video" >
        <div className="videoheading">
            <h1 className='text-center'>Explore ABIV</h1>

        </div>
        <div id="video" className='mx-auto'>
            <video className='mx-auto' autoPlay loop src={video1} controls muted />

        </div>
    </section>
      
    </>
  )
}

export default Page6
