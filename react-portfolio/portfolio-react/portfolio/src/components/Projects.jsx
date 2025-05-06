// import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import "../projects.css"
import VisibilityIcon from '@mui/icons-material/Visibility';
import Lottie from 'react-lottie';
import Animation from "../animation.json"
import {  Element, } from 'react-scroll';


const Projects = () => {
  
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: Animation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };


  return (
  <>
  <Element name='/Projects'>
  <div className='container-fluid forpadding '  style={{backgroundColor:"#0c0b0c"}}>
  <div className='container    forfirst-div '>
    <div className='' style={{display:"flex",justifyContent:"center"}}>

    
   
    <div className='mt-3' style={{width:"70%"}}>

        <h2 className='text-white text-center'>Projects</h2>
        <p className='text-secondary mt-3'>
          My projects are simple and basic to handle easily.Based on my knowledge I will work in these Projects.Its an beginner level projects but i will Show my knowledge to my best to You.
       </p>

       
       <div style={{display:"flex",justifyContent:"center",backgroundImage:" linear-gradient(147deg, black 10%,  blue  )",borderRadius:"20px"}}>

       <ul className="nav nav-pills mb-3 " id="pills-tab" role="tablist" style={{display:"flex",justifyContent:"space-around",width:"100%"}}>
 
    <button className= "btn mt-2   text-decoration-none text-white"  id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true" style={{border:"none",outline:"none",fontWeight:"bold"}} >Projects</button>
  
 
    <button className= "btn mt-2  text-decoration-none text-white"  id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false" style={{border:"none",outline:"none",fontWeight:"bold"}} >Description</button>
 
 
</ul>

      
  
</div>


</div>
    </div>
    </div>




    <div className="tab-content" id="pills-tabContent">
  <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex="0">


<div className='row mt-5'>

  <div className='col-lg-4 col-md-6 forcenter' >
    <div className='card  forcard' style={{position:"relative",backgroundColor:"#0c0b0c",border:"4px solid blue",overflow:"hidden"}}  >
      <img src='https://cdni.iconscout.com/illustration/premium/thumb/expense-management-4268366-3561009.png' alt="something eroor occred" className='card-img img-top'  />

<div className=' foranimation  w-100 ' >
  
  
  <p className='text-white mt-2 ' style={{fontWeight:"bold"}}>Title :<span className='text-white ms-1'>Booksky</span></p>

  <p className='text-white text-center mt-2' style={{fontWeight:"bold"}}>Description : <span className='text-white'>The website functions like a to-do list, where users can add, read, and delete their entries.To more View Description section. </span></p>

  <a href='https://thatchanamoorthymca-booksky.netlify.app' target="_blank" className='btn text-white mt-2' style={{backgroundColor:"blue "}}>View <span><VisibilityIcon/></span></a>
 


<div className='forlotie-animation' >
<Lottie options={defaultOptions}  
              />
              </div>
 

</div>
     
    </div>

  </div>
   <div className='col-lg-4 col-md-6 forcenter'>
    <div className='card  forcard forsm-margin' style={{backgroundColor:"#0c0b0c",border:"4px solid blue"}} >
    <img src='man-checklist-illustration_19361-36.jpg' alt="something eroor occred" className='card-img img-top '  style={{borderRadius:"36px"}}/>


    <div className=' foranimation  w-100 ' >
  
  
  <p className='text-white mt-2 ' style={{fontWeight:"bold"}}>Title :<span className='text-white ms-1'>Form Validation Using Javascript</span></p>

  <p className='text-white text-center mt-2' style={{fontWeight:"bold"}}>Description : <span className='text-white'>I just built a registration form with client-side validation using JavaScript.TO  more view Description section...  </span></p>

  <a href='https://thatchanamoorthymca-form-validation.netlify.app' target="_blank" className='btn text-white mt-2' style={{backgroundColor:"blue "}}>View <span><VisibilityIcon/></span></a>
 


<div className='forlotie-animation' >
<Lottie options={defaultOptions}  
              />
              </div>
 

</div>



    </div>

  </div>

   <div className='col-lg-4   forcenter'>

    <div className='card forcard  forsm-height' style={{backgroundColor:"#0c0b0c",border:"4px solid blue"}}>
    <img src='https://th.bing.com/th/id/OIP.L_HxuCqCSyHRSm0SqIED4gHaHa?cb=iwc1&rs=1&pid=ImgDetMain' alt="something eroor occred" className='card-img img-top '  style={{borderRadius:"36px",height:"100%"}}/>



    <div className=' foranimation  w-100 ' >
  
  
  <p className='text-white mt-2 ' style={{fontWeight:"bold"}}>Title :<span className='text-white ms-1'>Simple Calculator</span></p>

  <p className='text-white text-center mt-2' style={{fontWeight:"bold"}}>Description : <span className='text-white'> this calculator project, where I brought together HTML, CSS, and JavaScript to create a sleek and interactive app.TO  more view Description section...</span></p>

  <a href='https://thatchanamoorthymca-calculator.netlify.app' target="_blank" className='btn text-white mt-2' style={{backgroundColor:"blue "}}>View <span><VisibilityIcon/></span></a>
 


<div className='forlotie-animation' >
<Lottie options={defaultOptions}  
              />
              </div>
 

</div>
      
    </div>

  </div>






{/* 
  <div className='col-lg-4   forcenter'>

<div className='card forcard  forsm-height' style={{backgroundColor:"#0c0b0c",border:"4px solid blue"}}>
<img src='taskmanager.png' alt="something eroor occred" className='card-img img-top '  style={{borderRadius:"36px",height:"100%"}}/>



<div className=' foranimation  w-100 ' >


<p className='text-white mt-2 ' style={{fontWeight:"bold"}}>Title :<span className='text-white ms-1'>React CRUD Functionality</span></p>

<p className='text-white text-center mt-2' style={{fontWeight:"bold"}}>Description : <span className='text-white'> The app allows users to Create, Read, Update, and Delete user data including name, age, email, and phone number....</span></p>

<a href='https://react-crud-functionality.netlify.app' target="_blank" className='btn text-white mt-2' style={{backgroundColor:"blue "}}>View <span><VisibilityIcon/></span></a>



<div className='forlotie-animation' >
<Lottie options={defaultOptions}  
          />
          </div>


</div>
  
</div>

</div> */}







  <div className='col-lg-4   forcenter'>

<div className='card forcard  forsm-height' style={{backgroundColor:"#0c0b0c",border:"4px solid blue "}}>
<img src="https://media.tenor.com/nLhzTTW9Xk8AAAAi/guessnumbergame.gif" alt="something eroor occred" className='card-img img-top '  style={{borderRadius:"36px",height:"100%"}}/>



<div className=' foranimation  w-100 ' >


<p className='text-white mt-2 ' style={{fontWeight:"bold"}}>Title :<span className='text-white ms-1'>Guess the Number</span></p>

<p className='text-white text-center mt-2'  style={{fontWeight:"bold"}}>Description : <span className='text-white'>Users enter a num,If it matches the randomly generated number by the system (Math.floor(Math.random()*10) + 1), they win! If not, they lose. </span></p>

<a href='https://thatchanamoorthyrmca-gameproject.netlify.app' target="_blank" className='btn text-white mt-2' style={{backgroundColor:"blue"}}>View <span><VisibilityIcon/></span></a>



<div className='forlotie-animation' >
<Lottie options={defaultOptions}  
          />
          </div>


</div>
  
</div>

</div>

  
  

</div>






  </div>












  <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex="0">
<div className='container-fluid'>
<div className='row mt-4'>
<div className='col-lg-6 forcenter'>
  <div className='card forcard ' style={{border:"4px solid ",backgroundColor:"#0c0b0c",display:"flex",flexDirection:"column",alignItems:"center"}}>
    <ul className=''>
      <li className='text-white' ><p className='text-white' style={{fontWeight:"bold"}}></p>
</li>

{/* <li className='text-white' ><p className='text-white' style={{fontWeight:"bold"}}>Whether it’s writing stories, noting down book names, authors, or descriptions,</p>
</li> 

<li className='text-white' ><p className='text-white' style={{fontWeight:"bold"}}>users can effortlessly manage their creative ideas with just a click of the Add button.</p>
</li>

 <li className='text-white' ><p className='text-white' style={{fontWeight:"bold"}}> making a habit of tracking expenses can help you getting used to budgeting. It means that when daily expenses are handled well</p>
</li> */}
    </ul>
    


  </div>

 
</div>

{/* <div className='col-lg-6  forcenter'>

<div className='card forcard forsm-margin ' style={{border:"4px solid blue",backgroundColor:"#0c0b0c",display:"flex",flexDirection:"column",alignItems:"center"}}>

  <ul >
    <li className='text-white'><p className='text-white' style={{fontWeight:"bold"}}>Product manager</p></li>
    <li className='text-white'><p className='text-white' style={{fontWeight:"bold"}}>It will show the details of products for selected month.it will help for identify statistics of products sold and unsold.</p></li>
    <li className='text-white'><p className='text-white' style={{fontWeight:"bold"}}>it gives users to select month .after selecting the particlar month added products will be disolayed in UI.</p></li>

    <li className='text-white'><p className='text-white' style={{fontWeight:"bold"}}>node js is used for get api of products to load in fronted.</p></li>
    <li className='text-white'><p className='text-white' style={{fontWeight:"bold"}}>Allow users to see clearly details of selected months of products details and sold and unsold items in statistics and gives barchart for the products.</p></li>


  </ul>

    
</div>
</div> */}
{/* 
<div className='col-lg-6 forcenter'>

<div className='card forcard formd-margin mt-5'  style={{border:"4px solid #b6186762",backgroundColor:"#0c0b0c",display:"flex",flexDirection:"column",alignItems:"center"}}>
<ul >
    <li className='text-white'><p className='text-white' style={{fontWeight:"bold"}}>Task Manager</p></li>
    <li className='text-white'><p className='text-white' style={{fontWeight:"bold"}}>Task tracking allows you to prioritize your tasks and get the most important ones out of the way quickly and efficiently.</p></li>
    <li className='text-white'><p className='text-white' style={{fontWeight:"bold"}}>Increase Efficiency. Productivity improvement will also lead to increased efficiency.</p></li>

    <li className='text-white'><p className='text-white' style={{fontWeight:"bold"}}>Task Management. Task management and scheduling allow you to set deadlines ahead of time.</p></li>


  </ul>

    
</div>
</div> */}
{/* 
{/* 
<div className='col-lg-6  forcenter'>

<div className='card forcard forsm-margin ' style={{border:"4px solid #b6186762",backgroundColor:"#0c0b0c",display:"flex",flexDirection:"column",alignItems:"center"}}> */}

  {/* <ul >
    <li className='text-white'><p className='text-white' style={{fontWeight:"bold"}}>Turf Booking</p></li>
    <li className='text-white'><p className='text-white' style={{fontWeight:"bold"}}>Providing high-quality turf facilities for sports and recreational activities.</p></li>
    <li className='text-white'><p className='text-white' style={{fontWeight:"bold"}}> Well-maintained artificial grass, proper lighting, and spacious fields.</p></li>

    <li className='text-white'><p className='text-white' style={{fontWeight:"bold"}}>Hourly, daily, and event-based bookings available.</p></li>
    <li className='text-white'><p className='text-white' style={{fontWeight:"bold"}}>Successfully hosted local tournaments, corporate events, and training sessions.Easily accessible venue with parking facilities.

</p></li>


  </ul> */}

    
{/* </div>
</div> */} */



</div>
</div>


  </div>
  
</div>



    

    </div>
    

      
    </Element>

  </>
    
  )
}

export default Projects;
