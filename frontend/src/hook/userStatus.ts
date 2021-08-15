
import store, { actionCreators } from "../redux/store";

export default async function checkUserStatus(getUSERNAME?: Function) {
    if (sessionStorage.getItem('Access')) {
        store.dispatch(actionCreators.setUserState('login'))
        if (getUSERNAME) getUSERNAME(sessionStorage.getItem('USERNAME'));
    }
    else if (chrome.storage) {
        await loadChromeStorageToken().then(storageData => {
            const { Access }: any = storageData;
            if (Access.length > 10) {
                store.dispatch(actionCreators.setUserState('login'))
            }

            if (getUSERNAME) {
                const { USERNAME }: any = storageData;
                getUSERNAME(USERNAME);
            }
        })
    } else if (localStorage.getItem('Access')) {
        store.dispatch(actionCreators.setUserState('login'))
        if (getUSERNAME) getUSERNAME(localStorage.getItem('USERNAME'));
    }
    else {
        store.dispatch(actionCreators.setUserState('logout'))
    }
}


function loadChromeStorageToken() {
    return new Promise((resolve, reject) => {
        chrome.storage.sync.get(['Access', 'USERNAME'], data => {
            if (data.Access) {
                resolve(data)
            };
        })
    })
}