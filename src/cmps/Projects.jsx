import { projService } from '../services/projService'
import React, { useState, useEffect } from 'react';
import { ProjPreview } from './ProjPreview';

export default function Projects({openModal}) {
    const [projects, setProjects] = useState(projService.query());

    return (
        <div className="full">
            
        <div className="projects-box">
            <h1 className="projects-heading">PROJECTS</h1>
            <div className="projects">
                {projects.map(proj => <ProjPreview key={proj.id} openModal={openModal} proj={proj}/>)}
            </div>
        </div>
        </div>
    )
}
