import { Outlet, NavLink } from "react-router-dom"

export default function HostLayout() {
    return (
        <div className="grow px-5">
            <nav>
                <ul className='flex list-none space-x-5 text-[#4D4D4D] font-semibold text-sm'>
                    <li>
                        <NavLink to="." end className={({ isActive }) => `cursor-pointer transition-all duration-1000 ease-[cubic-bezier(0.12,0.08,0,1.59)] ${isActive ? "border-b-2 border-black text-black" : "border-b-2 border-transparent hover:border-black hover:text-black"}`}>
                            Dashboard
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="income" className={({ isActive }) => `cursor-pointer transition-all duration-1000 ease-[cubic-bezier(0.12,0.08,0,1.59)] ${isActive ? "border-b-2 border-black text-black" : "border-b-2 border-transparent hover:border-black hover:text-black"}`}>
                            Income
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="vans" className={({ isActive }) => `cursor-pointer transition-all duration-1000 ease-[cubic-bezier(0.12,0.08,0,1.59)] ${isActive ? "border-b-2 border-black text-black" : "border-b-2 border-transparent hover:border-black hover:text-black"}`}>
                            Vans
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="reviews" className={({ isActive }) => `cursor-pointer transition-all duration-1000 ease-[cubic-bezier(0.12,0.08,0,1.59)] ${isActive ? "border-b-2 border-black text-black" : "border-b-2 border-transparent hover:border-black hover:text-black"}`}>
                            Reviews
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    )
}