import React, { Fragment, useEffect, useState } from 'react';
import styles from '../css/SignUp.module.css';
import { Link } from "react-router-dom";
import {
    DefaultInput, Navbar, NavLi, BodyContainer, LoginButton, LoginForm, LoginImg
} from '../assets/styles/element';

import LOGO from '../Simg.png';
export default function GetAuth() {
    const [Email, setEmail] = useState("");
    const [password1, setPassword1] = useState("")
    const [password2, setPassword2] = useState("");
    const [token, setToken] = useState('');
    const [auth, setAuth] = useState(false);

    useEffect(() => {
        chrome.storage.local.get(null, function (all) {
            setToken(JSON.stringify(all))
        })
        if (token.length > 5) {
            setAuth(true);
        }
    }, [token])



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
                <p>서담 인증 게시판에 아래 문장을 제목으로 글을 써주세요.</p>

                <p>발 달린 말이 천리를 간다.</p>
            </BodyContainer>
        </div>
    );
}