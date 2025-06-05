import aboutimg from '../assets/aboutbg.png';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <>
      <div className='w-full sm:h-72'>
        <img className='object-cover object-top w-full h-full' src={aboutimg} alt="abouttopimg" />
      </div>
      <div className='bg-[#FFF7ED] text-[#161616] h-full py-5 px-5 sm:px-8 sm:py-6'>
        <h2 className='font-extrabold text-xl md:text-2xl lg:text-3xl'>Don’t squeeze in a sedan when you could relax in a van.</h2>
        <div className='font-medium text-[11.5px] md:text-sm sm:text-xs text-justify mt-2 sm:mt-6 space-y-3'>
          <p>
            Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
            (Hitch costs extra 😉)
          </p>
          <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
        </div>
        <div className='bg-[#FFCC8D] py-4 px-5 rounded-sm space-y-3 mt-4 sm:mt-8'>
          <div className='font-bold text-md leading-5'>
            <h3>Your destination is waiting.</h3>
            <h4>Your van is ready.</h4>
          </div>
       <Link to="/vans"><button className='text-white bg-[#161616] py-2 px-3 rounded-md text-[11px] cursor-pointer transition-all duration-1000 ease-[cubic-bezier(0.12,0.08,0,1.59)] hover:scale-101 hover:translate-px'>Explore our vans</button></Link>
        </div>
      </div>
    </>
  )
}