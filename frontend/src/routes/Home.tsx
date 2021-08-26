import React, { Fragment, useEffect, useState } from 'react';
import $ from 'jquery';
import { Link } from "react-router-dom";
import {
    SearchInput, Navbar, NavLi, SearchButton, Img
    , BodyContainer, HomeSpan, SearchForm, Table, Gray,
    ConfirmContainer, ConfirmBox, Yes, No, mainColor
} from '../assets/styles/element';
// components
import LogoutBtn from '../components/LogoutBtn';
import SsodamPosts from '../components/post';
import Pagenation from '../components/Pagenation';
import LoadingScreen from '../components/LoadingScreen';
import FrequentKeyWord from '../components/frequentKeyword';
import '../assets/styles/fontAwesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// img
import LOGO from '../img/Simg.png';
// hook
import checkUserStatus from '../hook/userStatus';
import { useHighLight } from '../hook/useHighLight';
import { getPost } from '../hook/getPost';
import { configSearchOption } from '../hook/configSearchOpt';
// redux
import { connect } from 'react-redux';
import { actionCreators } from '../redux/store';
import { saveFrequentKeyWord } from '../components/frequentKeyword';
import { getPrevPage } from '../hook/ifYouSearched';
function Home({ state, initSearchOption, setLoadingState, ...rest }: any) {

    const [USERNAME, getUSERNAME] = useState('unknownUSER');
    const [F5, setF5] = useState(false);
    const [searchOptionModal, setSearchOptionModal] = useState(false);
    const { userstate, postData, searchOption, isLoading } = state;

    useEffect(() => {
        getPrevPage(setF5, userstate);
        checkUserStatus(getUSERNAME);
        setLoadingState('complete');
    }, [userstate])

    const highlightSpan = useHighLight('searchButton', 'click');
    const option1 = () => {
        switch (searchOption.type) {
            case 'title':
                return '제목';
            case 'content':
                return '내용';
            case 'multi':
                return '제목+내용';
            default:
                return '??';
        };
    }


    return (
        <div className='root'>
            {isLoading && <LoadingScreen />}
            {searchOptionModal && <Fragment><ConfirmContainer></ConfirmContainer>
                <ConfirmBox>
                    <div>
                        제목<input type='radio' name="type" value='title' defaultChecked={searchOption.type === 'title'} />
                        내용<input type='radio' name="type" value="content" defaultChecked={searchOption.type === 'content'} />
                        제목+내용<input type='radio' name="type" value='multi' defaultChecked={searchOption.type === 'multi'} />
                    </div>
                    <div>
                        10개씩<input style={{ color: `${mainColor}` }} type='radio' name='size' value='10' defaultChecked={searchOption.size === '10'} />
                        30개씩<input type='radio' name='size' value='30' defaultChecked={searchOption.size === '30'} />
                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between', position: 'relative',
                        top: '10px', width: '120px'
                    }}>
                        <Yes onClick={async () => {
                            await configSearchOption();
                            getPost();
                            setSearchOptionModal(!searchOptionModal);
                        }}>적용</Yes>
                        <No onClick={() => setSearchOptionModal(!searchOptionModal)}>취소</No>
                    </div>
                </ConfirmBox>
            </Fragment>}
            <Navbar>
                <Link to='/' replace > <NavLi onClick={() => {
                    setF5(false)
                }}>서담서치</NavLi> </Link>
                {userstate === 'login' ? (
                    <Fragment>
                        <Link to={{ pathname: '/developer' }}> <NavLi>만든사람</NavLi></Link>
                        <LogoutBtn></LogoutBtn>
                    </Fragment>
                ) :
                    <Fragment>
                        <Link to={{ pathname: '/login' }}> <NavLi>로그인</NavLi></Link>
                        <Link to={{ pathname: '/signup' }}> <NavLi>회원가입</NavLi> </Link >
                        {/* <a href='https://naver.com' target='_blank'>되냐</a> */}
                    </Fragment>
                }
            </Navbar>

            <BodyContainer>
                {F5 && userstate === 'login' ?
                    <Fragment>
                        <Table id='table'>

                            <thead style={{ width: '100%', position: 'relative', margin: '5px 0px' }}>
                                <tr style={{ position: 'relative', width: '100%', display: 'flex', alignItems: 'center' }}>
                                    <th style={{ position: 'relative', width: '22%', fontSize: '14px' }}>글 번호</th>
                                    <th style={{ position: 'relative', width: '40%', textAlign: 'left', fontSize: '14px' }}>제목</th>
                                    <th style={{ fontSize: '5px', width: '5%' }} >
                                        <button
                                            onClick={() => setSearchOptionModal(!searchOptionModal)}>
                                            <FontAwesomeIcon style={{ color: Gray }} icon='cog' size='2x' />
                                        </button>
                                    </th>
                                    <th style={{ fontSize: '5px', width: '15%' }}>{option1()}</th>
                                    <th style={{ fontSize: '5px' }}> {searchOption.size}개씩</th>
                                </tr>
                            </thead>
                            <tbody style={{ width: '100%' }}>

                                {typeof postData === 'string' ? <tr style={{ position: 'relative', top: '100px', left: '100px' }}>{postData}</tr> :
                                    postData.posts?.map((post: any) => {
                                        if (post.id) return <SsodamPosts key={post.id} id={post.id} title={post.title} />
                                    })}
                            </tbody>
                        </Table>

                        <Pagenation setF5={setF5} ></Pagenation>

                    </Fragment> :
                    <Fragment>
                        {userstate === 'login' && <FrequentKeyWord setF5={setF5} />}
                        <Img style={{ height: '240px', top: '40px', zIndex: 1 }} src={LOGO} ></Img>
                    </Fragment>}


                <SearchForm onSubmit={(e) => { e.preventDefault() }}>
                    <SearchInput placeholder='검색어를 입력하세요' name="keyWord"></SearchInput>

                    <SearchButton id="searchButton" name='keyWord' onClick={async (e) => {
                        e.preventDefault();
                        const keyWord = $('input[name="keyWord"]').val();
                        if (!keyWord) {
                            return;
                        }
                        await initSearchOption(searchOption.type, searchOption.size, 1, keyWord)
                        setF5(true);
                        await saveFrequentKeyWord(`${keyWord}`);
                        await getPost();

                    }}>
                        <FontAwesomeIcon style={{ color: Gray }} icon='search' size='xs' />
                    </SearchButton>
                </SearchForm>
                {userstate === 'login' ? <HomeSpan>{USERNAME}님, 안녕하세요 !</HomeSpan> :
                    <HomeSpan color='#B7B8CE' ref={highlightSpan} >로그인 해주세요.</HomeSpan>}
            </BodyContainer>


        </div >
    );
}

function mapStateToProps(state: any, ownProps: any) {
    return { state };
}

function mapDispatchToProps(dispatch: any, ownProps: any) {
    return {
        initSearchOption: (type: any, size: any, page: any, keyword: any) => dispatch(actionCreators.configSearchOption(type, size, page, keyword)),
        setLoadingState: (state: string) => dispatch(actionCreators.setLoadingState(state))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);