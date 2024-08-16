import React from 'react'
import './about.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
    return (
        <div className='about'>
            <div className="about-left">
                <img src={about_img} alt="About" className='about-img' />
                <img src={play_icon} alt="Play" className='play-icon' onClick={() => setPlayState(true)}/>
            </div>
            <div className="about-right">
                <h3>ABOUT UNIVERSITY</h3>
                <h2>Nurturing Tomorrow's Leaders Today</h2>
                <p>
                    Ensure the program is accredited by relevant bodies, such as the Commission on Collegiate Nursing Education (CCNE) or the Accreditation Commission for Education in Nursing (ACEN). This ensures the program meets high standards of education.
                </p>
                <p>
                    Look at the curriculum to see if it includes the necessary coursework and clinical experience. Some programs might offer specializations or tracks that align with your interests.
                </p>
                <p>
                    Check the qualifications and experience of the faculty members. Experienced instructors can provide valuable insights and connections in the field.
                </p>
            </div>
        </div>
    )
}

export default About