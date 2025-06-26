import Logo from '../assets/logo.png';
import userIcon from '../assets/UserIcon.png';
import { NavLink, Link } from 'react-router-dom';

export default function NavBar() {
    function logout() {
        localStorage.removeItem("loggedin");
    }

    return (
        <header className='bg-[#FFF7ED] flex justify-between items-center py-8 px-5 sm:py-5'>
            <div>
                <Link to="."><img className='w-28 h-auto p-1 border-b-2 transition-all border-transparent duration-1000 ease-[cubic-bezier(0.12,0.08,0,1.59)] hover:border-black' src={Logo} alt="logo" /></Link>
            </div>
            <nav className='flex text-sm space-x-4 sm:text-base sm:space-x-5 text-[#4D4D4D] font-semibold items-center'>
                <NavLink to="host" className={({ isActive }) => `cursor-pointer transition-all duration-1000 ease-[cubic-bezier(0.12,0.08,0,1.59)] ${isActive ? "border-b-2 border-black text-black" : "border-b-2 border-transparent hover:border-black hover:text-black"}`}>
                    Host
                </NavLink>
                <NavLink to="about" className={({ isActive }) => `cursor-pointer transition-all duration-1000 ease-[cubic-bezier(0.12,0.08,0,1.59)] ${isActive ? "border-b-2 border-black text-black" : "border-b-2 border-transparent hover:border-black hover:text-black"}`}>
                    About
                </NavLink>
                <NavLink to="vans" className={({ isActive }) => `cursor-pointer transition-all duration-1000 ease-[cubic-bezier(0.12,0.08,0,1.59)] ${isActive ? "border-b-2 border-black text-black" : "border-b-2 border-transparent hover:border-black hover:text-black"}`}>
                    Vans
                </NavLink>
                <Link to="login">
                    <img className="object-contain w-4.5 sm:w-5 cursor-pointer" src={userIcon} alt="login" />
                </Link>
                <img onClick={logout} className="-ml-2 object-contain w-4.5 sm:w-5 cursor-pointer" src="https://img.icons8.com/?size=100&id=BdksXmxLaK8r&format=png&color=000000" alt="logout" />
            </nav>
        </header>
    )
}