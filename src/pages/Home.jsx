import homgbg from '../assets/homebg.png';
import { Link } from 'react-router-dom';

export default function Home() {
    const background = {
        backgroundImage: `url(${homgbg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    };

    return (
        <>
            <div className='grow text-white relative' style={background}>
                <div className="absolute inset-0 bg-black/50 py-15 px-5 flex flex-col sm:items-center">
                    <h1 className='font-extrabold text-3xl sm:text-4xl mb-5 max-w-2xl sm:text-center'>You got the travel plans, we got the travel vans.</h1>
                    <div>
                        <p className='max-w-xl sm:text-center'>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
                        <Link to="/vans"><button className='transition-all duration-1000 ease-[cubic-bezier(0.12,0.08,0,1.59)] mt-12 w-full font-semibold bg-[#FF8C38] p-2 rounded-sm cursor-pointer hover:scale-101 hover:translate-px'>Find your van</button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}