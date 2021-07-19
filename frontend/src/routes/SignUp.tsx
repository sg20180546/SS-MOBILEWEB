import React, { FormEvent, Fragment, useEffect, useState } from 'react';
<<<<<<< HEAD
=======
import styles from '../css/SignUp.module.css';
>>>>>>> 9d02a04ffede1661c146ab4928907532f0b5beb2
import { Link } from "react-router-dom";
import {
    DefaultInput, Navbar, NavLi, BodyContainer, LoginButton, LoginForm, LoginImg, ErrorMsg
} from '../assets/styles/element';

import LOGO from '../Simg.png';
export default function SignUp() {
    const [Email, setEmail] = useState("");
    const [password1, setPassword1] = useState("")
    const [password2, setPassword2] = useState("");
    const [auth, setAuth] = useState(false);
    const [state, setState] = useState('');
<<<<<<< HEAD
    const [authString, setAuthString] = useState('')

    useEffect(() => {
        if (auth) {
            window.location.replace('http://localhost:3000/?#/getAuth');
=======
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        if (password1 !== password2) {
            event.preventDefault();
            setState('비밀번호가 일치하지 않습니다')
            // return;
        }
        else {
            const userInfo = {
                username: Email,
                password: password1
            }
            fetch('https://kshired.com/v1/user/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userInfo)
            }).then(res => res.json())
                .then(resdata => {
                    console.log(resdata);
                    if (resdata.status == "succsess") {
                        alert("회원가입이 완료되었습니다.")
                        window.location.replace('http://localhost:3000/?#/SignUp2')
                    } else {
                        if (resdata.data.username) {
                            console.log('이미 존재하는 아이디입니다')
                            setState('이미 존재하는 아이디입니다')
                        } else {
                        }
                    }
                })


        }
    }
    useEffect(() => {
        if (localStorage.getItem('token') !== null) {
            window.location.replace('http://localhost:3000/#/')
>>>>>>> 9d02a04ffede1661c146ab4928907532f0b5beb2
        }
    }, [auth]);



    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        if (password1 !== password2) {
            event.preventDefault();
            setState('비밀번호가 일치하지 않습니다')
            // return;
        }
        else {
            const userInfo = {
                username: Email,
                password: password1
            }
            fetch('https://kshired.com/v1/user/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userInfo)
            }).then(res => res.json())
                .then(resdata => {
                    console.log(resdata);
                    if (resdata.status == "succsess") {
                        alert("준회원 회원가입이 완료되었습니다.")
                        setAuthString(resdata.data.authString);
                        setAuth(true);
                    } else {
                        if (resdata.data.username) {
                            console.log('이미 존재하는 아이디입니다')
                            setState('이미 존재하는 아이디입니다')
                        } else {
                        }
                    }
                })


        }
    }
    return (

        <div className='root'>

            <Navbar>
                <Link to={{ pathname: '/' }}> <NavLi>서담서치</NavLi> </Link>

                <Fragment>
                    <Link to={{ pathname: '/Login' }}> <NavLi>로그인</NavLi></Link>
                    <Link to={{ pathname: '/signup' }}> <NavLi>회원가입</NavLi> </Link >
                </Fragment>

            </Navbar>


            <BodyContainer>
                <LoginImg src={LOGO}></LoginImg>
                <LoginForm onSubmit={handleSubmit}>
                    <DefaultInput placeholder='Email' name='email' onChange={e => setEmail(e.target.value)} required ></DefaultInput>
                    <DefaultInput placeholder='비밀번호' name='password1' onChange={e => setPassword1(e.target.value)} type='password' required ></DefaultInput>
                    <DefaultInput placeholder='비밀번호 확인' onChange={e => setPassword2(e.target.value)} type='password' required></DefaultInput>
                    <LoginButton>회원가입</LoginButton>
                    <ErrorMsg>{state}</ErrorMsg>
                </LoginForm>
            </BodyContainer>
        </div>
    );
}