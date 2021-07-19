import { useEffect, useRef } from "react";

export default function useLogout(onClick: any) {
    const element = useRef<HTMLOListElement>(null);
    useEffect(() => {
        console.log(element.current + "whyy"); // null????
        if (element.current) {
            element.current.addEventListener("click", onClick);
        }

        return () => {
            if (element.current) {
                element.current.removeEventListener("click", onClick);
            }
        };
    }, []);

    return element;
}
