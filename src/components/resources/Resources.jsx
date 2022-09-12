import React from 'react';
import './resources.css';

function Resources() {
  return (
    <>
      <div className=''>
        <div className='card justify-content-center'>
        <img  className='img-responsive mw-100 imgback' src="https://www.classdojo.com/static/fab447512f0bac21ab980803743fa682/9a860/homepage-presenting.jpg" alt="resources" />
          <div className='card-img-overlay text-center '>
            <div className='card-body text-dark justify-content-center text col-lg-4 col-md-6 col-sm-3'>
              <h1 className='card-title font-weight-bolder'>Presenting?
              We’ve got you covered! </h1>
              <p className='card-sutitle'>Free resources and FAQs with
              everything you need to present!  </p>
              <button className='btn btn-primary btn-size rounded-pill'  >Get Resources</button>
            </div>
          </div>
        </div>
      </div>
    
    {/*<img src="https://www.classdojo.com/static/fab447512f0bac21ab980803743fa682/9a860/homepage-presenting.jpg" alt="Resources" />
        <div className='text-center text-resize card-img-overlay'>
              <div className='card-body'>
                <h1> <b> Presenting?<br />
                We’ve got you covered!</b>
                </h1>
                <p className='text-p'>Free resources and FAQs with <br />
                everything you need to present!</p>
                <button type="button" class="btn btn-primary btn-resize rounded-pill">Get Resources</button>
              </div>
          </div>  
  */}
  
  </>
  )
}

export default Resources