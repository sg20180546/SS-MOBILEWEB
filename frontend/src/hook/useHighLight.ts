
import { useRef } from "react";


function useHighLight(elementAID: string, Aevent: string) {

    const elementA = document.getElementById(elementAID);
    const elementB = useRef<HTMLElement>(null);
    const HighLight = () => {
        if (elementB.current) {
            const { current } = elementB;
            current.setAttribute('style', 'animation: highlight 2s ease-out;')
        }
    }

    elementA?.addEventListener(Aevent, HighLight);


    setTimeout(() => elementA?.removeEventListener(Aevent, HighLight), 2000);




    return elementB;
}

export { useHighLight }