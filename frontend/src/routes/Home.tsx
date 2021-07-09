import React, { Fragment, useEffect, useState } from 'react';
import styles from '../css/Home.module.css';
import { Link } from "react-router-dom";


export default function Home() {
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
                <h5></h5>
                <form>
                    <input className={styles.Search}></input>
                    <button>검색!</button>

                </form>

            </div>
            {auth ? (<Fragment><table>

            </table>
            </Fragment>) :
                (<Fragment>
                    <h5>서담서치는 서담 검색 익스텐션입니다.</h5>
                </Fragment>)
            }
        </div>
    );
}