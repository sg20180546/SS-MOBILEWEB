import store, { actionCreators } from "../redux/store"
import getToken from "./getToken";
import { Refresh } from "./refresh";
import checkUserStatus from "./userStatus";
import $ from 'jquery';
const getPost = async () => {
    const { userstate, searchOption } = store.getState();
    const keyWord = $('input[name="keyWord"]').val();
    if (!keyWord) {
        console.log('no keword');
        return;
    }
    const url = process.env.REACT_APP_API_URL + 'v1/search' + `?query=${keyWord}&type=${searchOption.type}&size=${searchOption.size}&page=${searchOption.page}`
    if (userstate !== 'login') {
        return;
    } else {
        const Access = (await getToken()).Access
        fetch(url,
            {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${Access}`
                }
            }
        ).then(async (response) => {
            switch (response.status) {
                case 200:
                    return response.json();
                case 401:
                    await Refresh()
                    await checkUserStatus();
                    getPost();
                    return;
                case 404:
                    resultNotFound();
                    return;
                default:
                    serverError(response);
                    return;
            }
        }
        ).then(JSONresponse => {
            if (JSONresponse) paintPost(JSONresponse)
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
    store.dispatch(actionCreators.serverError(`${response.status} ${response.statusText}`))
}




export { getPost };