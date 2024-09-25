import React from 'react';


import './Testimonials.css';
import Navbar from './../layout/Navbar';


function card({title,imageUrl,body}){
  return(
    <div>
      <Navbar></Navbar><br></br><br></br><br></br><br></br>
      <br/>  
      <div class="container ">
  <div class="row">
    <div class="col order-last">
    <div className='card-container'>
          <div className="image-container">
   <img src="https://thumbs.dreamstime.com/b/happy-black-family-little-son-sitting-floor-together-young-concept-parents-smiling-posing-to-camera-over-white-brick-161554189.jpg"  alt='' />
            
          </div>
      
          <div className="card-content"></div>  
          <div className="card-title">
            
            <h3> {title}</h3>  
          </div>
          <div className="card-body">
            <p>{body}</p>
            The level of professionalism that Vatsalya provides to potential adoptive parents is unmatched. 
            Vatsalya always offered an honest and transparent answer to any questions I had. 
            Vatsalya is extremely versed in diffusing any uncomfortable situations, all while providing a respectful helping hand along the way.
            Vatsalya was exactly what I needed. 
            <p>
               <br></br>             - Amber
            </p>
                              
          </div>
          <div className='btn'>
          
          </div>
       </div>
    </div>
    <div class="col">
    <div className='card-container'>
          <div className="image-container">
              {/* <img src="https://theadoptionconsultancy.com/includes/testimonials/data/img/Caroline_Kyle.jpg"  alt='' /> */}
              <img src="https://satorifoster.ca/wp-content/uploads/2021/02/positive-qualities-of-foster-parents.jpg"  alt='' />
          </div>
      
          <div className="card-content"></div>  
          <div className="card-title">
            
            <h3> {title}</h3>  
          </div>
          <div className="card-body">
            <p>{body}</p>
            The best part of our experience with The Adoption Consultancy was the confidence we gained during the process.
             We felt like we had an upper hand working with agencies because we already understood the process from start to finish. 
             It made it way less stressful.
             <p>
               <br></br>             - Elliott & Katie
            </p>
          </div>
          <div className='btn'>
          
          </div>
       </div>
    </div>
    <div class="col order-first">
    <div className='card-container'>
          <div className="image-container">
              <img src="https://www.stockimagefactory.com/StockImageFactory.com-photo-ID(0000189163)portrait-of-indian-young-family-at-home.jpg"  alt='' />
            
          </div>
      
          <div className="card-content"></div>  
          <div className="card-title">
            
            <h3> {title}</h3>  
          </div>
          <div className="card-body">
            <p>{body}</p>
            We highly recommend working with Vatsalya adoption Center when you decide to adopt. 
            They are very knowledgeable in things related to adoption and this is really necessary when navigating the process. 
            Signing up with The Adoption Consultancy is the only way to go when moving forward with adoption and we plan to do so again if/when we move forward with adopting a second child.
            <p>
               <br></br>             - Diksha & Vishal
            </p>
          </div>
          <div className='btn'>
          
          </div>
       </div>
    </div>
  </div>
</div>
      
    </div>
   
  )


  
}


export default card