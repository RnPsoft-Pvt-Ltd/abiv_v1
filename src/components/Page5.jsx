import React from 'react'
import img1 from '../assets/Rectangle 6697.png'
import img2 from '../assets/Rectangle 6696.png'
import img3 from '../assets/Rectangle 6695.png'

const Page5 = () => {
  return (
    <section className="bg-gradient-to-b from-[#000D3F] to-black text-white py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">Why ABIV</h1>
        <p className="text-lg font-light mt-4 mx-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      {/* Card-container */}
      <div className="flex flex-col lg:flex-row lg:mx-36 justify-center items-center ">
        {/* Left Column (Two Cards) */}
        <div className="flex flex-col lg:w-2/3 justify-center items-center">
          {/* Doubt card */}
          <div className="bg-[#084FC7]  w-[60%] lg:w-auto flex flex-col lg:flex-row items-center lg:h-[300px]">
            <img src={img1} alt="Doubts" className="w-full lg:w-1/2 h-full object-cover mb-4 lg:mb-0 lg:mr-4" />
            <div className='p-6 lg:p-0'>
              <h5 className="text-2xl font-bold">Doubts</h5>
              <p className="mt-3 mr-3 font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Lorem ipsum dolor sit amet,
              </p>
              <button className="mt-5 flex items-center text-sm font-medium">
                See Full Review
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ml-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </button>
            </div>
          </div>

          {/* MCQ Card */}
          <div className="bg-[#084FC7] w-[60%] lg:mt-6 lg:mr-6 lg:w-auto flex flex-col lg:flex-row items-center lg:h-[300px]">
            <img src={img2} alt="MCQs" className="w-full lg:w-1/2 h-full object-cover mb-4 lg:mb-0 lg:mr-4" />
            <div className='p-6 lg:p-0'>
              <h5 className="text-2xl font-bold">MCQs</h5>
              <p className="mt-3 mr-3 font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Lorem ipsum dolor sit amet,
              </p>
              <button className="mt-5 flex items-center text-sm font-medium">
                See Full Review
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Right Column (Notes Card) */}
        <div className="bg-[#084FC7] w-[60%]  flex flex-col justify-center items-center lg:w-1/3 lg:h-[610px]">
          <img src={img3} alt="Notes" className="w-full h-full lg:h-1/2 object-cover mb-4" />
          <div className="text-center p-6 lg:p-6 lg:h-1/2 flex flex-col justify-center ">
            <h5 className="text-2xl font-bold mb-2 text-left">Notes</h5>
            <p className="font-normal mb-3 text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Lorem ipsum dolor sit amet,
            </p>
            <button className="flex items-center text-sm font-medium">
              See Full Review
              <svg className="rtl:rotate-180 w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Page5
