import React from 'react'

export function ProjPreview({ proj, openModal }) {
    return (
        <div className="project-preview">
            <div className="name">
                <h4>{proj.name}</h4>
            </div>
            <div className="langs">{proj.langs.map((lang, index) => <p key={index} className="lang">{lang}</p>)}</div>
            <img className="proj-img" src={proj.img} alt="" />
            <button onClick={()=>{openModal(proj)}} className="learn-more-btn">Learn More</button>
        </div>
    )
}
