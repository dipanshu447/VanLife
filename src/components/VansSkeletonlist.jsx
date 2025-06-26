import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';
import { useState, useEffect } from "react";
import VansSkeleton from "../skeletons/VansSkeleton";

export default function VansSkeletonList() {
    const [skeletonCount, setskeletonCount] = useState(4);

    useEffect(() => {
        function handleResize() {
            const width = window.innerWidth;

            if (width >= 1024) {
                setskeletonCount(10);
            } else if (width >= 768) {
                setskeletonCount(8);
            } else if (width >= 650) {
                setskeletonCount(6);
            }
            else {
                setskeletonCount(4);
            }
        }

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize)
    }, []);

    return (
        <>
            <div className="flex gap-4">
                <Skeleton height={20} width={60} />
                <Skeleton height={20} width={60} />
                <Skeleton height={20} width={60} />
            </div>
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-8 my-10 grow">
                {Array.from({ length: skeletonCount }).map((_, i) => (
                    <VansSkeleton key={i} />
                ))}
            </div>
        </>
    )
}