import { useRef, useEffect } from "react";
import { mainColor } from "../assets/styles/element";


const style = 'style={{backgroundColor:${mainColor};}}'
export const useMark = (title: any, searchKeyWord: string) => {
    const MarkElement = useRef<any>(null);
    useEffect(() => {
        const { current } = MarkElement;
        if (current) {
            const markTitleString = title.replace(searchKeyWord, `<mark>${searchKeyWord}</mark>`)
            current.innerHTML = markTitleString;
        }
    }, [])
    return MarkElement;
}
