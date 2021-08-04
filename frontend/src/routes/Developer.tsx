import React, { Fragment, useEffect, useState, useRef } from 'react';
import { Redirect } from 'react-router';
import { Link } from "react-router-dom";
import {
    SearchInput, Navbar, NavLi, SearchButton
    , BodyContainer, HomeSpan, mainColor, Gray, SearchForm
} from '../assets/styles/element';

import LogoutBtn from '../components/LogoutBtn';

import LOGO from '../Simg.png';



export default function Developer() {


    const [searchWord, setSearchWord] = useState('');
    const [userStatus, setUserStatus] = useState('login');
    useEffect(() => {

    }, [])

    const LogOut = (event: any) => {
        event.preventDefault()
        chrome.storage.local.clear()
        window.location.replace('http://localhost:3000/#/')
    }

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
            {userStatus === 'logout' ? <Redirect to='/' /> : <Fragment />}
            <Navbar>
                <Link to={{ pathname: '/' }}> <NavLi>서담서치</NavLi> </Link>

                <Fragment>
                    <Link to={{ pathname: '/developer' }}> <NavLi>만든사람</NavLi></Link>
                    <LogoutBtn onClick={() => { setUserStatus('logout') }}></LogoutBtn>
                </Fragment>


            </Navbar>
            <BodyContainer>

            </BodyContainer>


        </div >
    );
}