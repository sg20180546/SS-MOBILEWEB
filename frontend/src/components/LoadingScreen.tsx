import styled, { keyframes } from "styled-components";
import { Container, mainColor } from "../assets/styles/element";

export default function LoadingScreen() {




    return <LoadingPage>
        <Square>
            <Spin ></Spin>
        </Square>
        <span style={{ position: 'relative', top: '30px' }}>검색 중입니다. 1분정도 소요될수 있어요..</span>
    </LoadingPage>;
}



const LoadingPage = styled(Container)`
    position: absolute;
    top: -1px;
    display:flex;
    justify-content:center;
    align-items:center;
    opacity: 1;
    z-index: 10;
    background-color : white;
    height: 451px;
    width: 360px;
    border: 5px solid #f84e75;
`;

const Square = styled.div`
    position: relative;
`;


const spinAnimation = keyframes`
    from   {  
        -webkit-transform: rotate(0deg); 
    }
    to   { 
         -webkit-transform: rotate(360deg);
    }
`;

const Spin = styled.div`
    height: 70px;
    width: 70px;
    border-radius: 50%;
    border:dashed 5px ${mainColor};
    -webkit-animation-name: ${spinAnimation};
    -webkit-animation-duration: 1.5s;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-timing-function: linear;
`;
