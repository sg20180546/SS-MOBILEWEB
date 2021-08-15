import { StorageClear } from "../components/LogoutBtn";
import getToken from "./getToken";
import saveToken from "./saveToken";

const Refresh = async () => {
    getToken().then(storageData => {
        const Access = storageData?.Access;
        const Refresh = storageData?.Refresh;
        fetch(process.env.REACT_APP_API_URL + 'v1/user/refresh', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${Access}`,
                'Refresh': `${Refresh}`
            }
        }).then((response) => {
            switch (response.status) {
                case 200:
                    return response.json();
                default:
                    StorageClear();
                    return;
            }
        }
        ).then(JSONresponse => {
            if (JSONresponse) {
                const { data: { accessToken } } = JSONresponse;
                const { data: { refreshToken } } = JSONresponse;
                saveToken(true, accessToken, refreshToken);
            }
        })

    })
}

export { Refresh };