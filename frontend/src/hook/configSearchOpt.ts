import store, { actionCreators } from "../redux/store"
import { getPost } from "./getPost";
import $ from 'jquery';
async function configSearchOption() {
    await dispatchRadioButtonValue();
    getPost();
}


export { configSearchOption };

function dispatchRadioButtonValue() {

    const changedTYPE = $('input[name="type"]:checked').val();
    const changedSIZE = $('input[name=size]:checked').val();
    const keyWord = store.getState().searchOption.keyWord;
    store.dispatch(actionCreators.configSearchOption(changedTYPE, changedSIZE, 1, keyWord))

}