// library
import React, { Fragment, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { Redirect } from 'react-router';
// import ch

// element
import {
    DefaultInput, Navbar, NavLi, LoginNavLi, BodyContainer, LoginForm
    , LoginButton, LoginNavBar, LoginImg, LoginNavLiClicked, ErrorMsg, ConfirmContainer, ConfirmBox
    , Yes, No, LoadingPage
} from '../assets/styles/element';
// img
import LOGO from '../Simg.png';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [authString, setAuthString] = useState<any | null>(false);
    const [loading, setLoading] = useState(true);
    const [autoLoginOpt, setAutoLoginOpt] = useState(true);
    const [state, setState] = useState("");
    const [token, setToken] = useState('');
    const [confirm, setConfirm] = useState(false);
    const [moveAuth, setMoveAuth] = useState(false);

    useEffect(() => {
        setLoading(false);
        if (moveAuth) {
            fetch('https://kshired.com/v1/user/authenticate/' + email)
                .then(res => res.json())
                .then(resdata => {
                    if (resdata.status === 'success') {
                        console.log(resdata.data.authString);
                        sessionStorage.setItem('authString', resdata.data.authString)
                        setAuthString(true)
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
        fetch('https://kshired.com/v1/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then(res => res.json())
            .then(resdata => {
                if (resdata.status === 'success') {
                    console.log(resdata);
                    localStorage.setItem('Refresh', resdata.data.refreshToken);
                    localStorage.setItem('Access', resdata.data.accessToken);
                    setToken(localStorage.getItem('Refresh') + '/' + localStorage.getItem('Access'));
                    // Chrome Storage API
                    // chrome.storage.local.set({ Refresh: resdata.data.accsessToken, Access: resdata.data.refreshToken }, () => {
                    // });
                    // chrome.storage.local.get(null, function (all) {
                    //     setToken(JSON.stringify(all))
                    // })

                }
                else if (resdata.status === "fail") {
                    console.log(resdata);
                    if (resdata.data.username) {
                        console.log("존재하지 않는 아이디입니다");
                        setState("존재하지 않는 아이디입니다");

                    }
                    else if (resdata.data.authenticated) {
                        setConfirm(true);
                        // var reAuth = confirm('재인증을 시도하겠습니까?');
                        // if (reAuth) {
                        //     console.log(reAuth)
                        // } else {
                        //     console.log(reAuth)
                        // }
                        // console.log(reAuth);

                    } else if (resdata.data.password) {
                        console.log("비밀번호를 확인해주세요");
                        setState("비밀번호를 확인해주세요");
                    } else {
                        throw new Error("서버가 터졌습니다..")
                    }
                }
            }).catch(err => {
                // 서버가 터졌을때 에러처리 구현예정
            });

    }

    return (
        <div className='root' >

            {authString ? <Redirect to="/getAuth" /> : <span />}


            {loading ? <Fragment> <LoadingPage>로딩중 </LoadingPage> </Fragment> :
                <Fragment>
                    {confirm && <Fragment><ConfirmContainer>

                    </ConfirmContainer>
                        <ConfirmBox >미인증 회원입니다. <br />인증 페이지로 이동하시겠습니까?
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between', position: 'relative',
                                top: '10px', width: '120px'
                            }}><Yes onClick={() => { setMoveAuth(true) }}>인증하기</Yes>
                                <No onClick={() => { setConfirm(false) }}>다음에</No></div>
                        </ConfirmBox>
                    </Fragment>}
                    <Navbar>
                        <Link to={{ pathname: '/' }}> <NavLi>서담서치</NavLi> </Link>


                        <Link to={{ pathname: '/Login' }}> <NavLi>로그인</NavLi></Link>
                        <Link to={{ pathname: '/signup' }}> <NavLi>회원가입</NavLi> </Link >


                    </Navbar>


                    <BodyContainer>
                        <LoginImg src={LOGO}></LoginImg>
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