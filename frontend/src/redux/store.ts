import { createStore, combineReducers } from 'redux';
// import configures
const LOGIN = 'login';
const LOGOUT = 'logout';
const SETPOST = 'setpost';
const NOTFOUND = 'notfound';
const SERVERERROR = 'servererror';
const CONFIG = 'config';
const LOADING = 'loading';
const COMPELTE = 'complete';
const GET = 'get';
const CUSTOMERROR = 'customError';
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

const serverError = (msg: string) => {
    return {
        type: SERVERERROR,
        msg
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

const setLoadingState = (state: string) => {
    return {
        type: state
    };
}


const getFrequentKeywords = (state: any[]) => {
    return {
        type: GET,
        payload: state
    }
}
const setCustomError = (msg: string) => {
    return {
        type: CUSTOMERROR,
        msg
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
            return action.msg;
        case CUSTOMERROR:
            return action.msg;
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

const LoadingStateReducer = (state = true, action: any) => {
    switch (action.type) {
        case LOADING:
            return true;
        case COMPELTE:
            return false;
        default:
            return state;
    }
}

const FrequentKeywordsReducer = (state = [], action: any) => {
    switch (action.type) {
        case GET:
            return action.payload;
        default:
            return state;
    }
}



const rootReducer = combineReducers({
    userstate: userStateReducer,
    postData: postReducer,
    searchOption: searchOptionReducer,
    isLoading: LoadingStateReducer,
    FrequentKeywords: FrequentKeywordsReducer
})

const store = createStore(rootReducer);

const actionCreators = {
    setUserState,
    setPosts,
    notFound,
    serverError,
    setCustomError,
    configSearchOption,
    setLoadingState,
    getFrequentKeywords
}
export { actionCreators }

export default store;
