import React, { useEffect, useState } from 'react';

import { Link } from "react-router-dom";

// import SPosts from '../components/post';
// import BoardName from '../components/Boardname';

import {
    SearchInput, Navbar, NavLi, SearchButton, Gray,
    BodyContainer, TableBodyContainer, Table, SearchForm, SPLElement, SPLInput
} from '../assets/styles/element';
import LogoutBtn from '../components/LogoutBtn';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';





export default function Search() {

    const [auth, setAuth] = useState(false);
    const [searchWord, setSearchWord] = useState('');
    const [tryLogin, setTryLogin] = useState(false);
    const [token, setToken] = useState('');
    useEffect(() => {
        if (localStorage.getItem('token') !== null) {
            setAuth(true);
        }
    }, [])


    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
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
                <Link to={{ pathname: '/developer' }}> <NavLi>만든사람</NavLi></Link>
                <LogoutBtn onClick={() => { setToken('') }}></LogoutBtn>
            </Navbar>


            <BodyContainer>

                <Table>
                    <thead style={{ position: 'fixed', width: '360px' }}>
                        <tr style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'space-around', alignItems: "space-between" }}>
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
                <div style={{
                    display: 'flex', position: 'absolute', top: '360px', width: '170px', height: '15px'
                    , justifyContent: 'center'
                }}>
                    <SPLElement>&lt;&lt;</SPLElement>
                    <SPLElement style={{ width: '15px', backgroundColor: 'teal' }}>1</SPLElement>
                    <SPLElement >2</SPLElement>
                    <SPLElement >3</SPLElement>
                    <SPLElement >4</SPLElement>
                    <SPLElement >5</SPLElement>
                    <SPLElement >&gt;&gt;</SPLElement>
                    <SPLInput type="text" pattern="[0-9]+" ></SPLInput>
                    <SPLElement >GO</SPLElement>
                </div>

                <SearchForm>
                    <SearchInput onChange={(e) => setSearchWord(e.target.value)}></SearchInput>
                    <SearchButton onClick={() => getSsodamPosts()}>
                        <FontAwesomeIcon style={{ color: Gray }} icon='search' size='xs' />
                    </SearchButton>
                </SearchForm>
            </BodyContainer>

        </div >
    );
}