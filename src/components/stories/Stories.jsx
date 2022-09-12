import React from 'react'
import './stories.css'

function Stories() {
  return (
    <>
    <div className=' story d-flex text-center pt-5 mt-md-5 mt-sm-5 align-center'>
        <div className='col-lg-6 '>
            <h2 className='story-h2 '>Share the story of your classroom with families</h2>
            <p className='story-p '>Instantly share photos, videos, and announcements <br /> on Class Story, or privately message with any parent 😍</p>
            <div className='d-flex justify-content-center'>
            <ul className='story-ul '>
            <li className='py-3 '>Parents easily join your class using any device</li>
            <li className='py-3 '>Instantly translate messages into 30+ languages</li>
            <li className='py-3 '>Let families know when you're busy with Quiet Hours</li>
            </ul>
            </div>
            <button type="button" className="btn btn-primary rounded-pill btn_resize">Learn More</button>
        </div>

        <div className='col-lg-6'>
            <img src="https://www.classdojo.com/static/0afbb184ade9f1535af97ef0ca9957c7/7ce4a/ded854bf-be2c-45ee-83b7-5bd723e4a9e2.png" alt="Chatroom Stories" />
        </div>
    </div>
    </>
    )
}

export default Stories