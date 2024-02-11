import React from 'react'

export default function Information() {
  return (
    <>
    <div className="text-center text-light p-3 w-100" style={{'backgroundColor':'#2c3e50' ,  }}>
        <div className="row  ">
            <div className="col-md-4 text-white">
                <h3 className=''>LOCATION</h3>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
            </div>
            <div className="col-md-4 text-white">
                <h3 className=''>AROUND THE WEB</h3>
                <div className=''>
                <i className="fa-brands fa-facebook m-2" 
                style={{'border-radius': '50%','border': '2px solid white','padding':'5px'}}></i>
                <i className="fa-brands fa-twitter m-2" 
                style={{'border-radius': '50%','border': '2px solid white','padding':'5px'}}></i>
                <i className="fa-brands fa-linkedin-in mx-1 icon m-2" 
                style={{'border-radius': '50%','border': '2px solid white','padding':'5px'}}></i>
                <i className="fa-solid fa-globe mx-1 icon m-2" 
                style={{'border-radius': '50%','border': '2px solid white','padding':'5px'}}></i>
                </div>
            </div>
            <div className="col-md-4 text-white">
                <h3 className=''>ABOUT FREELANCER</h3>
                <p>
                Freelance is a free to use, licensed Bootstrap theme<br/>  created by Route
                </p>
            </div>
        </div>
    </div>
    </>
  )
}
//#2c3e50