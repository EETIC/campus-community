import React from "react";
import './Register.css';
import stars from "../images/stars.png";
function Register() {
    return (
        <div className="register">
            <div className="Register-container">
                <div className="container-reg">
                    <div className="tag">
                       <h2>Join our Community Now!</h2> 
                    </div>
                    <img className="reg-stars" alt="" src={stars}/>
                </div> 
                <div className="content-reg"> 
                    <div className="main-reg">
                        <h6 className="description">
                    To all the tech enthusiasts who are primed to interact 
                    with smarter and passionate individuals who readily share 
                    their knowledge and experience, here's a series of events 
                    coming on your way to unveil the engrossing topics before you!!
                    <br /><br /> Join Us!!!
                        </h6>
                        <a href="https://forms.gle/i5eUsJk9MLauB1eT6">
                            <button className="join1" >Register Now</button>
                        </a>
                        
                    </div>
                        <div className="gform">
                        <h6 className="description">Are you ready to shape out your 
                        skills and make them truly life-ready? Then wait not to think 
                        about joining our community and explore the saga of ingenious ventures.
                        <br /><br /> For joining our whatsapp group🙌🏻✨</h6>
                        
                        <a href="https://chat.whatsapp.com/LFxXV0QWFgd330aSbZcEqY">
                        <button className="join2" >Join Now</button>
                        </a>
                    </div>
                </div>
                 
            </div>
        </div> 
      );
    }
  ;
  export default Register