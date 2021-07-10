import React, { Fragment, useEffect, useState } from 'react';
import styles from '../css/Login.module.css';
import { Link } from "react-router-dom";
// import handleLogout from './Logout';

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

            <div className={styles.Login__form}>
                {<form >
                    <label htmlFor="email"><b>이메일</b></label>
                    <input
                        name='email'
                        type='email'
                        value={email}
                        required
                        onChange={e => setEmail(e.target.value)}
                        placeholder='EMAIL' />
                    <label htmlFor="password"><b>비밀번호</b></label>
                    <input name='password'
                        type='password'
                        value={password}
                        required
                        onChange={e => setPassword(e.target.value)}
                        placeholder='PASSWORD'
                    />
                    <button>로그인</button>
                </form>}
                <div className={styles.Login__form__find}>
                    <Link to={{ pathname: '/' }}>
                        <div className={styles.Login__form__find__id}>아이디 찾기</div>
                    </Link>
                    <Link to={{ pathname: '/' }}>
                        <div className={styles.Login__form__find__pass}>비밀번호 찾기</div>
                    </Link>
                    <Link to={{ pathname: '/signup' }}>
                        <div className={styles.Login__form__find__admiss}>회원가입</div>
                    </Link>
                </div>

                {errors === true && <h4>로그인 할 수 없습니다.</h4>}
            </div>
        </div>
    );
}