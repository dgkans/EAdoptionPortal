import './aboutus.css'
import React from 'react';
import NavBar from '../layout/Navbar'



const AboutUs = () => {
  return (
<div>
            <NavBar/>
          <br />
          <br />
           <br />
        
  <div class="about-section">
          <center><h1>
        Bank Information</h1></center>

  </div>
  <div className="divs">
              <center>
              <h2>Send a Cheque</h2>
              <p>Please make cheques payable to 'Vatsalya child adoption Center' 
              <br></br>
               and post to:   
              Vatsalya child adoption Center, Survey No 222, 
              <br></br>
              F Block, Shree Sai Chowk, Pune, Maharashtra 414141</p>
              </center>
              <br />
              <br/>
    
                  
  </div>
  <div className="divs">
              <center>
              <h2>Bank Transfer</h2>
              <p>Please instruct your bank to deposit funds to our HDFC account 
                <br></br>
                and follow the simple instructions to obtain a tax exemption certificate below:
              
              </p>
              </center>
              <br />
              <br/>
    
                  
  </div>


  <div class="d-flex justify-content-center">
      <div class="card text-center">
         

          <div class="card-body">
                
                <p class="card-text">For deposits being made in ₹ INR. 
                <br></br>
                All Indian deposits qualify for 80G tax exemption.

               <br></br>
               <br></br>
              Bank Name: HDFC
              <br></br>
              <br></br>

             Branch : Pune, Ambar Plaza 
             <br></br>
             Building - A, Opposite Old S T Stand, 
             <br></br>
             Station Road, Pune, 
             <br></br>
             Maharashtra 414141
            <br></br>
            <br></br>
            Name of Charity : Vatsalya
             <br></br>
          Account Number : 0000000111111 - Savings
              <br></br>
           IFSC code: HDFC0000181
            <br></br>
 
        MICR number : 414240001</p>
                 

       
      

          </div>
         
      </div>

      
  </div>
  <div className="divs">
              <center>
              <h2>Need Help?</h2>
              <p>Need help with your donation? Email us at vatsalyachildadoptionsystem.org.
                <br></br>
                
              
              </p>
              </center>
              <br />
              <br/>
    
                  
  </div>
</div>




  )
}

export default AboutUs