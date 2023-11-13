import { React, useState } from 'react'
// import './projects.css'
import slide1 from '../../../assets/Portfolio/slide1.jpg'
import slide2 from '../../../assets/Portfolio/slide2.jpg'
import slide3 from '../../../assets/Portfolio/slide3.jpg'
import slide4 from '../../../assets/Portfolio/slide4.jpg'
import slide5 from '../../../assets/Portfolio/slide5.jpg'
import slide6 from '../../../assets/Portfolio/slide6.jpg'
import slide7 from '../../../assets/Portfolio/slide7.jpg'
import slide8 from '../../../assets/Portfolio/slide8.jpg'

let portfolio =[
    {
        "img":slide1,
        "link":"https://devsinn-arslan.netlify.app/"
    } , 
    {
        "img":slide2,
        "link":"https://devsinn-arslan.netlify.app/"
    } , 
    {
        "img":slide3,
        "link":"https://devsinn-arslan.netlify.app/"
    } , 
    {
        "img":slide4,
        "link":"https://devsinn-arslan.netlify.app/"
    } , 
    {
        "img":slide5,
        "link":"https://devsinn-arslan.netlify.app/"
    } , 
    {
        "img":slide6,
        "link":"https://devsinn-arslan.netlify.app/"
    } , 
    {
        "img":slide7,
        "link":"https://devsinn-arslan.netlify.app/"
    } , 
    {
        "img":slide8,
        "link":"https://devsinn-arslan.netlify.app/"
    } ,   
]

let barItem = [
    {
        name: 'Frontend',
        class: 'front',
    },
    {
        name: 'Backend',
        class: 'back',
    },
    {
        name: 'Mobile',
        class: 'mobile',
    },
    {
        name: 'DataBase',
        class: 'db',
    },
    {
        name: 'CMS',
        class: 'cms',
    },
    {
        name: 'Cloud',
        class: 'cloud',
    },
];


function Projects() {
    const [activeTab, setActiveTab] = useState("front");

    const changeTab = (className) => {
        setActiveTab(className);
    };

    return (
        <div className="technologies">
            <div className="bar">
                <ul>
                    {barItem.map((item) => (
                        <li key={item.name} onClick={() => { changeTab(item.class) }} className={activeTab === item.class ? 'active' : ''} > {item.name} </li>
                    ))}
                </ul>
            </div>
            <div className={`front ${activeTab === 'front' ? 'open' : ''}`}>
                {portfolio.map((front, link ,index) => {
                    return <div key={index} className="img">
                        <img src={front.img} alt="" />
                        <h2>{front.link}</h2>
                    </div>
                })}
            </div>
            {/* <div className={`back ${activeTab === 'back' ? 'open' : ''}`}>
                {props.map((back, index) => {
                    return <div key={index} className="img">
                        <img src={back.img} alt="" />
                        <h2>{back.name}</h2>
                    </div>
                })}
            </div>
            <div className={`mobile ${activeTab === 'mobile' ? 'open' : ''}`}>
                {props.map((mobile, index) => {
                    return <div key={index} className="img">
                        <img src={mobile.img} alt="" />
                        <h2>{mobile.name}</h2>
                    </div>
                })}
            </div> */}
        </div>
    );
}

export default Projects;
