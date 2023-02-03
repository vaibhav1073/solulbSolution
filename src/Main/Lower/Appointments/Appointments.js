import React from 'react'
import AppointmentCard from './AppointmentCard/AppointmentCard'

function Appointments() {
 return (
    <div className="container col-12">
        <div className="row">
            <div className="col-md-8 m-2" style={{backgroundColor:'#f8f8f8'}}>
                <button className="btn btn-light p-1 col-md-4">Appointments</button>
                <button className="btn btn-light p-1 col-md-4">Upcoming Appointments</button>
                <button className="btn btn-light p-1 col-md-4">Medical Records</button>

            </div>
            </div>
            <div className="col-12">
        <div  className="row" style={{backgroundColor:'blue', justifyContent:'space-between'}}>
                <div className="col-md-4 ml-2" >
                    <p>Root Canal Treatment</p>
                </div>
                <div  className='col-md-4 me-2'>

                <button className="btn btn-light ">Show Previous Treatment</button>
                </div>

        </div>
        </div>
        <div className="row" >
            <div className="container col-md-12 m-2"  style={{backgroundColor:'cyan'  }}>
                <AppointmentCard className="m-2"
                date="26 NOV'19"
                treatment="Open Access"
                dentist="Drg. Adam H."
                nurse="Jessicamila"
                 ></AppointmentCard>
                <AppointmentCard 
                date="12 NOV'19"
                treatment="Root Canal"
                dentist="Drg. Adam H."
                nurse="Jessicamila"
                 ></AppointmentCard>
            </div>
            </div>
    </div>
  )
}

export default Appointments