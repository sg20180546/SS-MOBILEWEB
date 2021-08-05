
export default function saveToken(remember: boolean, AccessToken: string, RefreshToken: string): void {

    if (remember) {
        if (chrome.storage) chrome.storage.sync.set({ Access: AccessToken, Refresh: RefreshToken });
        else {
            localStorage.setItem('Access', AccessToken);
            localStorage.setItem('Refresh', RefreshToken);
        }
    } else {
        sessionStorage.setItem('Access', AccessToken);
    }
}