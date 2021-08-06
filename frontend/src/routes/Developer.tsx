import React, { Fragment, useEffect, useState, useRef } from 'react';
import { Redirect } from 'react-router';
import { Link } from "react-router-dom";
import {
    Navbar, NavLi, BodyContainer, BlurImg, GrayBoxMsg, Gray
} from '../assets/styles/element';

import LogoutBtn from '../components/LogoutBtn';
import { useChromeTab } from '../hook/useChromeTab';
import checkUserStatus from '../hook/userStatus';
import SGCC from '../img/SGCC.png';



export default function Developer() {

    const [userStatus, setUserStatus] = useState('login');
    useEffect(() => {
        checkUserStatus(setUserStatus);
    }, [userStatus])

    const RoenissGithub = useChromeTab('https://github.com/roeniss')



    return (
        <div className='root'>
            {userStatus === 'logout' ? <Redirect to='/' /> : <Fragment />}
            <Navbar>
                <Link to={{ pathname: '/' }}> <NavLi>서담서치</NavLi> </Link>

                <Fragment>
                    <Link to={{ pathname: '/developer' }}> <NavLi>만든사람</NavLi></Link>
                    <LogoutBtn onClick={() => { setUserStatus('logout') }}></LogoutBtn>
                </Fragment>


            </Navbar>
            <BodyContainer>
                <div style={{ position: 'relative', height: '150px', width: '150px', top: '20px', zIndex: 0 }}>
                    <h5 style={{ position: 'absolute', fontSize: '1px', color: '#7E81B2', zIndex: 3, top: '5px', left: '3px' }}>서담서치 version 1.0.0 at 2021.08.15</h5>
                    <BlurImg src={SGCC} style={{ height: '150px', width: '150px', borderRadius: '10px' }} />
                </div>
                <div style={{ position: 'relative', top: '40px', height: '150px', width: '180px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <GrayBoxMsg ref={RoenissGithub}>SGCC ProjectManager Roeniss</GrayBoxMsg>
                    <GrayBoxMsg>SGCC Frontend sg201805</GrayBoxMsg>
                    <GrayBoxMsg>SGCC Backend Kshired</GrayBoxMsg>
                    <GrayBoxMsg>SGCC DataBase psst54</GrayBoxMsg>
                    <GrayBoxMsg>SGCC DataBase lee0594</GrayBoxMsg>

                </div>
            </BodyContainer>


        </div >
    );
}