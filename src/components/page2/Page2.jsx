import './Page2.css';

const Page2 = ({ id }) => {
    return (
        <section 
            id={id} 
            className="page-2 flex justify-center items-center w-full h-fit video-page-background pt-[55px] text-white pb-[200px]"
        >
            <div className="w-[90%] h-full flex flex-col justify-center items-center">
                <div className="font-poppins w-[100%] lg:w-[1182px] lg:h-[176px] text_center">
                    <p className="text-xl md:text-4xl lg:text-[70px] lg:leading-[88px] w-[100%] font-semibold  lg:w-[800px] lg:h-[176px] uppercase lg:mx-12">
                        Lorem ipsum dolor sit amet
                        <section className="animation ">
                            <div className="first"><div>Text 1</div></div>
                            <div className="second"><div>Text 2</div></div>
                            <div className="third"><div>Text 3</div></div>
                        </section>
                    </p>
                    <p className="font-medium text-md lg:text-2xl lg:leading-[38px] lg:mx-12 mt-7 w-[90%] md:text-xl  lg:w-[1050px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>
                <div className="rounded-5 mx-2 lg:mx-7 w-[100%] lg:w-[1200px] lg:h-[500px] video-page-background mt-[26px] lg:mt-[150px] flex lg:flex-row flex-col items-center justify-between relative gap-3 lg:gap-0">
                    <div className='w-full h-full flex justify-center items-center gap-2'>{/* 1st Card Slider */}
                    <div className="lg:absolute w-full h-full lg::left-[100px] lg:top-2 text-center" id="slider">
                        <div className="slide-track">
                            {Array(6).fill().map((_, index) => (
                                <div className="slide" key={index}>
                                    <div id="Cardslide">
                                        <div className="card-body">
                                            <h5 className="card-title">Text {index + 1}</h5>
                                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 2nd Card Slider */}
                    <div className="lg:absolute lg:left-[90px] lg:top-2 text-center font-bold" id="slider1">
                        <div className="slide-track1">
                            {Array(6).fill().map((_, index) => (
                                <div className="slide1" key={index}>
                                    <div id="Cardslide1">
                                        <div className="card-body">
                                            <h5 className="card-title">Text {index + 1}</h5>
                                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div></div>

                    <p className="lg:w-[380px] lg:h-[341px] font-poppins font-normal text-[26px] tracking-[0.08em] leading-8 lg:absolute lg:right-0 lg:pr-10 text-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>

                
            </div>
        </section>
    );
}

export default Page2;
