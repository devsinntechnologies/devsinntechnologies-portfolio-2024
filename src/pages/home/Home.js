import React from 'react'
import './home.css'
import Header from '../../components/header/Header'
import detailImg1 from '../../assets/Home/softwareDev1.png'
import detailVid1 from '../../assets/Home/softwareDev.gif'
import detailImg2 from '../../assets/Home/ideaLight.png'
import detailImg3 from '../../assets/Home/cloudcomp.jpeg'
import meetingImg from '../../assets/Home/meeting.jpg'
// empoweringSection Images
import brandImg from '../../assets/Home/branding.svg'
import appDevImg from '../../assets/Home/appDev.svg'
import webDevImg from '../../assets/Home/appDev.svg'
import graphImg from '../../assets/Home/grapDes.svg'

import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import Swiper from './testimonials/Swiper'
import Team from './team/Team'
import Swal from 'sweetalert2'
import 'animate.css'
import Tech from './technologies/Technology'



let obj = [
    {
        "className": 'detail',
        "img": detailImg1,
        "vid":detailVid1,
        "heading": 'Software Development',
        "para": "At Dev's Inn Technologies, we are the architects of the digital future. Our Software development services encompass a wide array of cutting-edge technologies, ensuring your online presence ",
        "link":'/software-development',
    },
    {
        "className": 'detail',
        "img": detailImg2,
        "heading": 'Creative Design and animations',
        "para": "At Dev's Inn Technologies, we are passionate creators and visionary designers. Our mission is to transform businesses and brands by harnessing the power of creative design.",
        "link":'/creative-design',
    },
    {
        "className": 'detail',
        "img": detailImg3,
        "heading": 'Cloud Computing Services',
        "para": "At Dev's Inn Technologies, We are your trusted partner ,offering a comprehensive suite of cloud services that include Deployment, AWS, Azure, Docker, and seamless Third-Party API integration",
        "link":'/cloud-computing',
    },       
]

let contactAlert = () => {
    Swal.fire({
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          },
      html: `<div class="contactForm" action="mailto:devsinntechnologies@gmail.com" method='post' enctype="text/plain">
          <h1>Let's Talk?</h1>
          <form id="contactForm" action="/submit-form" method='post' enctype="text/plain">
              <input type="text" name='Name' placeholder="Name" required/>
              <input type="email" name='Email' placeholder="Email" required/>
              <input type="number" name='Phone' placeholder="Phone" required/>
              <textarea type="text" class="query" name='Query' placeholder="Query" required></textarea>
          </form>
        </div>`,
      customClass: {
        confirmButton: 'custom-confirm-button',
        cancelButton: 'custom-cancel-button',
      },
      showCancelButton: true,
      confirmButtonText: 'Submit',
      cancelButtonText: 'Cancel',
      preConfirm: () => {
        const form = Swal.getPopup().querySelector('#contactForm');
        const formData = new FormData(form);
        return Object.fromEntries(formData);
      },
    }).then((result) => {
      if (result.isConfirmed) {
        const formData = result.value;
        formData.toEmail = 'marslanmustafa391@gmail.com'; // Add recipient's email
        fetch('/submit-form', {
          method: 'POST',
          body: JSON.stringify(formData),
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then((response) => response.text())
          .then((data) => {
            console.log(data); // Log the server response
            Swal.fire('Form Submitted!', 'Thank you for contacting us.', 'success');
          })
          .catch((error) => {
            console.error(error);
            Swal.fire('Error', 'Failed to submit the form.', 'error');
          });
      }
    });
  };
  
  
function Main() {
  return (
    <>
   
    {/* <div class="mainBody">
    </div> */}
    <div class="mainContainer">
    <Header/>
        <section class="Container">
            <div class="Headings">
                <h1>TURNING YOUR ONLINE</h1>
                <h2>VISION <br/> INTO REALITY</h2>
                <p>Empowering Businesses with Innovative Software Solutions for Digital Transformation.Delivering Customized Software Services to Drive Efficiency and Success</p>
                <div class="btns">
                    <Link to="/portfolio" class="portfolioBtn">View Portfolio</Link>
                    <Link onClick={()=>contactAlert()} class="contactBtn">Contact us <FontAwesomeIcon icon={faAngleRight} /></Link>
                </div>
            </div>
        </section>
    </div>
    <section class="designs animate__">
        <div class="aboutDesigns animate__animated animate__fadeInUp animate__slower">
            <h3>We Design, Build Brands & Digital Projects</h3>
            <p>Dev's Inn Technologies, your gateway to cutting-edge IT services for businesses and brands. We are your strategic partner in navigating the ever-evolving digital landscape. With a relentless commitment to innovation and excellence,<br/><br/> we provide tailored IT solutions that empower your organization to thrive in the modern world.
            </p>
            <div className='readBtn'><button class="read">Read More</button></div>
        </div>
        <div class="groupImg">
            <img src={meetingImg} alt=''/>
        </div>
    </section>
    <div className="detailSec">
    <h1>Our Core Services</h1>

    <div class="detailDiv">
        {obj.map((detail,index)=>{
            return <div className={detail.className}>
                <div className="img"></div>
                <h3>{detail.heading}</h3>
                <p>{detail.para}</p>
                <Link to={detail.link}>Learn More</Link>
            </div>
        })}
        </div>
        </div>
    <div class="empowerSec">
        <div class="inDiv">
            <div class="divInDiv">
                <img src={brandImg} alt=''/>
                <br/>
                <h4>Branding</h4>
            </div>
            <div class="divInDiv">
                <img src={appDevImg} alt=''/>
                <br/>
                <h4>App Development</h4>
            </div>
        </div>
        <div class="inDiv">
            <div class="divInDiv">
                <img src={webDevImg} alt=''/>
                <br/>
                <h4>Web Design</h4>
            </div>
            <div class="divInDiv">
                <img src={graphImg} alt=''/>
                <br/>
                <h4>Graphic Design</h4>
            </div>
        </div>
        <div class="empowerdetail">
            <h2>Empowering Your Online Presence with Expert Services</h2>
            <br/>
            <p>We're here to help you bring your business to life online with everything from beautiful site design and
                development to effective digital marketing solutions. Our skilled staff works arduously to develop
                specialized solutions catered to your particular requirements, making sure that your brand stands out
                and achieves its full potential in the digital world.</p>
            <button class="read">Read More</button>
        </div>
    </div>
    <section class="valuesSection">
        <div class="values">
            <div class="value">
                <h1>4</h1>
                <br/>
                <h2>years</h2>
            </div>
            <div class="value">
                <h1>15</h1>
                <br/>
                <h2>Professional Staff</h2>
            </div>
            <div class="value">
                <h1>5</h1>
                <br/>
                <h2>Projects in Progress</h2>
            </div>
            <div class="value">
                <h1>54</h1>
                <br/>
                <h2>Happy Customers</h2>
            </div>
        </div>
    </section>
    <section class="estimate">
        <div class="estimateDiv">
            <h1>Need a Successful Project? let's Start Working Togther!</h1>
            <button>Estimate Project</button>
        </div>
    </section>
    <Swiper/>
    <Team/>
    <Tech/>
    </>
  )
}

export default Main