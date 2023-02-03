import './AppointCard.css'

function AppointmentCard(props) {
    return (
        <div className='container' style={{backgroundColor:'#f8f8f8'}} >
            <div className="row appborder">
                <div className="col-md-2">
                    <h1>Date</h1>
                    <p>{props.date}</p>
                </div>
                <div className="col-md-3">
                    <p className="treatment">Treatment</p>
                    <p className="treatmentName">{props.treatment}</p>
                </div>
                <div className="col-md-2"><p className="treatment">Dentist</p>
                    <p className="treatmentName">{props.dentist}</p></div>
                <div className="col-md-2"><p className="treatment">Nurse</p>
                    <p className="treatmentName">{props.nurse}</p></div>
                <div className="col-md-2 treatmentName">
                    Note</div>
            </div>



        </div>
    )
}

export default AppointmentCard