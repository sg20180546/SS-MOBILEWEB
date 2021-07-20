import React, { Fragment, useEffect, useState } from 'react';
import styles from '../css/SignUp.module.css';
import { Link } from "react-router-dom";
// import useCopy from 'use-copy';]
import useCopy from 'use-copy';
import {
    Navbar, NavLi, BodyContainer, GrayBox, Banner, SmallImg, mainColor, GrayBoxMsg
} from '../assets/styles/element';

import LOGO from '../auth.png';

export default function GetAuth() {
    const [copied, copy, setCopied] = useCopy("RWQEqwerwqe");
    const copyText = (event: any) => {
        event.preventDefault();
        copy();
        setTimeout(() => {
            setCopied(false);
        }, 3000);
    }
    const [token, setToken] = useState<any | null>("");
    const [authString, setAuthString] = useState<any | null>("");
    useEffect(() => {
        if (localStorage.getItem('authString') || !localStorage.getItem('Access')) {
            // setAuthString(localStorage.getItem('authString'));
            setAuthString('wqr9tew8qr9et89qw8t')
        } else {
            alert('잘못된 접근입니다!');
            window.location.replace('http://localhost:3000/?#/');
        }

        // Chrome Storage api
        // chrome.storage.local.get(authString, function (auth) {
        //     setAuthString(auth);
        // })
        // if (!authString) {
        //     alert('잘못된 접근입니다!');
        //     window.location.replace('http://localhost:3000/?#/');
        // }
    }, [authString])
    const useChromeTab = () => {

    }


    return (

        <div className='root'>

            <Navbar>
                <Link to={{ pathname: '/' }}> <NavLi>서담서치</NavLi> </Link>

                <Link to={{ pathname: '/Login' }}> <NavLi>로그인</NavLi></Link>
                <Link to={{ pathname: '/signup' }}> <NavLi>회원가입</NavLi> </Link >

            </Navbar>


            <BodyContainer>
                <Banner>회원 인증하기</Banner>
                <SmallImg src={LOGO}></SmallImg>
                <h5>서담서치 이용을 위해선, 회원 인증이 필요합니다 !</h5>
                <GrayBox ><GrayBoxMsg >{authString}</GrayBoxMsg>
                </GrayBox >
                {/* {copied ? <h1 style={{ color: mainColor }}>복사가 완료되었습니다!</h1>
                    : <h1 style={{ color: mainColor }}>서담 인증게시판에 위 난수를 댓글로 달아주세요.</h1>} */}

                <GrayBox >
                    <GrayBoxMsg onClick={useChromeTab}>http://ssodam.com/</GrayBoxMsg>
                </GrayBox>
            </BodyContainer>
        </div>
    );
}