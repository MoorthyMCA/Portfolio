// import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import "../skills.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {   Element, } from 'react-scroll';

const Skills = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
   
        return (
    <>
    <Element name='/Skills'>

   
    <div className='forskills-background-img '  >
        <div className='container  ' >
        
        <div className='  p-5 ' style={{display:"flex",justifyContent:"center",flexDirection:"column",borderRadius:"40px",backgroundColor:"#0c0b0c",boxShadow: "blue 10px 10px 10px 0px inset, blue -10px -10px 10px 0px inset"}}  >
            <p className='text-white h3 mb-3 text-center ' style={{fontWeight:"bold"}}>Skills</p>

            <p className='text-secondary' style={{fontSize:"20px"}}>Proficient in HTML, CSS, and JavaScript with a strong foundation in creating responsive and interactive web pages.</p>
           
            <div className="slider-container mt-4">
      <Slider {...settings}>
        <div className=' ' >
            <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}> 
            <img src='meter1.svg'  className='img-fluid' style={{width:"180px"
            }}/>
            <div className=''>
            <p className='text-white mt-2'>HYPER TEXT MARKUP LAUNGAGE</p>
            </div>
            </div>
           
            
            
          
        </div>

        <div className=''>
          <div className='ms-4' style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            <img src='meter3.svg' className='img-fluid' style={{width:"180px"
            }}/>
            <div className=''>
            <p className='text-white mt-2 '>CASCADING STYLE SHEET</p>
            </div>
            

          </div>
        </div>


        <div >
        <div className='ms-5' style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            <img src='meter2.svg' className='img-fluid' style={{width:"180px"
            }}/>
            <div className=''>
            <p className='text-white mt-2 text-center '>JAVASCRIPT</p>
            </div>
            

          </div>
         
        </div>
        <div>
        <div className='ms-5' style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            <img src='meter3.svg' className='img-fluid' style={{width:"180px"
            }}/>
            <div className=''>
            <p className='text-white mt-2 text-center '  >ADOBE PHOTOSHOP</p>
            </div>
            

          </div>
        </div>
        <div>
        <div className='ms-5' style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            <img src='meter2.svg' className='img-fluid' style={{width:"180px"
            }}/>
            <div className=''>
            <p className='text-white mt-2 text-center '  >MICROSOFT EXCEL BASIC</p>
            </div>
            

          </div>
          
        </div>
<div>
        <div className='ms-5' style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            <img src='meter2.svg' className='img-fluid' style={{width:"180px"
            }}/>
            <div className=''>
            <p className='text-white mt-2 text-center '  >CANVA</p>
            </div>
            

          </div>
          
        </div>
       <div>
        <div className='ms-5' style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            <img src='meter2.svg' className='img-fluid' style={{width:"180px"
            }}/>
            <div className=''>
            <p className='text-white mt-2 text-center '  >TYPEWRITER</p>
            </div>
            

          </div>
          
        </div>
        {/* <div>
        <div className='ms-5' style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            <img src='meter2.svg' className='img-fluid' style={{width:"180px"
            }}/>
            <div className=''>
            <p className='text-white mt-2 text-center '  >MONGODB</p>
            </div>
            

          </div>
          
        </div> */}
        
      </Slider>
    </div>
            

           
        </div>
        </div>
        
        
      
    </div>
    </Element>
    </>
  )
}

export default Skills;
