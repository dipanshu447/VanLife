import { useEffect, useState } from "react";
import HostVanSkeleton from "../skeletons/HostVanSkeleton";

export default function HostSkeletonList() {
    const [skeletonCount, setskeletonCount] = useState(3);

    useEffect(() => {
        function handleResize() {
            const width = window.innerWidth;

            if (width >= 1024) {
                setskeletonCount(8);
            } else if (width >= 768) {
                setskeletonCount(6);
            } else {
                setskeletonCount(3);
            }
        }

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize)
    }, []);

    return (
        <>
            {Array.from({ length: skeletonCount }).map((_, i) => (
                <HostVanSkeleton key={i} />
            ))}
        </>
    )
}