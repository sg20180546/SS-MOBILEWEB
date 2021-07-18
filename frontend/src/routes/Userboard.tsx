import React, { Fragment, useEffect, useState, useRef } from 'react';
import styles from '../css/Home.module.css';
import { Link } from "react-router-dom";
import {
    SearchInput, Navbar, NavLi, Banner, SearchButton, HomeImg
    , BodyContainer, HomeSpan, mainColor, Gray, SearchForm
} from '../assets/styles/element';

import handleLogout from '../hook/Logout';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import LOGO from '../Simg.png';



export default function Home() {

    const [auth, setAuth] = useState(false);
    const [searchWord, setSearchWord] = useState('');
    const [tryLogin, setTryLogin] = useState(false);
    useEffect(() => {
        if (localStorage.getItem('token') !== null) {
            setAuth(true);
        }
    }, [])

    const [posts, setPosts] = useState([]);
    const getSsodamPosts = () => {
        if (localStorage.getItem('token') !== null) {
            // animation, transition
            return;
        } else {
            const Search = {
                keyword: searchWord,
                searchOption: '',
                token: localStorage.getItem('token')
            }
            fetch('').then()
            window.location.replace('http://localhost:3000/#/Search');
        }
        // return;
    }


    return (
        <div className='root'>

            <Navbar>
                <Link to={{ pathname: '/' }}> <NavLi>서담서치</NavLi> </Link>
                {auth ? (
                    <Fragment>
                        <Link to={{ pathname: '/Dashboard' }}> <NavLi>회원정보</NavLi></Link>
                        <button onClick={handleLogout}> <NavLi >로그아웃</NavLi></button>
                    </Fragment>
                ) :
                    <Fragment>
                        <Link to={{ pathname: '/Login' }}> <NavLi>로그인</NavLi></Link>
                        <Link to={{ pathname: '/signup' }}> <NavLi>회원가입</NavLi> </Link >
                    </Fragment>
                }
            </Navbar>
            <BodyContainer>

            </BodyContainer>


        </div >
    );
}