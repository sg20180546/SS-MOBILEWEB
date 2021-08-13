
import { useEffect, useRef } from "react";
import { NavLi } from "../assets/styles/element";
import store, { actionCreators } from "../redux/store";


export default function LogoutBtn() {
    const onClick = () => store.dispatch(actionCreators.setUserState('logout'))
    const element = useRef<HTMLOListElement>(null);


    const requestAPIthenStorageClear = () => {
        requestAPILogout().then(() => {
            StorageClear();
        })
    }


    useEffect(() => {
        const { current } = element;
        current?.addEventListener('click', requestAPIthenStorageClear);
        current?.addEventListener('click', onClick);
        return (() => {
            current?.removeEventListener('click', requestAPIthenStorageClear);
            current?.removeEventListener('click', onClick);
        })
    }, [])


    return (
        <NavLi ref={element} >로그아웃</NavLi>
    )
}


const StorageClear = (event?: any) => {
    if (chrome.storage) {
        chrome.storage.local.clear();
        chrome.storage.sync.clear();
    } else {
        localStorage.clear();
        sessionStorage.clear();
    }

}

const requestAPILogout = async () => {
    const ifRememberLoginTokenInLocal = localStorage.getItem('Access') ? localStorage.getItem('Access') : sessionStorage.getItem('Access');

    fetch(process.env.REACT_APP_API_URL + 'v1/user/logout', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${ifRememberLoginTokenInLocal} `
        }
    }).then(
        res => {
            if (res.status === 200) {
                return res.json()
            } else throw new Error(`${res.status}`);
        }
    ).then(res => {
    })
        .catch(err => {
            console.log(err);
        }
            // redirect 할지 고민중
        )
}

export { StorageClear };