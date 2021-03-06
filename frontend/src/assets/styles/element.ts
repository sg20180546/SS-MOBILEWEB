
import styled, { css } from "styled-components";

const mainColor = "#f84e75"
const Gray = "#B7B8CE"


// ----------------Input---------------------- 
const Input = styled.input`
    transition: border ease-in-out 0.5s;
    border: 3px solid rgba(0,0,0,0.5);
    :focus{
        border: 3px solid ${mainColor};
        outline: none;
        }
`;

const DefaultInput = styled(Input)`
    width: 163px;
    height: 30px;
    margin-bottom: 6px;
`;
const SearchInput = styled(Input)`
    position: relative;
    width: 180px;
    height: 40px;
`;



// ----------------NavElements---------------------- 
const Navbar = styled.nav`
    display: flex;
    position: relative;
    width: 350px;
    margin-top: 15px;
    padding-bottom: 12px;
    border-bottom: 1px dashed #B7B8CE;
    align-items: center;
    justify-content: space-around;
`;
const LoginNavBar = styled(Navbar)`
    border-top: 1px dashed #B7B8CE;
    border-bottom: none;
    padding-top: 10px;
    position: relative;
`;

const NavLi = styled.ol`
    font-size: 15px;
    color: #A1ABB6;
    padding-bottom: 8px;
    cursor:pointer;
    border-bottom: 2px solid white;
    :hover{
        color: ${mainColor};
        border-bottom: 2px solid ${mainColor};
    };
`;

const LoginNavLi = styled(NavLi) <{ remember: boolean }>`
    position:relative;
    left: -10px;
    margin: 10px 0px 0px 20px;
    font-size: 5px;
    ${props =>
        props.remember &&
        css`
        border-bottom: 2px solid ${mainColor}; 
        `}
`;


// ----------------Div---------------------- 
const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    position: relative;
`;

const BodyContainer = styled(Container)`
    width:97%;
`;



const ConfirmContainer = styled(Container)`
    position: absolute;
    opacity: 0.5; 
    z-index: 3;
    background-color: #a3a3a8;
    height: 445px;
    width: 360px;
`;
const ConfirmBox = styled(Container)`
    position:absolute;
    top: 170px;
    z-index: 5;
    opacity: 1;
    background-color: white;
    width:250px;
    height:150px;
    border: 2px solid ${mainColor};
    text-align:center;

`;
const ConfirmBoxSelect = styled(Container)`
    width:45px;
    height:25px;
    font-size:7px;
    line-height: 21px;
    cursor:pointer;
`;
const Yes = styled(ConfirmBoxSelect)`
    background-color:${mainColor};
    : active{
    background-color: #ba3b56;
    }
`;
const No = styled(ConfirmBoxSelect)`
    background-color:white;
    border : 2px solid ${mainColor};
`;




const GrayBox = styled(Container)`
    background-color: #d1d1d3;
    margin: 15px 0px;
    height: 40px;
    width: 90%;
    border-radius: 20px;
 `;



// --------------------------------



const Img = styled.img`
    position: relative;
`;

const BlurImg = styled(Img)`
    z-index: 10;
    transition: filter 0.3s ease-in-out, z-index 0.3s ease-in-out, opacity ease-in-out 0.3s;
    :hover{
        filter : blur(4px);
        z-index:0;
        opacity: 0.8;
    }
`;


// ----------------Form---------------------- 

const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
`;

const LoginForm = styled(Form)`
`;
const SearchForm = styled(Form)`
    position:absolute;
    top:333px;
    height:50px;
`;

// ----------------Button---------------------- 
const LoginButton = styled.button`
    margin-top: 10px;
    height: 30px;
    width: 163px;
    background-color: ${mainColor};
    : active{
    background-color: #ba3b56;
}
`;

const SearchButton = styled.button`
    position: relative;
    left: 75px;
    top: -27px;
    height: 43px;
    width: 20px;
`;


// ----------------Span---------------------- 
const HomeSpan = styled.span`
    font-size: 14px;
    color: ${Gray};
    position: absolute;
    top: 365px;
    text-align: center;
`;
const GrayBoxMsg = styled.span`
    font-size:12px;
    display:inline-block;
    position:relative;
    cursor:pointer;
    :hover{
        color:${mainColor};
    }
`;


const ErrorMsg = styled.span`
    display: inline-block;
    height: 10px;
    font-size:9px;
    position:relative;
    top:5px;
    text-align: center;
    color:${mainColor};
`;

// ----------------TableElements---------------------- 

const Table = styled.table`
    display:flex;
    flex-direction:column;
    align-items:center;
    position: relative;
    height:300px;
    width:100%;
    overflow-y: scroll;
`;

const TableHead = styled.thead`

    `;



export {
    SearchInput, DefaultInput, Navbar, NavLi, SearchButton, BodyContainer, LoginForm
    , LoginNavLi, LoginButton, LoginNavBar, mainColor, Gray,
    HomeSpan, Table, TableHead, SearchForm,
    ErrorMsg, GrayBox, GrayBoxMsg, ConfirmContainer, ConfirmBox, Yes, No,
    Container, Img, BlurImg

}