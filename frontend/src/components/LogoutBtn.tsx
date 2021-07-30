
import { useEffect, useRef } from "react";
import { NavLi } from "../assets/styles/element";



export default function LogoutBtn(props: any) {
    const { onClick } = props;
    const element = useRef<HTMLOListElement>(null);
    const StorageClear = (event: any) => {
        event.preventDefault();
        sessionStorage.clear();
        localStorage.clear();
    }


    useEffect(() => {
        const { current } = element;
        current?.addEventListener('click', StorageClear);
        current?.addEventListener('click', onClick);
        return (() => {
            current?.removeEventListener('click', StorageClear);
            current?.removeEventListener('click', onClick);
        })
    }, [])


    return (
        <NavLi ref={element} >로그아웃</NavLi>
    )
}