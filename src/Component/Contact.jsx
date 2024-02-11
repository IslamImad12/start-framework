import React, { useState } from 'react'
// import style from '../style.module.css'
import style from '../contact.module.css'

export default function Contact() {
  // const [lengthOfUserNameInputs, setLengthOfUserNameInputs] = useState(true);
  // function showUserNameMessage(e) {
  //   const lengthOf = e.target.value.length;
  //   if(lengthOf>=1){
  //     setLengthOfUserNameInputs(false);
  //   }
  //   else {
  //     setLengthOfUserNameInputs(true);
  //   }
  // }

  const [inputValue, setuserName] = useState('');
  const [email, setEmail] = useState('');
  const [Age,setAge] = useState('');
  const [password , setPassword] = useState('');

  const handleNameChange = (event) => {
    setuserName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  return (
    <>
    <div className=" py-5" style={{ backgroundColor:'white' }}>
      <div className="">
      <div className=''>
      <h1 className={style.start}>CONATCT SECTION</h1>
      <div className={style.lineParent}>
      <div className={style.line}></div><i class="fa-solid fa-star"></i><div className={style.line}></div>
      </div> <br /> <br /> <br /> <br /> <br />
      <div className='my-5 w-50  m-auto' >

      {inputValue && <p style={{'color':'#1abc9c'}}>userName :</p>}
      <input  placeholder='userName' className='form-control m-4'
      style={{'outline':'transparent' , 'border-top':'transparent', 'border-left':'transparent', 'border-right':'transparent'}} 
      type="text"
      value={inputValue}
      onChange={handleNameChange}/>

      {Age && <p style={{'color':'#1abc9c'}}>userAge :</p>}
      <input  placeholder='userAge' className='form-control m-4' 
      style={{'outline':'transparent' , 'border-top':'transparent', 'border-left':'transparent', 'border-right':'transparent'}}
      type="text"
      value={Age}
      onChange={handleAgeChange}
      />


      {email && <p style={{'color':'#1abc9c'}}> userEmail :</p>}
      <input  placeholder='userEmail' className='form-control m-4' 
      style={{'outline':'transparent' , 'border-top':'transparent', 'border-left':'transparent', 'border-right':'transparent'}}
      type="text"
      value={email}
      onChange={handleEmailChange}
      />

      {password && <p style={{'color':'#1abc9c'}}>userPassword :</p>}
      <input placeholder='userPassword' className='form-control m-4' 
      style={{'outline':'transparent' , 'border-top':'transparent', 'border-left':'transparent', 'border-right':'transparent'}}
      type="text"
      value={password}
      onChange={handlePasswordChange}
      />
      <button className='btn btn-success' type='submit'>send Message</button>
      </div>
    </div>
      </div> 
    </div> 
    </>
  )
}
