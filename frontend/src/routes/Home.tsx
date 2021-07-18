import React, { Fragment, useEffect, useState, useRef } from 'react';
import { Link } from "react-router-dom";
import {
    SearchInput, Navbar, NavLi, Banner, SearchButton, HomeImg
    , BodyContainer, HomeSpan, mainColor, Gray, SearchForm
} from '../assets/styles/element';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import LOGO from '../Simg.png';



export default function Home() {


    const onClick = (event: any) => {
        event.preventDefault()
        console.log('logout')
        chrome.storage.local.clear()
        window.location.replace('http://localhost:3000/#/')
    }



    const [auth, setAuth] = useState(false);
    const [searchWord, setSearchWord] = useState('');
    const [token, setToken] = useState('');


    useEffect(() => {
        chrome.storage.local.get(null, function (all) {
            setToken(JSON.stringify(all))
        })
        // 이 부분을 이렇게 처리해도 될까요?
        // auth는 로그인된 회원/비회원 화면을 구분하기 위한 bool값인데
        // 만약 token이 없는 비회원이 token을 길이 5이상의 ㅁㄴㅇㄻㄴㅇㄹ 등으로 set 했을때 마치 '회원이 로그인 된 화면을 보여줍니다'
        // 하지만 검색 request header에 jwt를 함께 보내기때문에
        // chrome.stroge.local.set 등으로 조작하여도 api에서 verify한후 unAuthroized response를 확인하면
        // 로그아웃 시킬 예정입니다.
        if (token.length > 5) {
            setAuth(true);
        }
    }, [token])


    // 검색기능 - 추후 구현
    const getSsodamPosts = () => {
        if (localStorage.getItem('token') !== null) {
            return;
        } else {
            const Search = {
                keyword: searchWord,
                searchOption: '',
                // token: localStorage.getItem('token')
            }
            fetch('').then()
            window.location.replace('http://localhost:3000/#/Search');
        }
    }


    return (
        <div className='root'>

            <Navbar>
                <Link to={{ pathname: '/' }}> <NavLi>서담서치</NavLi> </Link>
                {auth ? (
                    <Fragment>
                        <Link to={{ pathname: '/Dashboard' }}> <NavLi>회원정보</NavLi></Link>

                        <NavLi onClick={onClick} >로그아웃</NavLi>
                    </Fragment>
                ) :
                    <Fragment>
                        <Link to={{ pathname: '/Login' }}> <NavLi>로그인</NavLi></Link>
                        <Link to={{ pathname: '/signup' }}> <NavLi>회원가입</NavLi> </Link >
                    </Fragment>
                }
            </Navbar>
            <BodyContainer>
                <HomeImg src={LOGO} ></HomeImg>
                <SearchForm>
                    <SearchInput onChange={(e) => setSearchWord(e.target.value)}></SearchInput>
                    <SearchButton onClick={() => getSsodamPosts()}><FontAwesomeIcon icon="search" size="xs" /></SearchButton>
                    {auth ? <HomeSpan>검색어를 입력하세요</HomeSpan> :
                        <HomeSpan color='#B7B8CE' >서담서치 0.0.1v<br />
                            로그인 해주세요.</HomeSpan>}
                </SearchForm>
            </BodyContainer>


        </div >
    );
}