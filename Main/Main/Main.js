import React from 'react'
import Appointmens from '../Lower/Appointments/Appointments'
import FilesDocument from '../Lower/FilesDocument/FilesDocument'
import MemberDetails from '../Upper/MemberDetails'
import ProfileCard from '../Upper/ProfileCard'

function Main() {
  return (
    <div style={{display:'flex',flexDirection:'column'}} >
        <div style={{display:'flex',flexDirection:'row'}} >
       
       <ProfileCard  />
        <MemberDetails  />    
        </div>

        <div style={{display:'flex',flexDirection:'row'}} >
       
       <FilesDocument />
       <Appointmens className='col-md-10' />
       
         
        </div>
        
    </div>
  )
}

export default Main