import { Link } from "react-router-dom"

export default function HostVanList({ hostvans, editEnabled, disabledLink }) {
    return hostvans.map(van => (
        <Link key={van.id} to={disabledLink ? '.' : van.id} className={disabledLink ? 'cursor-default' : 'cursor-pointer'}>
            <div className="flex items-center p-3 rounded-sm bg-white justify-between">
                <div className="flex gap-3 items-center flex-10">
                    <img className="w-[20%] object-cover rounded-sm transition-all duration-800 ease-[cubic-bezier(0.12,0.08,0,1.59)] hover:shadow-xl" src={van.imageUrl} alt={`Image of ${van.name}`} />
                    <div className="flex flex-col">
                        <span className="text-[#161616] font-semibold">{van.name}</span>
                        <small className="text-[#4D4D4D] font-medium">${van.price}/day</small>
                    </div>
                </div>
                {editEnabled && <p to="vans" className="flex-1 cursor-pointer text-xs text-[#4D4D4D] font-semibold hover:underline">
                    Edit
                </p>}
            </div>
        </Link>
    ))
}