import { useState } from 'react';
import './Navbar.css';
import { FaBars, FaTimes} from 'react-icons/fa';

import {Link } from 'react-scroll'

export default function Navbar() {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const handleClose = () => setClick(!click)

  return (
    <div  className='header'>

        <div className="container">

            <h1>De<span className='primary'>Fi</span></h1>

            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
               <Link onClick={handleClose} to='home' smooth={true} duration={500}><li>Home</li></Link>
               <Link onClick={handleClose} to='featured' smooth={true} duration={500}><li>Featured</li></Link>
               <Link onClick={handleClose} to='earn' smooth={true} duration={500}><li>Earn</li></Link> 
               <Link onClick={handleClose} to='contact' smooth={true} duration={500}><li>Contact</li></Link> 
            </ul>

            <div className="btn-group">
                <button className="btn">Connect Wallet</button>
            </div>
            
            <div className="hamburger" onClick={handleClick}>
                {click ? <FaTimes size = {20} style={{color: '#333'}} /> : <FaBars size = {20} style={{color: '#333'}} /> }
            </div>

        </div>

    </div>
  )
}
