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
import LOGO from '../Simg.png';
// env 

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [authString, getAuthStringAndRedirect] = useState<any | null>(false);
    const [loading, setLoading] = useState(true);
    const [autoLoginOpt, setAutoLoginOpt] = useState(true);
    const [state, setState] = useState("");
    const [token, getToken] = useState(false);
    const [confirmBoxModal, setConfirmBoxModal] = useState(false);
    const [moveAuth, setMoveGetAuth] = useState(false);

    useEffect(() => {
        setLoading(false);
        if (moveAuth) {
            fetch(process.env.REACT_APP_API_URL + 'v1/user/authenticate/' + email)
                .then(res => res.json())
                .then(resdata => {
                    console.log(resdata);
                    if (resdata.status === 'success') {
                        console.log(process.env.REACT_APP_API_URL + ' dot');
                        sessionStorage.setItem('authString', resdata.data.authString)
                        sessionStorage.setItem('Page', resdata.data.target);
                        getAuthStringAndRedirect(true)
                    } else {
                        throw new Error
                    }
                })
                .catch(
                    // 에러처리
                )
        }
    }, [moveAuth]);


    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const user = {
            username: email,
            password: password
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
                throw new Error;
            }
        }
        )
            .then(resdata => {
                if (resdata.status === 'success') {
                    console.log(resdata);
                    localStorage.setItem('USERNAME', email);
                    localStorage.setItem('Refresh', resdata.data.refreshToken);
                    localStorage.setItem('Access', resdata.data.accessToken);
                    getToken(true);
                    // Chrome Storage API
                    // chrome.storage.local.set({ Refresh: resdata.data.accsessToken, Access: resdata.data.refreshToken }, () => {
                    // });
                    // chrome.storage.local.get(null, function (all) {
                    //     getToken(JSON.stringify(all))
                    // })

                }
                else if (resdata.status === "fail") {

                    if (resdata.data.username) {
                        setState("존재하지 않는 아이디입니다");

                    }
                    else if (resdata.data.authenticated) {
                        setConfirmBoxModal(true);


                    } else if (resdata.data.password) {
                        setState("비밀번호를 확인해주세요");
                    } else throw new Error
                }
            }).catch(err => {

                setState('서버가 고장났어요 ㅠㅠ');

            });

    }

    return (
        <div className='root' >

            {authString ? <Redirect to="/getauth" /> : <Fragment />}
            {token ? <Redirect to="/" /> : <Fragment />}

            {loading ? <Fragment> <LoadingPage>로딩중 </LoadingPage> </Fragment> :
                <Fragment>
                    {confirmBoxModal && <Fragment><ConfirmContainer>

                    </ConfirmContainer>
                        <ConfirmBox >미인증 회원입니다. <br />인증 페이지로 이동하시겠습니까?
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between', position: 'relative',
                                top: '10px', width: '120px'
                            }}><Yes onClick={() => { setMoveGetAuth(true) }}>인증하기</Yes>
                                <No onClick={() => { setConfirmBoxModal(false) }}>다음에</No></div>
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

                            {autoLoginOpt ? <LoginNavLiClicked onClick={() => setAutoLoginOpt(!autoLoginOpt)}><li style={{ color: '#f84e75' }}>자동로그인</li></LoginNavLiClicked>
                                : <LoginNavLi onClick={() => setAutoLoginOpt(!autoLoginOpt)}><li>자동로그인</li></LoginNavLi>}



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