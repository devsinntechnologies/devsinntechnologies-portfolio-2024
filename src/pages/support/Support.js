import React from 'react'
import './support.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'


function Support() {
  return (
    <>
    <div class="container">
        <div class="heading">
            <h1>Support</h1>
        </div>
        <div></div>
    </div>
    <div class="creativeDiv">
        <div class="creative">
            <h1>Get the Help You Need with Devsinn</h1>
            <p>
                At Dev's Inn Technologies, we understand the importance of having reliable support when you need it. That's why we offer expert support for all of our website design services. Our team of experienced professionals is always available to answer your questions, troubleshoot issues, and help you make the most of your website.
                <br/><br/>
                Whether you need technical assistance, guidance on website design best practices, or simply have a question about our services, we're here to help. We take pride in our commitment to providing top-notch support to our clients, and we're always striving to exceed your expectations.
            </p>
        </div>
        <div class="features">
            <h1>Features Benefits</h1>
            <ul>
                <li><i><FontAwesomeIcon icon={faCircleCheck} /></i> Real-time Assistance</li>
                <li><i><FontAwesomeIcon icon={faCircleCheck} /></i> Feedback Collection</li>
                <li><i><FontAwesomeIcon icon={faCircleCheck} /></i>Remote Assistance</li>
                <li><i><FontAwesomeIcon icon={faCircleCheck} /></i> 24x7 support</li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Support