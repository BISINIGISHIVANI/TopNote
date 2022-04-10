import  './landing-page.css';
import { NavBar } from '../../components';
import {hero} from '../../assets/index';
export default function LandingPage() {
   return <section>
      <NavBar/>
      <div className='div-row'>
      <div className='welcome-section'>
      <h2 className='header-h2'>Welcome!</h2>
       
<p className='welcome-para'>Note-taking is the practice of recording information from different sources and platforms. By taking notes, the writer records the essence of the information, freeing their mind from having to recall everything.</p>
<h2>Take Note From TopNote</h2>
<p className='welcome-para'>Focus on what matters most.
Manage everything, from big projects to personal moments.</p>
<button className='banner-btn1 cursor-pointer'>Get Started</button>
      </div>
       <div className='hero-img'>
       <img src={hero} alt="hero"/>
       </div>
      </div>
   </section>
}
