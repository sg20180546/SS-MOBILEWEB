
export default async function getToken() {
    if (sessionStorage.getItem('Access')) {
        const Access = sessionStorage.getItem('Access');
        return { Access };
    }

    else if (chrome.storage) {
        const { Access, Refresh } = await loadChromeStorageToken().then(storageData => {
            const { Access, Refresh }: any = storageData;
            return { Access, Refresh };
        })
        return { Access, Refresh };
    }
    else {
        const Access = localStorage.getItem('Access');
        const Refresh = localStorage.getItem('Refresh');
        return { Access, Refresh };
    }
}


function loadChromeStorageToken() {
    return new Promise((resolve, reject) => {
        chrome.storage.sync.get(['Access', 'Refresh'], data => {
            resolve(data);
        })
    })
}