// library
import React, { Fragment, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { Redirect } from 'react-router';
// import ch

// element
import {
    DefaultInput, Navbar, NavLi, LoginNavLi, BodyContainer, LoginForm
    , LoginButton, LoginNavBar, Img, LoginNavLiClicked, ErrorMsg, ConfirmContainer, ConfirmBox
    , Yes, No, LoadingPage
} from '../assets/styles/element';
// img
import LOGO from '../img/Simg.png';
import saveToken from '../hook/saveToken';
// Error
// import { ServerInvalidResError, ServerStatusError } from '../hook/Error';
// import { validateResponse } from '../hook/Error';
export default function Login() {

    const [email, setEmail] = useState('');
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
            fetch(process.env.REACT_APP_API_URL + 'v1/user/authenticate/' + email)
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
        const user = {
            username: email,
            password: password,
            remember: remember
        }
        fetch(process.env.REACT_APP_API_URL + 'v1/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then(res => {
            if (res.status === 401 || res.status === 404 || res.status === 200) {
                return res.json();
            }
            else {
                throw new Error(`${res.status}`);
            }
        }
        )
            .then(resdata => {
                if (resdata.status === 'success') {
                    localStorage.setItem('USERNAME', email);
                    saveToken(remember, resdata.data.accessToken, resdata.data.refreshToken)
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
                    } else throw new Error('Unknown')
                } else throw new Error('Unknown')
            }).catch(err => {

                setState('서버가 고장났어요 ㅠㅠ' + err.message);
            });

    }

    return (
        <div className='root' >

            {LoginStatus === 'RedirectingToAuthPage...' ? <Redirect to="/getauth" /> : <Fragment />}
            {LoginStatus === 'Success' ? <Redirect to="/" /> : <Fragment />}

            {loading ? <Fragment> <LoadingPage>로딩중 </LoadingPage> </Fragment> :
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
                                value={email}
                                required
                                placeholder='ID'
                                onChange={e => setEmail(e.target.value)} />

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

                            {remember ? <LoginNavLiClicked onClick={() => setRemember(!remember)}><li style={{ color: '#f84e75' }}>자동로그인</li></LoginNavLiClicked>
                                : <LoginNavLi onClick={() => setRemember(!remember)}><li>자동로그인</li></LoginNavLi>}



                            <Link to={{ pathname: '/' }}>
                                <LoginNavLi ><li>비밀번호찾기</li></LoginNavLi>
                            </Link>
                            <Link to={{ pathname: '/signup' }}>
                                <LoginNavLi ><li>회원가입</li></LoginNavLi>
                            </Link>
                        </LoginNavBar>

                    </BodyContainer>
                </Fragment>}
        </div >
    );
}