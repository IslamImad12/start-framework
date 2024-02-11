import React from 'react'
import style from '../contact.module.css'
import image1 from '../images/poert1.png'
import image2 from '../images/port2.png'
import image3 from '../images/port3.png'
export default function Portfolio() {
  return (
    <>
    <>
    <div className="text-center text-light p-3 w-100" style={{ backgroundColor:'white' }}>
      <div className="row">
            <div className='col-md-12'>
            <h1 className={style.start}>PORTFOLIO COMPONENT</h1>
            <div className={style.lineParent}>
            <div className={style.line}></div><i class="fa-solid fa-star"></i><div className={style.line}></div>
            </div> <br /> <br /> <br /> <br /> 
          </div>
              <div className="col-md-4">
              <div className='one'>
                  <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  <img src={image1} alt="" width={300} />
                  </button>
                  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                      <div class="modal-content bg-transparent border-0">
                        <div class="modal-body">
                          <img src={image1} alt="" width={450} />
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
              </div>

              <div className="col-md-4">
              <div className='two'>
                  <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  <img src={image2} alt="" width={300} />
                  </button>
                  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                      <div class="modal-content bg-transparent border-0">
                        <div class="modal-body">
                          <img src={image2} alt="" width={450} />
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
              </div>

              <div className="col-md-4">
              <div className='three'>
                  <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  <img src={image3} alt="" width={300} />
                  </button>
                  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                      <div class="modal-content bg-transparent border-0">
                        <div class="modal-body">
                          <img src={image3} alt="" width={450} />
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
              </div>

              <div className="col-md-4">
              <div className='four'>
                  <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  <img src={image1} alt="" width={300} />
                  </button>


                  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                      <div class="modal-content bg-transparent border-0">
                        <div class="modal-body">
                          <img src={image1} alt="" width={450} />
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
              </div>

              <div className="col-md-4">
              <div className='five'>
                  <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  <img src={image2} alt="" width={300} />
                  </button>


                  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                      <div class="modal-content bg-transparent border-0">
                        <div class="modal-body">
                          <img src={image2} alt="" width={450} />
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
              </div>
              <div className="col-md-4">
              <div className='six'>
                  <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  <img src={image3} alt="" width={300} />
                  </button>
                  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                      <div class="modal-content bg-transparent border-0">
                        <div class="modal-body">
                          <img src={image3} alt="" width={450} />
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
              </div>

      </div> 
    </div> 
    </>
    </>
  )
}


