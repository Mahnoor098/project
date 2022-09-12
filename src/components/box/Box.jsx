import React from 'react';
import './box.css';

function Box(props) {
  return (
    <>
    
        <div className='card col-md-10 col-lg-3 col-sm-12 '>
        
            <img className=' img-* img-responsive img-resize m-auto' src={props.img_link} alt="heart" />
            <div className="card-body">
                <h4 className="card-title text-center fw-bold px-5">{props.card_title}</h4>
                <p className="card-text text-center m-3 p-tag justify-content-center">{props.card_text}</p>
            </div>
        </div>
    </>
    )
}

export default Box