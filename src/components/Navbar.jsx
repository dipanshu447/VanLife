import Logo from '../assets/logo.png';
import { NavLink, Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <header className='bg-[#FFF7ED] flex justify-between items-center py-8 px-5 sm:py-5'>
            <div>
                <Link to="."><img className='w-28 h-auto p-1 border-b-2 transition-all border-transparent duration-1000 ease-[cubic-bezier(0.12,0.08,0,1.59)] hover:border-black' src={Logo} alt="logo" /></Link>
            </div>
            <ul className='flex list-none space-x-5 text-[#4D4D4D] font-semibold'>
                <li>
                    <NavLink to="host" className={({ isActive }) => `cursor-pointer transition-all duration-1000 ease-[cubic-bezier(0.12,0.08,0,1.59)] ${isActive ? "border-b-2 border-black text-black" : "border-b-2 border-transparent hover:border-black hover:text-black"}`}>
                        Host
                    </NavLink>
                </li>
                <li>
                    <NavLink to="about" className={({ isActive }) => `cursor-pointer transition-all duration-1000 ease-[cubic-bezier(0.12,0.08,0,1.59)] ${isActive ? "border-b-2 border-black text-black" : "border-b-2 border-transparent hover:border-black hover:text-black"}`}>
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to="vans" className={({ isActive }) => `cursor-pointer transition-all duration-1000 ease-[cubic-bezier(0.12,0.08,0,1.59)] ${isActive ? "border-b-2 border-black text-black" : "border-b-2 border-transparent hover:border-black hover:text-black"}`}>
                        Vans
                    </NavLink>
                </li>
            </ul>
        </header>
    )
}