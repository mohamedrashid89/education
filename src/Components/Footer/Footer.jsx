import React from 'react'
import './footer.css'

const Footer = () => {

    const currentYear = new Date().getFullYear()

  return (
    <div className='footer'>
        <p>Copyright &copy; {currentYear}, All Rights Reserved</p>
        <ul>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
        </ul>
    </div>
  )
}

export default Footer