// library
import React, { Fragment, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { Redirect } from 'react-router';
// import ch

// element
import {
    DefaultInput, Navbar, NavLi, LoginNavLi, BodyContainer, LoginForm
    , LoginButton, LoginNavBar, Img, ErrorMsg, ConfirmContainer, ConfirmBox
    , Yes, No
} from '../assets/styles/element';
// img
import LOGO from '../img/Simg.png';
import saveToken from '../hook/saveToken';
import { cssNumber } from 'jquery';
import { configSearchOption } from '../hook/configSearchOpt';
// Error
// import { ServerInvalidResError, ServerStatusError } from '../hook/Error';
// import { validateResponse } from '../hook/Error';
export default function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(true);
    const [remember, setRemember] = useState(true);
    const [state, setState] = useState("");

    const [LoginStatus, changeLoginStatus] = useState('init');



    // LoginStatus : init - > success
    //                    - > IfyouWantGetAuth? Modal - >  YesFetchAuthString -> RedirectingToAuthPage
    //                                                - >  NopeNextTimegetAuth
    useEffect(() => {

        setLoading(false);
        if (LoginStatus === 'YesFetchAuthstring') {
            fetch(process.env.REACT_APP_API_URL + 'v1/user/authenticate/' + username)
                .then(res => {
                    if (res.status === 200) return res.json()
                    else throw new Error(`${res.status}`);
                }
                )
                .then(resdata => {
                    if (resdata.status === 'success') {
                        sessionStorage.setItem('authString', resdata.data.authString)
                        sessionStorage.setItem('Page', resdata.data.target);
                        changeLoginStatus('RedirectingToAuthPage...');
                    } else {
                    }
                })
                .catch(
                    // 에러처리
                )
        }
    }, [LoginStatus]);


    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const url = process.env.REACT_APP_API_URL + 'v1/user/login'
        const user = {
            username: username,
            password: password,
            remember: remember
        }
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then(response => {
            console.log(response);
            if (response.status === 401 || response.status === 404 || response.status === 200) {
                return response.json();
            }
            else {
                throw new Error(`${response.status}`);
            }
        }
        )
            .then(resdata => {
                console.log(resdata);
                if (resdata.status === 'success') {

                    saveToken(remember, resdata.data.accessToken, resdata.data.refreshToken, username)
                    if (!remember) {
                        localStorage.removeItem('previousPage')
                    }
                    changeLoginStatus('Success')
                }
                else if (resdata.status === "fail") {

                    if (resdata.data.username) {
                        setState("존재하지 않는 아이디입니다");

                    }
                    else if (resdata.data.authenticated) {
                        changeLoginStatus('IFyouWantToGetAuth? Modal')


                    } else if (resdata.data.password) {
                        setState("비밀번호를 확인해주세요");
                    } else throw new Error('Unknown2')
                } else throw new Error('Unknown3')
            }).catch(err => {
                console.log(err);
                if (err.message === 'Failed to fetch') setState('인터넷 연결을 확인하세요')
                else setState('서버가 고장났어요 ㅠㅠ' + err.message);
            });

    }

    return (
        <div className='root' >

            {LoginStatus === 'RedirectingToAuthPage...' ? <Redirect to="/getauth" /> : <Fragment />}
            {LoginStatus === 'Success' ? <Redirect to="/" /> : <Fragment />}

            {loading ? <Fragment> <div></div> </Fragment> :
                <Fragment>
                    {LoginStatus === 'IFyouWantToGetAuth? Modal' && <Fragment><ConfirmContainer>

                    </ConfirmContainer>
                        <ConfirmBox >미인증 회원입니다. <br />인증 페이지로 이동하시겠습니까?
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between', position: 'relative',
                                top: '10px', width: '120px'
                            }}><Yes onClick={() => { changeLoginStatus('YesFetchAuthstring') }}>인증하기</Yes>
                                <No onClick={() => { changeLoginStatus('NopeNextTimegetAuth') }}>다음에</No></div>
                        </ConfirmBox>
                    </Fragment>}
                    <Navbar>
                        <Link to={{ pathname: '/' }}> <NavLi>서담서치</NavLi> </Link>


                        <Link to={{ pathname: '/Login' }}> <NavLi>로그인</NavLi></Link>
                        <Link to={{ pathname: '/signup' }}> <NavLi>회원가입</NavLi> </Link >


                    </Navbar>


                    <BodyContainer>
                        <Img style={{ height: '200px' }} src={LOGO}></Img>
                        <LoginForm onSubmit={handleLogin}>
                            <DefaultInput
                                value={username}
                                required
                                placeholder='ID'
                                onChange={e => setUsername(e.target.value)} />

                            <DefaultInput name='password'
                                type='password'
                                value={password}
                                required
                                onChange={e => setPassword(e.target.value)}
                                placeholder='Password' />
                            <LoginButton>로그인</LoginButton>
                        </LoginForm>
                        <ErrorMsg>{state}</ErrorMsg>
                        <LoginNavBar>


                            <LoginNavLi remember={remember} onClick={() => setRemember(!remember)}><li>자동로그인</li></LoginNavLi>

                            <Link to={{ pathname: '/' }}>
                                <LoginNavLi remember={false}><li>서담서치</li></LoginNavLi>
                            </Link>
                            <Link to={{ pathname: '/signup' }}>
                                <LoginNavLi remember={false} ><li>회원가입</li></LoginNavLi>
                            </Link>
                        </LoginNavBar>

                    </BodyContainer>
                </Fragment>}
        </div >
    );
}