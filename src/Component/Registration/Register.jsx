import React, { useState } from 'react'
import  './Register.css'
import  '../../App.css'
import { Link,NavLink } from 'react-router-dom'


//import vedio
import video from '../../Login assets/explore logo - Made with Clipchamp.mp4'
import logo from '../../Login assets/logo1.png'

//Imported icons
import {FaUserShield} from 'react-icons/fa'
import {BsFillShieldLockFill} from 'react-icons/bs'
import {AiOutlineSwapRight} from 'react-icons/ai'
import {MdMarkEmailRead} from 'react-icons/md'
import {CiFaceSmile} from 'react-icons/ci'
import {FaGenderless} from 'react-icons/fa'
import {MdDateRange} from 'react-icons/md'

import axios from 'axios'

const Register = () => {
    const[name,setName]=useState()
    const[gender,setGender]=useState()
    const[dob,setDob]=useState()
    const[email,setEmail]=useState()
    const[username,setUsername]=useState()
    const[password,setPassword]=useState()

    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post('',{name,gender,dob,email,username,password})
        .then(result=> console.log(result))
        .catch(err=> console.log(err))
    }
    return(
        <div className='registerPage flex'>
            <div className='contanier flex'>
                
                <div className='videoDiv'>
                   <video src={video} autoPlay muted loop></video>
                    <div className='textDiv'>
                      <h2 className='title'>Explore the books </h2>
                      <p>Books at your finguretips!!</p>
                    </div>
                    
                    <div className='footerDiv flex'>
                      <span className='text'>Have an account? </span>
                      <Link to={'/'}>
                      <button className='btn'>Login</button>
                      </Link>
                    </div>
                </div> 
            
                <div className="fromDiv flex">
                    <div className="headerDiv">
                        <img src={logo} alt='Logo Image '/>
                        <h3>Let us Know about you!!</h3>
                    </div>
                    
                    <form action='' className='form grid' onSubmit={handleSubmit}> 

                        <div className='inputDiv'>
                            <label htmlFor='name'>Name</label>
                            <div className='input flex'>
                                <CiFaceSmile className='icon'/>
                                <input type='text' id='name' placeholder='Enter Name'onChange={(e)=>setName(e.target.value)}/>
                             </div>
                        </div> 

                        <div className="inputDiv">
                            <label htmlFor='gender'>Gender</label>
                            <div className='input flex'>
                                <input type="radio" value="Male" name="gender"/> Male
                                <input type="radio" value="Female" name="gender" /> Female
                                <input type="radio" value="Other" name="gender" /> Other
                            </div>
                        </div>

                        <div className="inputDiv">
                            <label htmlFor='DOB'>Date Of Birth</label>
                            <div className="input flex">
                                <MdDateRange className='icon'/>
                                <input type="date"  id="dob" placeholder="Enter DOB"
                                onChange={(e)=>setDob(e.target.value)}/>
                            </div>
                        </div>
                       
                        <div className='inputDiv'>
                            <label htmlFor='email'>Email</label>
                            <div className='input flex'>
                                <MdMarkEmailRead className='icon'/>
                                <input type='email' id='email' placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)}/>
                            </div>
                        </div>                      
                        
                        <div className='inputDiv'>
                            <label htmlFor='username'>Username</label>
                            <div className='input flex'>
                                <FaUserShield className='icon'/>
                                <input type='text' id='username' placeholder='Set Username'onChange={(e)=>setUsername(e.target.value)}/>
                             </div>
                        </div>

                        <div className='inputDiv'>
                            <label htmlFor='password'>Password</label>
                            <div className='input flex'>
                                <BsFillShieldLockFill className='icon'/>
                                <input type='password' id='password' placeholder='Set Password'onChange={(e)=>setPassword(e.target.value)}/>
                            </div>
                        </div>

                        <button type='submit' className='btn flex'>
                            <span>Register</span>
                            <AiOutlineSwapRight className='icon'/>
                        </button>                                    
                   
                    </form>
               </div>

        </div>
        </div>
       
    )
}

export default Register