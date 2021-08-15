
export default function saveToken(remember: boolean, AccessToken: string, RefreshToken: string, USERNAME?: string): void {

    if (remember) {
        if (chrome.storage) {
            chrome.storage.sync.set({ Access: AccessToken, Refresh: RefreshToken });
            if (USERNAME) chrome.storage.sync.set({ USERNAME })
        }
        else {
            localStorage.setItem('Access', AccessToken);
            localStorage.setItem('Refresh', RefreshToken);
            if (USERNAME) localStorage.setItem('USERNAME', USERNAME);
        }
    } else {
        sessionStorage.setItem('Access', AccessToken);
        if (USERNAME) sessionStorage.setItem('USERNAME', USERNAME);
    }
}