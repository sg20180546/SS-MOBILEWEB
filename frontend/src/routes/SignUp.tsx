import React, { Fragment, useEffect, useState } from 'react';
import styles from '../css/SignUp.module.css';
import { Link } from "react-router-dom";
// import handleLogout from './Logout';

export default function SignUp() {
    const [auth, setAuth] = useState(false);
    useEffect(() => {
        if (localStorage.getItem('token') !== null) {
            setAuth(false);
        }
    }, [])

    return (
        <div className={styles.root}>
            <div className={styles.statusbar}>
                <Link to={{ pathname: '/' }}> <h5>서담서치</h5> </Link>
                {auth ? (
                    <Fragment>
                        <Link to={{ pathname: '/Dashboard' }}> <div className={styles.status__bar__login__id}>준비중</div></Link>
                        <a><div className={styles.status__bar__login__new}>로그아웃</div></a>
                    </Fragment>
                ) :
                    <Fragment>
                        <Link to={{ pathname: '/Login' }}> <div className={styles.status__bar__login__id}>로그인</div></Link>
                        <Link to={{ pathname: '/signup' }}> <div className={styles.status__bar__login__new}>회원가입</div> </Link >
                    </Fragment>
                }
            </div >
            <div className={styles.title}>
                <h3>서담서치</h3>

            </div>

            <form className={styles.SignUpform}>
                <label htmlFor="email">Email</label>
                <input name='email' className={styles.SignUpform_email}></input>
                <label htmlFor="password1">비밀번호</label>
                <input name='password1' className={styles.SignUpform_password1}></input>
                <label htmlFor="password2">비밀번호확인</label>
                <input className={styles.SignUpform_password2}></input>
                <button>회원가입</button>
            </form>
        </div>
    );
}