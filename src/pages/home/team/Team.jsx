import React from 'react'
import './team.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons'

import ubaid from '../../../assets/Home/team/ubaid.jpg'
import arham from '../../../assets/Home/team/arham.jpg'
import abuzar from '../../../assets/Home/team/abuzar.jpg'
import azan from '../../../assets/Home/team/azan.jpg'
import arslan from '../../../assets/Home/team/arslan.jpg'

let members = [
    {
        'img': ubaid,
        'name': "Ubaid Asim",
        'designation': "CEO",
        'fb': "",
        'github': "",
    },
    {
        'img': arham,
        'name': "Arham Sarwar",
        'designation': "Flutter Developer",
        'fb': "",
        'github': "",
    },
    {
        'img': abuzar,
        'name': "Abuzar Zaidi",
        'designation': "MERN Stack Developer",
        'fb': "",
        'github': "",
    },
    {
        'img': azan,
        'name': "Muhammad Azan",
        'designation': "Flutter Developer",
        'fb': "",
        'github': "",
    },
    {
        'img': arslan,
        'name': "Muhammad Arslan",
        'designation': "web Developer",
        'fb': "",
        'github': "",
    },
]

function team() {
    return (
        <>
            <div className="teams">
                <h1>Meet Our Team</h1>
                {members.map((member,index)=>{
                    return <>
                    <div key={index} className="team">
                    <div className="teamImg">
                        <img src={member.img} alt="" />
                    </div>
                    <h2>{member.name}</h2>
                    <p>{member.designation}</p>
                    <ul className="icons">
                        <li><FontAwesomeIcon icon={faFacebook} size='2xl' /></li>
                        <li><FontAwesomeIcon icon={faGithub} size='2xl' /></li>
                    </ul>
                </div>
                    </>
                })}
            </div>
        </>
    )
}

export default team