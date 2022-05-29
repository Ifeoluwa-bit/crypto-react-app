import { useState } from 'react';
import './Navbar.css';
import { FaBars, FaTimes} from 'react-icons/fa';

import {Link } from 'react-scroll'

export default function Navbar() {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

  return (
    <div name='home' className='header'>

        <div className="container">

            <h1>De<span className='primary'>Fi</span></h1>

            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
               <Link to='home' smooth={true} duration={500}><li>Home</li></Link>
               <Link to='featured' smooth={true} duration={500}><li>Featured</li></Link>
               <Link to='earn' smooth={true} duration={500}><li>Earn</li></Link> 
               <Link to='contact' smooth={true} duration={500}><li>Contact</li></Link> 
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
