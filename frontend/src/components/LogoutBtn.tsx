
import { icon } from "@fortawesome/fontawesome-svg-core";
import { useEffect, useRef } from "react";
import { NavLi } from "../assets/styles/element";



export default function LogoutBtn(props: any) {
    const { onClick } = props;
    const element = useRef<HTMLOListElement>(null);
    const StorageClear = (event: any) => {
        event.preventDefault();
        const ifRememberLoginTokenInLocal = localStorage.getItem('Access') ? localStorage.getItem('Access') : sessionStorage.getItem('Access');

        fetch(process.env.REACT_APP_API_URL + 'v1/user/logout', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${ifRememberLoginTokenInLocal} `
            }
        }).then(
            res => {
                console.log(res);
                if (res.status === 200) {

                    return res.json()
                } else throw new Error(`${res.status}`);
            }
        ).catch(err => {
            console.log(err);
        }
            // redirect 할지 고민중
        )

        if (chrome.storage) {
            chrome.storage.local.clear();
            chrome.storage.sync.clear();
        } else {
            localStorage.clear();
            sessionStorage.clear();
        }

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