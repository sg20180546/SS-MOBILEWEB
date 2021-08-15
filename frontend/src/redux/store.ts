import { createStore, combineReducers } from 'redux';
// import configures
const LOGIN = 'login';
const LOGOUT = 'logout';
const SETPOST = 'setpost';
const NOTFOUND = 'notfound';
const SERVERERROR = 'servererror';
const CONFIG = 'config';
const setUserState = (log: string) => {
    return {
        type: log
    }
}

const setPosts = (posts: any[], currentPage: any, totalPages: any) => {
    return {
        type: SETPOST,
        payload: {
            posts,
            currentPage,
            totalPages
        }
    }
}
const notFound = () => {
    return {
        type: NOTFOUND,
        msg: '검색 결과가 없습니다'
    }
}

const serverError = (errorMessage: string) => {
    return {
        type: SERVERERROR,
        errorMessage
    }
}

const configSearchOption = (type: any, size: any, page: any, keyWord: any) => {
    return {
        type: CONFIG,
        payload: {
            type,
            size,
            page,
            keyWord
        }
    }
}


// -----------------------------------
const userStateReducer = (state = 'logout', action: any) => {
    switch (action.type) {
        case LOGIN:
            return 'login';
        case LOGOUT:
            return 'logout';
        default:
            return state;
    }
}
const postReducer = (state = [], action: any): any => {
    switch (action.type) {
        case SETPOST:
            return action.payload;
        case NOTFOUND:
            return action.msg;
        case SERVERERROR:
            return action.errorMessage;
        default:
            return state;
    }
}

const initialSearchOption = {
    size: '30',
    page: 1,
    type: 'title',
    keyWord: ''
}

const searchOptionReducer = (state = initialSearchOption, action: any) => {
    switch (action.type) {
        case CONFIG:
            return action.payload;
        default:
            return state;
    }
}



const rootReducer = combineReducers({
    userstate: userStateReducer,
    postData: postReducer,
    searchOption: searchOptionReducer
})

const store = createStore(rootReducer);

const actionCreators = {
    setUserState,
    setPosts,
    notFound,
    serverError,
    configSearchOption
}
export { actionCreators }

export default store;
