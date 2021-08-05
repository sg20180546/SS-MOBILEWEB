import React, { Fragment, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import {
    SearchInput, Navbar, NavLi, SearchButton, Img
    , BodyContainer, HomeSpan, SearchForm, TableBodyContainer, Table, Gray
} from '../assets/styles/element';
import LogoutBtn from '../components/LogoutBtn';



import '../assets/styles/fontAwesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import LOGO from '../Simg.png';
import checkUserStatus from '../hook/userStatus';

export default function Home() {

    const [searchKeyWord, setSearchKeyWord] = useState<string>('');
    const [userStatus, setUserStatus] = useState('logout');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        checkUserStatus(setUserStatus);
    }, [userStatus])


    // 검색기능 - 추후 구현
    const getSsodamPosts = () => {
        if (userStatus === 'logout') {
            // 미로그인: higlighted
            return;
        } else {
            setLoading(true);
            const Search = {
                keyword: searchKeyWord,
                searchOption: '',
                token: localStorage.getItem('Accesstoken')
            }
            fetch('process.env.REACT_APP_API_URL').then()
        }
    }


    return (
        <div className='root'>

            <Navbar>
                <Link to={{ pathname: '/' }}> <NavLi>서담서치</NavLi> </Link>
                {userStatus === 'login' ? (
                    <Fragment>
                        <Link to={{ pathname: '/developer' }}> <NavLi>만든사람</NavLi></Link>
                        <LogoutBtn onClick={() => { setUserStatus('logout') }}></LogoutBtn>
                    </Fragment>
                ) :
                    <Fragment>
                        <Link to={{ pathname: '/login' }}> <NavLi>로그인</NavLi></Link>
                        <Link to={{ pathname: '/signup' }}> <NavLi>회원가입</NavLi> </Link >
                    </Fragment>
                }
            </Navbar>

            <BodyContainer>
                <Img style={{ height: '280px' }} src={LOGO} ></Img>


                <SearchForm>
                    <SearchInput placeholder='검색어를 입력하세요' onChange={(e) => setSearchKeyWord(e.target.value)}></SearchInput>
                    <SearchButton onClick={() => getSsodamPosts()}>
                        <FontAwesomeIcon style={{ color: Gray }} icon='search' size='xs' />
                    </SearchButton>

                </SearchForm>
                {userStatus === 'login' ? <HomeSpan>{localStorage.getItem("USERNAME")}님, 안녕하세요 !</HomeSpan> :
                    <HomeSpan color='#B7B8CE' >로그인 해주세요.</HomeSpan>}
            </BodyContainer>


        </div >
    );
}