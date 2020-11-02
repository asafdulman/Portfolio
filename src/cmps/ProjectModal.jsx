import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import git from '../assets/img/git.png'


export function ProjectModal({openModal, isModalOpen, proj }) {
    return (
        
        <div>
        <div className={isModalOpen ? 'open' : 'close'}>
            <img className="modal-img" src={proj.gif} alt="" />
            <div className="modal-details">

                <h1>{proj.name}</h1>
                <p>{proj.description}</p>
            </div>
            <div className="modal-footer">
                <a href={proj.git} target="_blank" rel="noreferrer"><img src={git} alt=""/></a>
                <a className="view-site-btn" href={proj.url} target="_blank" rel="noreferrer">View Site</a>
                <FontAwesomeIcon className="close-modal-btn" onClick={()=>{openModal()}} icon={faTimes} />
            </div>

        </div>
        <div onClick={()=>{openModal()}} className={isModalOpen ? 'open-overlay' : 'close'}> </div>
        </div>

    )
}
