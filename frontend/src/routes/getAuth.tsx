import React, { Fragment, useEffect, useState } from 'react';
import styles from '../css/SignUp.module.css';
import { Link } from "react-router-dom";
// import useCopy from 'use-copy';]
import useCopy from 'use-copy';
import {
    Navbar, NavLi, BodyContainer, GrayBox, Img, mainColor, GrayBoxMsg,
    Container
} from '../assets/styles/element';

import LOGO from '../img/auth.png';
import { useChromeTab } from '../hook/useChromeTab';
export default function GetAuth() {
    const [authString, setAuthString] = useState<any | null>("");
    const [copied, copy, setCopied] = useCopy(authString);
    const [ssodamPage, setSsodamPage] = useState<string | any>('');

    const copyText = (event: any) => {
        event.preventDefault();
        copy();
        setTimeout(() => {
            setCopied(false);
        }, 3000);
    }


    useEffect(() => {
        if (sessionStorage.getItem('authString') || !localStorage.getItem('Access')) {
            setAuthString(sessionStorage.getItem('authString'));
            setSsodamPage('http://ssodam.com/content/' + sessionStorage.getItem('Page'));
        }

    }, [authString])
    const element = useChromeTab(ssodamPage);



    return (

        <div className='root'>

            <Navbar>
                <Link to={{ pathname: '/' }}> <NavLi>서담서치</NavLi> </Link>

                <Link to={{ pathname: '/login' }}> <NavLi>로그인</NavLi></Link>
                <Link to={{ pathname: '/signup' }}> <NavLi>회원가입</NavLi> </Link >

            </Navbar>


            <BodyContainer>
                <Container style={{ fontSize: '30px', height: '50px' }}>회원 인증하기</Container>
                <Img style={{ height: '120px' }} src={LOGO}></Img>
                <h5>서담서치 이용을 위해선, 회원 인증이 필요합니다 !</h5>
                <GrayBox onClick={copyText}><GrayBoxMsg >{authString}</GrayBoxMsg>
                </GrayBox >
                {copied ? <h1 style={{ color: mainColor }}>복사가 완료되었습니다!</h1>
                    : <h1 style={{ color: mainColor }}>아래 서담 게시물에 위 난수를 댓글로 달아주세요.</h1>}

                <GrayBox >
                    <GrayBoxMsg ref={element}>{ssodamPage}</GrayBoxMsg>
                </GrayBox>
                <h1 style={{ color: mainColor }}>클릭하면 페이지로 바로 이동합니다 !</h1>
            </BodyContainer>
        </div>
    );
}