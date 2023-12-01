import React from 'react'
import  './Login.css'
import '../../App.css'
//import our assests
import video from '../../Login assets/explore logo - Made with Clipchamp.mp4'
import logo from '../../Login assets/logo1.png'
import {Link} from 'react-router-dom'
//import icons
import {FaUserShield} from 'react-icons/fa'
import {BsFillShieldLockFill} from 'react-icons/bs'
import {AiOutlineSwapRight} from 'react-icons/ai'

const Login = () => {
    return(
        <div className='loginPage flex'>
            <div className='contanier flex'>
              <div className='videoDiv'>
                 <video src={video} autoPlay muted loop></video>
                    <div className='textDiv'>
                      <h2 className='title'>Explore the books </h2>
                      <p>Books at your fingertips!!</p>
                    </div>
                    <div className='footerDiv flex'>
                      <span className='text'>Don't have an account? </span>
                      <Link to={'/register'}>
                      <button className='btn'>Sign Up</button>
                      </Link>
                    </div>
              </div>

              <div className="fromDiv flex">
                    <div className="headerDiv">
                        <img src={logo} alt='Logo Image '/>
                        <h3>Welcome Back Guys!!</h3>
                    </div>
                    
                    <form action='' className='form grid'>
                        <span className='showMessage'>Login Status will go here</span>
                        <div className='inputDiv'>
                        <label htmlFor='username'>Email ID</label>
                            <div className='input flex'>
                                <FaUserShield className='icon'/>
                                <input type='text' id='username' placeholder='Enter Your Email Id'/>
                             </div>
                        </div>
                        <div className='inputDiv'>
                            <label htmlFor='password'>Password</label>
                            <div className='input flex'>
                                <BsFillShieldLockFill className='icon'/>
                                <input type='password' id='password' placeholder='Enter Password'/>
                            </div>
                        </div>

                        
                        <button type='submit' className='btn flex'>
                            <span>Login</span>
                            <Link to={'/dashboard'}>  
                            <AiOutlineSwapRight className='icon'/>
                            </Link>
                        </button>                                    
                     
                        <span className='forgotPassword'>
                            Forgot password? <a href=''>Click Here</a>
                        </span>
                    </form>
              </div>
            
            </div>
        </div>
    )
}

export default Login