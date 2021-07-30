import React, { Fragment, useEffect, useState, useRef } from 'react';

import { Link } from "react-router-dom";
import {
    SearchInput, Navbar, NavLi, SearchButton
    , BodyContainer, HomeSpan, mainColor, Gray, SearchForm
} from '../assets/styles/element';


import LOGO from '../Simg.png';



export default function Developer() {

    const [auth, setAuth] = useState(false);
    const [searchWord, setSearchWord] = useState('');
    const [tryLogin, setTryLogin] = useState(false);
    useEffect(() => {
        if (localStorage.getItem('token') !== null) {
            setAuth(true);
        }
    }, [])

    const LogOut = (event: any) => {
        event.preventDefault()
        chrome.storage.local.clear()
        window.location.replace('http://localhost:3000/#/')
    }

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

                <Fragment>
                    <Link to={{ pathname: '/developer' }}> <NavLi>만든사람</NavLi></Link>
                    <NavLi onClick={LogOut} >로그아웃</NavLi>
                </Fragment>


            </Navbar>
            <BodyContainer>

            </BodyContainer>


        </div >
    );
}