// library
import React, { Fragment, useEffect, useState } from 'react';
import { Link } from "react-router-dom";

// CSS
import styles from '../css/Login.module.css';

// element
import {
    DefaultInput, Navbar, NavLi, LoginBox, LoginNavLi, BodyContainer, LoginForm
} from '../assets/styles/element';


export default function Login() {
    const [auth, setAuth] = useState(false);
    useEffect(() => {
        if (localStorage.getItem('token') !== null) {
            setAuth(false);
        }
    }, [])
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState(false);
    const [loading, setLoading] = useState(true);

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

                <LoginForm >
                    <label htmlFor="email"><b>이메일</b></label>

                    <DefaultInput name='email'
                        type='email'
                        value={email}
                        required
                        placeholder='Email을 입력하세요'
                        onChange={e => setEmail(e.target.value)} />
                    <label htmlFor="password"><b>비밀번호</b></label>
                    <DefaultInput name='password'
                        type='password'
                        value={password}
                        required
                        onChange={e => setPassword(e.target.value)}
                        placeholder='PASSWORD' />
                    <button >로그인</button>
                </LoginForm>
                <div className={styles.Login__form__find}>
                    <Link to={{ pathname: '/' }}>
                        <LoginNavLi >아이디 찾기</LoginNavLi>
                    </Link>
                    <Link to={{ pathname: '/' }}>
                        <LoginNavLi >비밀번호 찾기</LoginNavLi>
                    </Link>
                    <Link to={{ pathname: '/signup' }}>
                        <LoginNavLi >회원가입</LoginNavLi>
                    </Link>
                </div>

                {errors === true && <h4>로그인 할 수 없습니다.</h4>}
            </BodyContainer>
        </div>
    );
}