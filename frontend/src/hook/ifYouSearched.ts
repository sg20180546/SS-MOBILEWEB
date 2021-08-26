import store, { actionCreators } from "../redux/store";
import { getPost } from "./getPost";

type PrevPage = {
    type: string;
    size: string;
    page: number;
    keyWord: string
}


export const getPrevPage = async (setF5: Function, userstate: string) => {
    if (ifYouSearched() && userstate === 'login') {
        const { type, size, page, keyWord }: PrevPage = ifYouSearched();
        await store.dispatch(actionCreators.configSearchOption(type, size, page, keyWord))
        await getPost();
        setF5(true);
    }
}


const ifYouSearched = (): any => {
    let previousPage = localStorage.getItem('previousPage');
    if (!previousPage) return false;
    // console.log('ifyouserached ?' + JSON.parse(previousPage));
    if (JSON.parse(previousPage)) {
        console.log('works?');
        return JSON.parse(previousPage);
    }



    return false;
}




