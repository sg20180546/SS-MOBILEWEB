import React, { Fragment, useEffect, useState } from 'react';
import styles from '../css/SignUp.module.css';
import { Link } from "react-router-dom";
import {
    DefaultInput, Navbar, NavLi, BodyContainer
} from '../assets/styles/element';

export default function SignUp() {
    const [auth, setAuth] = useState(false);
    useEffect(() => {
        if (localStorage.getItem('token') !== null) {
            setAuth(false);
        }
    }, [])

    return (

        <div className='root'>
            <div style={{ position: "fixed", width: '270px' }}>
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

            </div>

            <BodyContainer>
                <form className={styles.SignUpform}>
                    <label htmlFor="email">Email</label>
                    <DefaultInput name='email' ></DefaultInput>
                    <label htmlFor="password1">비밀번호</label>
                    <DefaultInput name='password1' ></DefaultInput>
                    <label htmlFor="password2">비밀번호확인</label>
                    <DefaultInput ></DefaultInput>
                    <button>회원가입</button>
                </form>
            </BodyContainer>
        </div>
    );
}