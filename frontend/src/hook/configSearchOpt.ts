import store, { actionCreators } from "../redux/store"
import { getPost } from "./getPost";
import $ from 'jquery';
async function configSearchOption() {
    const { postData } = store.getState();
    await dispatchRadioButtonValue();
    getPost();
}


export { configSearchOption };

function dispatchRadioButtonValue() {
    console.log('hey?');
    const changedTYPE = $('input[name="type"]:checked').val();
    console.log(changedTYPE);
    const changedSIZE = $('input[name=size]:checked').val();
    const keyWord = $('input[name=keyWord]').val();
    store.dispatch(actionCreators.configSearchOption(changedTYPE, changedSIZE, 1, keyWord))

}