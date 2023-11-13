import React from 'react'
import './portfolio.css'
// import Projects from './projects/Projects'
import slide1 from '../../assets/Portfolio/slide1.jpg'
import slide2 from '../../assets/Portfolio/slide2.jpg'
import slide3 from '../../assets/Portfolio/slide3.jpg'
import slide4 from '../../assets/Portfolio/slide4.jpg'
import slide5 from '../../assets/Portfolio/slide5.jpg'
import slide6 from '../../assets/Portfolio/slide6.jpg'
import slide7 from '../../assets/Portfolio/slide7.jpg'
import slide8 from '../../assets/Portfolio/slide8.jpg'

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

function Portfolio() {
  return (
    <>
     <div className="portContainer">
        <div className="heading">
            <h1>Showcasing Our Best Work</h1>
        </div>
        <div></div>
    </div>

    {/* <Projects/> */}

    <div className="workImages">

        {portfolio.map((portfolio)=>{
            return <div className="imgDiv">
            <a href="portfolio.link">
                <img src={portfolio.img} alt=''/>
            </a>
        </div>
        })}
    </div>
   </>
  )
}

export default Portfolio