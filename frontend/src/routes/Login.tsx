// library
import React, { Fragment, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
// import ch

// element
import {
    DefaultInput, Navbar, NavLi, LoginBox, LoginNavLi, BodyContainer, LoginForm
    , LoginButton, LoginNavBar, LoginImg, LoginNavLiClicked, mainColor, ErrorMsg
} from '../assets/styles/element';
// img
import LOGO from '../Simg.png';


export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState(true);
    const [loading, setLoading] = useState(true);
    const [autoLoginOpt, setAutoLoginOpt] = useState(true);
    const [auth, setAuth] = useState(false);
    const [state, setState] = useState("");
    const [token, setToken] = useState('');
    useEffect(() => {


        if (token.length > 5) {
            window.location.replace('http://localhost:3000/#/');
        } else {
            setLoading(false);
        }
    }, [token])



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
                    console.log('인증된 회원 로그인');
                    chrome.storage.local.set({ Refresh: resdata.data.accsessToken, Access: resdata.data.refreshToken }, () => {
                    });
                    chrome.storage.local.get(null, function (all) {
                        setToken(JSON.stringify(all))
                    })

                }
                else if (resdata.status === "fail") {
                    if (resdata.data.username) {
                        console.log("존재하지 않는 아이디입니다");
                        setState("존재하지 않는 아이디입니다");

                    }
                    else if (resdata.data.authenticated) {
                        console.log("인증되지 않았습니다");
                        setState("인증되지 않았습니다");

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
        <div className='root'>

            <Navbar>
                <Link to={{ pathname: '/' }}> <NavLi>서담서치</NavLi> </Link>
                {auth ? (
                    <Fragment>
                        <Link to={{ pathname: '/Dashboard' }}> <NavLi>준비중</NavLi></Link>
                        <a><NavLi>로그아웃</NavLi></a>
                    </Fragment>
                ) :
                    <Fragment>
                        <Link to={{ pathname: '/Login' }}> <NavLi>로그인</NavLi></Link>
                        <Link to={{ pathname: '/signup' }}> <NavLi>회원가입</NavLi> </Link >
                    </Fragment>
                }
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
        </div >
    );
}