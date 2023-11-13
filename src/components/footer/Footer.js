import React from 'react'
import logo from '../logo.png'
import './footer.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faWhatsapp, faInstagram, faXTwitter, faYoutube, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { faLocation, faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons'



function Footer() {
  return (
    <footer>
    <div className="foot">
            <div class="inFoot">
                <img src={logo} alt=''/>
                <p>We offer the services you need to succeed online. Get in touch today and let us help you transform your online presence.</p>
            </div>
            <div className="inFoot">
                <h2>Useful Link</h2>
                <ul>
                    {/* <li><Link to='/faq'>FAQ</Link></li> */}
                    <li><Link to='/privacy-policy'>Privacy Policy</Link></li>
                    <li><Link to='/terms-and-conditions'>Term & Conditions</Link></li>
                    <li><Link to='/support'>Support</Link></li>
                </ul>
            </div>
            <div className="inFoot">
                <h2>Contact Us</h2>
                <ul className="address">
                   <li><i><FontAwesomeIcon icon={faLocation} /></i> <a target='blank' href="https://www.google.com/maps/place/Brainy+and+bright+academy/@31.5435633,74.2869931,17z/data=!3m1!4b1!4m6!3m5!1s0x391903eed440ec27:0xf8ecebbd6a8f32a6!8m2!3d31.5435633!4d74.289568!16s%2Fg%2F11tbw7zmp5?entry=ttu">Brainy and bright academy, House #14b butt street, Kalyar Rd, Lahore</a></li>
                    <li><i><FontAwesomeIcon icon={faPhone} /></i> <a href='tel:0336 5918295'> 0336 5918295</a> </li>
                    <li><i><FontAwesomeIcon icon={faEnvelope} /></i> <a className='mail' href='mailto:devsinntechnologies@gmail.com'>devsinntechnologies@gmail.com</a> </li>
                </ul>
            </div>
        </div>
        <div class="footIcon">
            <div class="footDetail">
                <p>&copy; 2023 Dev's Inn. All Rights Reserved.</p>
                <div class="linkIcon">
                    <ul>
                        <li><a href="https://api.whatsapp.com/send?phone=923365918295&text=     %20Stay%20Connected%20With%20Devsinn%20Technologies" target='blank'><i><FontAwesomeIcon icon={faWhatsapp} size="xl" /></i></a></li>
                        <li><a href="https://www.facebook.com/devsinntechnology?mibextid=ZbWKwL" target='blank'><i><FontAwesomeIcon icon={faFacebook} size="xl" /></i></a></li>
                        <li><a href="https://instagram.com/devsinntechnologies?igshid=MzRlODBiNWFlZA==" target='blank'><i><FontAwesomeIcon icon={faInstagram} size="xl" /></i></a></li>
                        <li><a href="https://twitter.com/DevsInnTechnol1" target='blank'><i><FontAwesomeIcon icon={faXTwitter} size="xl" /></i></a></li>
                        <li><a href="https://www.linkedin.com/company/devsinn-technologies/" target='blank'><i><FontAwesomeIcon icon={faLinkedin} size="xl" /></i></a></li>
                        <li><a href="https://www.youtube.com/@devsinntechnologies509" target='blank'><i><FontAwesomeIcon icon={faYoutube} size="xl" /></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer