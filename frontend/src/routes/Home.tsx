import React, { Fragment, useEffect, useState } from 'react';
import styles from '../css/Home.module.css';
import { Link } from "react-router-dom";
import SsodamPost from '../components/post';

import {
    SearchInput, Navbar, NavLi, Banner, SearchButton, HomeImg
    , BodyContainer
} from '../assets/styles/element';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import LOGO from '../Simg.png';

export default function Home() {

    const [auth, setAuth] = useState(false);
    useEffect(() => {
        if (localStorage.getItem('token') !== null) {
            setAuth(false);
        }
    }, [])

    const [posts, setPosts] = useState([]);
    const getSsodamPosts = () => {
        return;
    }
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
                <BodyContainer>
                    <HomeImg src={LOGO} ></HomeImg>
                </BodyContainer>
                <Banner>
                    <h3>서담서치</h3>

                    <SearchInput /><SearchButton onClick={() => setAuth(true)}><FontAwesomeIcon icon="search" size="xs" /></SearchButton>

                </Banner>
            </div>
            {/* <div className={styles.tableOrInstruct}>
                {auth ? (<Fragment>
                    <table className="flex w-full">
                        <thead className='fixed'>
                            <tr>
                                <th className={styles.th_idx} >번호</th>
                                <th className={styles.th_title}>제목</th>
                                <th className={styles.th_up}>추천</th>
                                <th className={styles.th_date}>날짜</th>
                                <th className={styles.th_lookup}>조회</th>
                            </tr>

                        </thead>
                        <tbody className="flex">
                            {posts.map(() => { <SsodamPost id={0} title={0} Up={0} postDate={0} url={0} /> })}
                        </tbody>
                    </table>
                </Fragment>) :
                    (<Fragment>
                        <div className={styles.noAuth}><h5>서담서치는 서담 검색 익스텐션입니다.<br />
                            로그인 해주세요.</h5></div>
                    </Fragment>)
                }
            </div> */}
        </div >
    );
}