import {useRef, useEffect} from "react";

export const useObserver = (ref, canLoad, isLoading, callack) => {
    const observer = useRef()
    useEffect(() => {
        if (isLoading)
            return
        if (observer.current)
            observer.current.disconnect()
        const cb = (entires, observer) => {
            if (entires[0].isIntersecting && canLoad) {
                callack()
            }
        }
        observer.current = new IntersectionObserver(cb);
        observer.current.observe(ref.current)
    }, [isLoading])
}