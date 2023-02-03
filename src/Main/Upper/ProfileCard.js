import React from 'react'
import './ProfileCard.css'

function ProfileCard() {
    return (
        <div className='main' >
            <div className='dpAndText d-flex flex-column align-items-center'>
                <img src="Ellipse 1238.png" className='dp mt-2  mb-0' alt="" />
                <div className='text'><h1>Diane Cooper</h1>
                <p className='email mb-0'>diana@gaill.com</p>
            </div>

            </div>
            

            <div className="presentData">
                <div className="one m-0 container ">
                    <p className="one1 upperheading m-0">15</p>
                    <p className="one2 m-1 lowerheading">Past</p>
                </div>
                <div className="two m-0 container">
                    <p className="two1 upperheading m-0">02</p>
                    <p className="two2 m-1 lowerheading">Upcoming</p>
                </div>
                
            </div>

            <div className="sendMessageButton">
                <button> Send Message</button>
            </div>


        </div>
    )
}

export default ProfileCard