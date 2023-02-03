import React from 'react'
import './MemberDetails.css'

function MemberDetails() {
    const Details = [{
        id: 1,
        Title: "Gender",
        Desc: "Female"
    },
    {
        id: 2,
        Title: "Birthday",
        Desc: "Feb 24th, 1997"
    },
    {
        id: 3,
        Title: "Phonenumber",
        Desc: "(298)8524567"
    },
    {
        id: 4,
        Title: "Registered Date",
        Desc: "Feb 24th, 1997"
    },
    {
        id: 5,
        Title: "Street Address",
        Desc: "Fiama D bille"
    },
    {
        id: 6,
        Title: "City",
        Desc: "Chicago"
    },
    {
        id: 7,
        Title: "Zip Code",
        Desc: "473001"
    },
    {
        id: 8,
        Title: "Member Status",
        Desc: "Active member"
    },
    ]
    return (
        <div className='mt-4  container ' style={{ display: 'flex', flexDirection: 'row', width: '80vw' }}>
            <div className="row ">
                {
                    Details.map(card => <div className="card col-md-3"
                        style={{ height: '22vh', borderBottom: ' 1px solid  #6b6b6b', display: 'flex' }} key={card.id}>
                        <div className="card-body" sx={{ height: '120px' }}>
                            <h5 className="card-title cardTitle">{card.Title}</h5>
                            <p className="card-text cardDetails">{card.Desc}</p>
                        </div>
                    </div>)
                }

            </div>

        </div>
    )
}

export default MemberDetails