import { useRouteError } from "react-router-dom"

export default function Error() {
    const error = useRouteError();

    return (
        <div className="px-5 lg:px-6 flex flex-col gap-3 mt-10 grow items-center">
            <h1 className="text-2xl sm:text-4xl font-bold text-red-500" >Error : {error.message}</h1>
            {(error.statusText && error.status) && <pre className="text-lg sm:text-xl text-red-400 font-semibold">{error.statusText} : {error.status}</pre>}
        </div>
    )
}