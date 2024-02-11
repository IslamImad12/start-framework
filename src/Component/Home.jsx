import React, {  useEffect } from 'react'
import img1 from '../images/avataar.svg'
import style from '../style.module.css'
export default function Home() {

        useEffect(()=>{
            console.log('Hello world');
        },[])

    return (<>
    <div className='' style={{'height':'75vh'}}>
      <img src={img1} width={'250px'} alt="" className={style.cent} />
      <h1 className={style.start}>START FRAMEWORK</h1>
      <div className={style.lineParent}>
      <div className={style.line}></div><i class="fa-solid fa-star"></i><div className={style.line}></div>
      </div>
      <p className={style.start2}>Graphic Artist - Web Designer - Illustrator</p>
    </div>
    
    </>
  )
}
