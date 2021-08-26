
import { useEffect, useRef } from "react";


const useChromeTab = (url: string) => {

    const element = useRef<any>(null);
    useEffect(() => {
        const { current } = element;
        current?.addEventListener('click', () => {
            console.log(url);
            chrome.tabs.create({ url, active: false });
        })
        return () => current?.removeEventListener('click', () => {
            chrome.tabs.create({ url, active: false });
        })
    }, [url])

    return element;
}

export { useChromeTab }