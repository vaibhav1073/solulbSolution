import React from 'react'
import './FilesDocument.css'

function FilesDocument() {
  return (
    <div className='container col-2' >
        <div className="col">
            <h2>Files/Documents</h2>
            <div className="container text">
                
                <button className="btn btn-light text ">
                <img src='path902.svg' className='m-1'></img>
                Checkup results1 </button>
                <button className="btn btn-light m-1 text">
                <img src='path902.svg' className='m-1'></img>
                Checkup Results.pdf</button>
                <button className="btn btn-light m-1 text">
                <img src='path902.svg' className='m-1'></img>
                Checkup Results.pdf</button>
                <button className="btn btn-light m-1 text">
                <img src='path902.svg' className='m-1'></img>
                Checkup Results.pdf</button>
            </div>
        </div>
        
    </div>
  )
}

export default FilesDocument