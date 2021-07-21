import React, { Fragment, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import {
    SearchInput, Navbar, NavLi, SearchButton, HomeImg
    , BodyContainer, HomeSpan, SearchForm
} from '../assets/styles/element';


import LOGO from '../Simg.png';



export default function Home() {


    const onClick = (event: any) => {
        event.preventDefault()
        localStorage.clear();
        // Chrome Storage api
        // chrome stoarge log out
        // chrome.storage.local.clear()
        setToken('');
    }



    const [auth, setAuth] = useState(false);
    const [searchWord, setSearchWord] = useState('');
    const [token, setToken] = useState('');


    useEffect(() => {
        setToken(localStorage.getItem('Refresh') + '/' + localStorage.getItem('Access'));
        console.log(localStorage.getItem('Refresh') + '/' + localStorage.getItem('Access'));
        // Chrome Storage API
        // chrome.storage.local.get(null, function (all) {
        //     setToken(JSON.stringify(all))
        // })
        if (token.length > 30) {
            setAuth(true);
        } else {
            setAuth(false);
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
                    <SearchButton onClick={() => getSsodamPosts()}>ㅇ</SearchButton>
                    {auth ? <HomeSpan>검색어를 입력하세요</HomeSpan> :
                        <HomeSpan color='#B7B8CE' >서담서치 0.0.1v<br />
                            로그인 해주세요.</HomeSpan>}
                </SearchForm>
            </BodyContainer>


        </div >
    );
}