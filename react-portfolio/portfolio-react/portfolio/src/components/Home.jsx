import { useEffect, useState } from 'react'
import { Link, Element, } from 'react-scroll';
import "../home.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
// import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';


const Home = () => {
  const [state,setstate]=useState("Web  Designer")

  const[btnAnimationState,setbtnAnimationState]=useState(true)

  const btnConnect=()=>{
    setbtnAnimationState(false)
    setTimeout(()=>{
      setbtnAnimationState(true)

    },2000)
  }

useEffect(()=>{
  setTimeout(()=>{
    setstate("Frontend Developer")
      },10000)
},[])
  


  
  return (
    <>
    <Element name='/Home'>
    <div className='forbackground-img ' >
   
        
      
        
<div className='container  ' >
        <div className='row mt-3' >
            <div className='col-md-7  forfirstcolom'>

              <div className='mt-5'>
                <div className='forgreeting mb-3 '>
                  <p className='text-white mt-2  ' style={{fontWeight:"bold"}}>Welcome To My Portfolio</p>
                </div>

                <div className='mt-1 '>
                  <h1 className='text-white '>Hello! I`m Thatchana Moorthy</h1>
                  
                </div>
                <div className=' forlogo'>
                <p className='h1 text-white'>{state}</p>
                </div>
                <div className='mt-5'>
                  <p style={{color:"whitesmoke"}}>Welcome to my portfolio! I`m a Front End Developer passionate about crafting seamless, responsive, and visually engaging web experiences. With expertise in HTML , CSS, JavaScript, I specialize in building user-friendly interfaces that blend design with functionality. </p>
               
                </div>
                <div className='forbtn-img ' >
                 
<Link   activeClass="active" to='/Contact'
      spy={true} 
      smooth={true} 
      offset={140} 
      duration={2000} 

      
      style={{color:"blueviolet",fontWeight:"bold",fontSize:"20px",border:"none",outline:"none"
      }} 
      onClick={btnConnect}  >
        Let`s Connect </Link>
<img src='btnrocket.png' alt="btn rocket image" className={btnAnimationState? 'img-fluid mt-3 me-4 forrocket-img ' : "img-fluid mt-3 me-4  forrocket-img2"}
 />
</div>

              </div>

            </div>

            <div className='col-md-5  d-flex justify-content-center align-item-center h-100' >

                <div className='person-animation mt-5'>
                <img src='bin-1.png' className='img-fluid forimg' />
                </div>

            </div>
        </div>
       
        </div>
        
      
    </div>
    </Element>
    </>
  )
}

export default Home
