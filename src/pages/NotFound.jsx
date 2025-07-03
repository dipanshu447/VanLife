import { Link } from "react-router-dom";

export default function NotFound(){
    return (
        <div className="grow px-5 flex flex-col mt-25 md:items-center">
            <h1 className="font-bold text-[#161616] text-2xl md:text-3xl">Sorry, the page you were looking for was not found.</h1>
            <Link to='/' className='transition-all duration-1000 ease-[cubic-bezier(0.12,0.08,0,1.59)] mt-8 w-full sm:w-xl font-semibold bg-[#161616] p-2 rounded-sm cursor-pointer hover:scale-101 hover:translate-px text-white text-center'>Return to home</Link>
        </div>
    )
}