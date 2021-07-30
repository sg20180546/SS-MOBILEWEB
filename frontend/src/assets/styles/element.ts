
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

const SPLInput = styled.input`
    width: 25px;
    height: 15px;
    border: 1px solid ${Gray};
    font-size:5px;
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

const LoginNavLi = styled(NavLi)`
    position:relative;
    left: -10px;
    margin: 10px 0px 0px 20px;
    font-size: 5px;
`;
const LoginNavLiClicked = styled(LoginNavLi)`
    border-bottom: 2px solid ${mainColor}; 
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
    height:100px;
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


const TableBodyContainer = styled(Container)`
    position: relative;
    top:13px;
    height:280px;
    overflow-y: scroll;
    width:100%;
`;

const GrayBox = styled(Container)`
    background-color: #d1d1d3;
    margin: 15px 0px;
    height: 40px;
    width: 90%;
    border-radius: 20px;
 `;
const SPLElement = styled(Container)`
    width: 15px;
    height: 15px;
    border: 1px solid ${Gray};
    line-height: 15px;
    font-size:5px;
    cursor:pointer;
`;


// --------------------------------



const Img = styled.img`
    position: relative;
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
    top: -26px;
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
      position:relative;
      margin-bottom: 20px;
      width:100%;
`;

const TableHead = styled.thead`

    `;



export {
    SearchInput, DefaultInput, Navbar, NavLi, SearchButton, BodyContainer, LoginForm
    , LoginNavLi, LoginButton, LoginNavBar, LoginNavLiClicked, mainColor, Gray,
    HomeSpan, Table, TableHead, TableBodyContainer, SearchForm,
    ErrorMsg, GrayBox, GrayBoxMsg, ConfirmContainer, ConfirmBox, Yes, No, LoadingPage,
    SPLElement, SPLInput, Container, Img

}