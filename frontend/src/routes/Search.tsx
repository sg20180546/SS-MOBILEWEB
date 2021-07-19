import React, { Fragment, useEffect, useState, useRef } from 'react';

import { Link } from "react-router-dom";

import SPosts from '../components/post';
import BoardName from '../components/Boardname';

<<<<<<< HEAD
=======
import CSS from 'csstype';
>>>>>>> 9d02a04ffede1661c146ab4928907532f0b5beb2
import {
    SearchInput, Navbar, NavLi, Banner, SearchButton,
    BodyContainer, HomeSpan, mainColor, Gray, TableBodyContainer, Table, SearchForm
} from '../assets/styles/element';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




export default function Search() {

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
        if (auth === false) {

            return;
        } else {
            const Search = {
                keyword: searchWord,
                searchOption: ''
            }
            fetch('').then()
        }
        // return;
    }


    return (
        <div className='root'>

            <Navbar>
                <Link to={{ pathname: '/' }}> <NavLi>서담서치</NavLi> </Link>
                <Link to={{ pathname: '/Dashboard' }}> <NavLi>회원정보</NavLi></Link>
                <a><NavLi>로그아웃</NavLi></a>
            </Navbar>


            <BodyContainer>

                {/* <div style={{ position: 'fixed' }} ><HomeSpan>게시판</HomeSpan></div> */}
                {/* <BoardName names={['전체게시판', '익명게시판']}></BoardName> */}
                <Table>
                    <thead style={{ position: 'fixed' }}>
                        <tr>
                            <th>게시판</th>
                            <th>제목</th>
                            <th>추천</th>
                            <th>날짜</th>
                        </tr>
                    </thead>
                    <TableBodyContainer>
                        <tbody style={{ width: '100%' }}>
                            <tr>
                                <td>점심 추천좀 ㅊㅊ<div><p>을밀대 지금 줄 김?</p></div></td>
                                <td>45</td>
                                <td>21/6</td>
                            </tr>
                            <tr>
                                <td>점심 추천좀 ㅊㅊ<div><p>을밀대 지금 줄 김?</p></div></td>
                                <td>45</td>
                                <td>21/6</td>
                            </tr>
                            <tr>
                                <td>점심 추천좀 ㅊㅊ<div><p>을밀대 지금 줄 김?</p></div></td>
                                <td>45</td>
                                <td>21/6</td>
                            </tr>
                            <tr>
                                <td>점심 추천좀 ㅊㅊ<div><p>을밀대 지금 줄 김?</p></div></td>
                                <td>45</td>
                                <td>21/6</td>
                            </tr>
                            <tr>
                                <td>점심 추천좀 ㅊㅊ<div><p>을밀대 지금 줄 김?</p></div></td>
                                <td>45</td>
                                <td>21/6</td>
                            </tr>
                            <tr>
                                <td>점심 추천좀 ㅊㅊ<div><p>을밀대 지금 줄 김?</p></div></td>
                                <td>45</td>
                                <td>21/6</td>
                            </tr><tr>
                                <td>점심 추천좀 ㅊㅊ<div><p>을밀대 지금 줄 김?</p></div></td>
                                <td>45</td>
                                <td>21/6</td>
                            </tr>
                            <tr>
                                <td>점심 추천좀 ㅊㅊ<div><p>을밀대 지금 줄 김?</p></div></td>
                                <td>45</td>
                                <td>21/6</td>
                            </tr>
                            <tr>
                                <td>점심 추천좀 ㅊㅊ<div><p>을밀대 지금 줄 김?</p></div></td>
                                <td>45</td>
                                <td>21/6</td>
                            </tr>
                            <tr>
                                <td>점심 추천좀 ㅊㅊ<div><p>을밀대 지금 줄 김?</p></div></td>
                                <td>45</td>
                                <td>21/6</td>
                            </tr>
                            <tr>
                                <td>점심 추천좀 ㅊㅊ<div><p>을밀대 지금 줄 김?</p></div></td>
                                <td>45</td>
                                <td>21/6</td>
                            </tr>
                            <tr>
                                <td>점심 추천좀 ㅊㅊ<div><p>을밀대 지금 줄 김?</p></div></td>
                                <td>45</td>
                                <td>21/6</td>
                            </tr>
                            <tr>
                                <td>점심 추천좀 ㅊㅊ<div><p>을밀대 지금 줄 김?</p></div></td>
                                <td>45</td>
                                <td>21/6</td>
                            </tr>
                            <tr>
                                <td>점심 추천좀 ㅊㅊ<div><p>을밀대 지금 줄 김?</p></div></td>
                                <td>45</td>
                                <td>21/6</td>
                            </tr>
                        </tbody>
                    </TableBodyContainer>
                </Table>


                <SearchForm>
                    <SearchInput onChange={(e) => setSearchWord(e.target.value)}></SearchInput>
                    <SearchButton onClick={() => getSsodamPosts()}><FontAwesomeIcon icon="search" size="xs" /></SearchButton>
                </SearchForm>
            </BodyContainer>

        </div >
    );
}