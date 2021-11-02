
import { useEffect, useRef } from "react";


const useChromeTab = (url: string) => {

    const element = useRef<any>(null);
    useEffect(() => {
        const { current } = element;
        current?.addEventListener('click', () => {
            if(chrome.tabs){ 
            chrome.tabs.create({ url, active: false });   
            }else{
                window.open(url, '_blank')
            }
            })
        return () => current?.removeEventListener('click', () => {
            if(chrome.tabs){
                chrome.tabs.create({ url, active: false });
            }else{
                window.open(url, '_blank')
            }
        })
    }, [url])

    return element;
}

export { useChromeTab }