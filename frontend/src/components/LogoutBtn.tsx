
import { useEffect, useRef } from "react";
import { NavLi } from "../assets/styles/element";
import getToken from "../hook/getToken";
import store, { actionCreators } from "../redux/store";
import { connect } from 'react-redux';

function LogoutBtn({ state, dispatchLogout }: any) {
    const element = useRef<HTMLOListElement>(null);




    useEffect(() => {
        const { current } = element;
        current?.addEventListener('click', requestLogoutThenRemoveToken);
        return (() => {
            current?.removeEventListener('click', requestLogoutThenRemoveToken);
        })
    }, [])


    return (
        <NavLi ref={element} >로그아웃</NavLi>
    )
}


const removeTokenInStorage = (event?: any) => {
    if (chrome.storage) {
        chrome.storage.sync.remove('Access');
        chrome.storage.sync.remove('Refresh');
        chrome.storage.sync.remove('USERNAME');
        localStorage.removeItem('previousPage');
        sessionStorage.clear();
    } else {
        localStorage.removeItem('Access');
        localStorage.removeItem('Refresh');
        localStorage.removeItem('USERNAME');
        localStorage.removeItem('previousPage');
        sessionStorage.clear();
    }

}

const requestAPILogout = async () => {
    const Access = (await getToken()).Access
    fetch(process.env.REACT_APP_API_URL + 'v1/user/logout', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${Access} `
        }
    }).then(
        res => {
            if (res.status === 200) {
                return res.json()
            } else throw new Error(`${res.status}`);
        }
    ).then(res => {
    })
        .catch(err => {
        }
            // redirect 할지 고민중
        )
}

function mapStateToProps(state: any, ownProps: any) {
    return { state };
}

function mapDispatchToProps(dispatch: any, ownProps: any) {
    return {
        dispatchLogout: () => dispatch(actionCreators.setUserState('logout'))
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(LogoutBtn);


const requestLogoutThenRemoveToken = async () => {
    await requestAPILogout();
    await removeTokenInStorage();
    store.dispatch(actionCreators.setUserState("logout"));
}

export { removeTokenInStorage };