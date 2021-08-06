// import { useEffect } from "react";

// function a(setUserStatus: Function) {
//     useEffect(() => {
//         setUserStatus(checkUserStatus());
//     }, [])
// }

export default async function checkUserStatus(setUserStatus: Function) {

    if (sessionStorage.getItem('Access')) {
        setUserStatus('login')
    }


    else if (chrome.storage) {
        await loadChromeStorageToken().then(Access => {
            const token: any = Access;
            if (token.length > 10) {
                setUserStatus('login')

            }
        })



    } else if (localStorage.getItem('Access')) {
        setUserStatus('login')

    }
}


function loadChromeStorageToken() {
    return new Promise((resolve, reject) => {
        chrome.storage.sync.get(['Access'], data => {
            if (data.Access) {
                resolve(data.Access)
            };
        })
    })
}