import React, { FormEvent, Fragment, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { Redirect } from 'react-router'
import {
    DefaultInput, Navbar, NavLi, BodyContainer, LoginButton, LoginForm, LoginImg, ErrorMsg
} from '../assets/styles/element';

import LOGO from '../Simg.png';
export default function SignUp() {
    const [Email, setEmail] = useState("");
    const [password1, setPassword1] = useState("")
    const [password2, setPassword2] = useState("");
    const [moveAuth, setMoveAuth] = useState(false);
    const [state, setState] = useState('');
    const [authString, setAuthString] = useState(false)

    useEffect(() => {

        if (password1 === password2 && password2.length > 2) {
            setState('비밀번호가 일치합니다');
        } else {
            setState('');
        }
    }, [password2, password1, Email]);



    const handleSubmit = (event: any) => {
        if (password1 !== password2) {
            event.preventDefault();
            setState('비밀번호가 일치하지 않습니다')
        }
        else {
            const userInfo = {
                username: Email,
                password: password1
            }
            fetch(process.env.REACT_APP_API_URL + 'v1/user/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userInfo)
            }).then(res => {
                if (res.status === 200 || res.status === 409) {
                    return res.json();
                }

                else {
                    throw new Error;
                }
            })
                .then(resdata => {
                    if (resdata.status == "success") {
                        sessionStorage.setItem('authString', resdata.data.authString);
                        sessionStorage.setItem('Page', resdata.data.target);
                        setAuthString(true);
                    } else {
                        if (resdata.data.username) {
                            setState('이미 존재하는 아이디입니다');
                        } else {
                            throw new Error;
                        }
                    }
                }).catch(err => {
                    setState('서버가 터졌습니다 ㅠㅠ');
                }

                )


        }
    }
    return (

        <div className='root'>
            {authString ? <Redirect to="/getAuth" /> : <span />}
            <Navbar>
                <Link to={{ pathname: '/' }}> <NavLi>서담서치</NavLi> </Link>

                <Fragment>
                    <Link to={{ pathname: '/login' }}> <NavLi>로그인</NavLi></Link>
                    <Link to={{ pathname: '/signup' }}> <NavLi>회원가입</NavLi> </Link >
                </Fragment>

            </Navbar>


            <BodyContainer>
                <LoginImg src={LOGO}></LoginImg>
                <LoginForm onSubmit={(e: any) => { e.preventDefault(); }}>
                    <DefaultInput placeholder='Email' name='email' onChange={e => setEmail(e.target.value)} required ></DefaultInput>
                    <DefaultInput placeholder='비밀번호' name='password1' onChange={e => setPassword1(e.target.value)} type='password' required ></DefaultInput>
                    <DefaultInput placeholder='비밀번호 확인' onChange={e => setPassword2(e.target.value)} type='password' required></DefaultInput>
                    <LoginButton onClick={handleSubmit}>회원가입</LoginButton>
                    <ErrorMsg>{state}</ErrorMsg>
                </LoginForm>
            </BodyContainer>
        </div>
    );
}