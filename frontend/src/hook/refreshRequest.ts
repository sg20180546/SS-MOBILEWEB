import { removeTokenInStorage } from "../components/LogoutBtn";
import checkUserStatus from "./userStatus";
import getToken from "./getToken";
import saveToken from "./saveToken";
import store, { actionCreators } from "../redux/store";
import { setLoadingState } from "./getPost";
const Success200 = 200;
const NoToken400 = 400;
const InvalidToken401 = 401;

const RefreshRequest = async () => {
    const { Access, Refresh } = (await getToken());
    fetch(process.env.REACT_APP_API_URL + 'v1/user/refresh',
        {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${Access}`,
                'Refresh': `${Refresh}`
            }
        }
    ).then(async (response) => {
        console.log('acc', Access)
        console.log('refresh', Refresh);
        console.log('refresh response', response);
        switch (response.status) {
            case Success200:
                return response.json();
            case NoToken400:
                await console.log('notoken? or more expire time')
                await removeTokenInStorage();
                await checkUserStatus();
                return;
            case InvalidToken401:
                await console.log('invlaid?')
                await removeTokenInStorage();
                await checkUserStatus();
                return;
            default:
                await console.log('defautl?')
                await removeTokenInStorage();
                await checkUserStatus();
                return;
        }
    }
    ).then(async (JSONresponse) => {
        if (JSONresponse) {
            const { data: { accessToken } } = JSONresponse;
            const { data: { refreshToken } } = JSONresponse;
            await saveToken(true, accessToken, refreshToken);
            await checkUserStatus();
            await store.dispatch(actionCreators.setCustomError("다시 시도해주세요"));
            await setLoadingState('complete');
        }
    })

}

export { RefreshRequest };