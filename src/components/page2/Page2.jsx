import './Page2.css';
let detail=[{
    'title':'Real Time ',
    'content':'Generates content in real time'
},
{
    'title':'Analysis Question',
    'content':'Generates questions based on your IQ'
},{
    'title':'Multilingual Support',
    'content':'Generates content in English & Hindi'
},{
    'title':'Rich Notes',
    'content':'Provides you downloadable notes'
},{
    'title':'Different Modes',
    'content':'Available for Teachers, Students and All'
},{
    'title':'Interview Mode',
    'content':'Set to interview you on your PDF'
}]
const Page2 = ({ id }) => {
    return (
        <section 
            id={id} 
            className="page-2 flex justify-center items-center w-full h-fit video-page-background pt-[55px] text-white pb-[200px]"
        >
            <div className="w-[90%] h-full flex flex-col justify-center items-center">
                <div className="font-poppins w-[100%] lg:w-[1182px] lg:h-[176px] text_center">
                    <p className="text-xl md:text-4xl lg:text-[70px] lg:leading-[88px] w-[100%] font-semibold  lg:w-[800px] lg:h-[176px] uppercase lg:mx-12">
                        ABIV is avalaiable for all
                        <section className="animation ">
                            <div className="first"><div>Classrooms</div></div>
                            <div className="second"><div>Teachers</div></div>
                            <div className="third"><div>You</div></div>
                        </section>
                    </p>
                    <p className="font-medium text-md lg:text-2xl lg:leading-[38px] lg:mx-12 mt-7 w-[90%] md:text-xl  lg:w-[1050px]">
                     Enjoy Real-Time Video Summaries, Multi-Language Support, And Interactive Learning Anytime, Anywhere.                    </p>
                </div>
                <div className="rounded-5 mx-2 lg:mx-7 w-[100%] lg:w-[1200px] lg:h-[500px] video-page-background mt-[26px] lg:mt-[150px] flex lg:flex-row flex-col items-center justify-between relative gap-3 lg:gap-0">
                    <div className='w-full h-full flex justify-center items-center gap-2'>{/* 1st Card Slider */}
                    <div className="lg:absolute w-full h-full lg::left-[100px] lg:top-2 text-center" id="slider">
                        <div className="slide-track">
                            {Array(6).fill().map((_, index) => (
                                <div className="slide" key={index}>
                                    <div id="Cardslide">
                                        <div className="card-body">
                                            <h5 className="card-title">{detail[index].title}</h5>
                                            <p className="card-text">{detail[index].content}</p>
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
                                            <h5 className="card-title">{detail[index].title}</h5>
                                            <p className="card-text">{detail[index].content}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div></div>

                    <p className="lg:w-[380px] lg:h-[341px] font-poppins font-normal text-[26px] tracking-[0.08em] leading-8 lg:absolute lg:right-0 lg:pr-10 text-center">
                       ABIV is rich in features and available in different modes aided to help individuals increase their knowledge in all aspects.
                    </p>
                </div>

                
            </div>
        </section>
    );
}

export default Page2;
