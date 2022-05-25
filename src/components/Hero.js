import './Hero.css';
import Defi from '../assets/laptop-img.png';

export default function Hero() {
  return (
    <div className='hero'>
        <div className="container">

        {/*Left Side */}
        <div className="left">

            <p>Buy & Sell Crypto 24/7 using your retirement account</p>

            <h1>Invest in Cryptocurrency with your IRA</h1>

            <p>Buy, Sell and store hundreds of cryptocurrencies</p>

            <div className="input-container">
                <input type="email" placeholder='Enter your email' />
                <button className="btn">Learn More</button>
            </div>

        </div>



        {/*Right Side */}
        <div className="right">

            <div className="img-container">
                <img src={Defi} alt="" />
            </div>
            
        </div>

        </div>
    </div>
  )
}
