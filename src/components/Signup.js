import './Signup.css'
import Trade from '../assets/trade-img.png'

export default function Signup() {
  return (
    <div name='earn' className='signup'>
        <div className="container">
            {/*Left*/}
            <div className="left">
                <img src={Trade} alt="" />
            </div>

            {/*Right*/}
            <div className="right">
                <h2>Earn passive income with crypto.</h2>
                <p>Earn up to 12% annual rewards on 30+ digital assets. Simply hold your assets in the app to authomatically earn rewards at the end of each month with no lockups and no limits.</p>
                <div className="input-container">
                    <input type="email" placeholder='Enter your email' />
                    <button className="btn">Learn More</button>
                </div>
            </div>
        </div>
    </div>
  )
}
