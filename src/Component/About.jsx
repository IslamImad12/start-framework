import React from 'react'
import style from '../style.module.css'
export default function About() {
  return (
    <>
    <div className='' style={{'height':'60vh' , 'marginTop':'100px'}}>
      <h1 className={style.start}>ABOUT COMPONENT</h1>
      <div className={style.lineParent}>
      <div className={style.line}></div><i class="fa-solid fa-star"></i><div className={style.line}></div>
      </div>
      <div className="container w-75">
        <div className="row">
          <div className="col-md-6">
            <p className={style.start2}>
            Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML,
             CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
            </p>
          </div>
          <div className="col-md-6">
            <p className={style.start2}>
            Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML,
             CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
