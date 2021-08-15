import store, { actionCreators } from "../redux/store"
import getToken from "./getToken";
import { RefreshRequest } from "./refreshRequest";
import checkUserStatus from "./userStatus";
import $ from 'jquery';
import { act } from "react-dom/test-utils";

const Success = 200;
const AccessTokenExpired = 401;
const ResultNotFound = 404


const getPost = async () => {
    const { userstate, searchOption } = store.getState();
    setLoadingState('loading');
    const url = process.env.REACT_APP_API_URL + 'v1/search' + `?query=${searchOption.keyWord}&type=${searchOption.type}&size=${searchOption.size}&page=${searchOption.page}`
    if (userstate !== 'login') {
        return;
    } else {
        const Access = (await getToken()).Access;
        fetch(url,
            {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${Access}`
                }
            }
        ).then(async (response) => {
            switch (response.status) {
                case Success:
                    return response.json();
                case AccessTokenExpired:
                    await RefreshRequest()
                    await checkUserStatus();
                    return;
                case ResultNotFound:
                    resultNotFound();
                    return;
                default:
                    serverError(response);
                    return;
            }
        }
        ).then(JSONresponse => {
            setLoadingState('complete');
            if (JSONresponse) paintPost(JSONresponse);
        })



    }
}




const paintPost = async (response: any) => {
    const { data: { currentItems } } = response;
    const { data: { currentPage } } = response;
    const { data: { totalPages } } = response;
    await store.dispatch(actionCreators.setPosts(currentItems, currentPage, totalPages));
    $('table').scrollTop(0);
}

const resultNotFound = () => {
    store.dispatch(actionCreators.notFound())
}

const serverError = (response: any) => {
    store.dispatch(actionCreators.serverError(`서버가 고장났어요 ㅠㅠ ${response.status}`))
}

export const setLoadingState = (state: string) => {
    store.dispatch(actionCreators.setLoadingState(state));
}



export { getPost };