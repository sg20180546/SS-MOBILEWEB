
import styled, { css } from "styled-components";

const mainColor = "#f84e75"
const Gray = "#B7B8CE"
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

    }
`;
const SearchInput = styled(Input)`
    position: relative;
    width: 180px;
    height: 40px;

  }
`;

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
    // top:65px;
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




const SearchButton = styled.button`
    position: relative;
    left: 120px;
    top: -26px;
    height: 43px;
    width: 35px;

    border-radius:10px;
    background-color: ${mainColor};
    :active{
        background-color:#ba3b56;
    }
`;



//  Container : div
const container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center
    position: relative;
`;


const Banner = styled(container)`
    justify-content:center;
    font-size: 30px;
    top:60px;
    height: 50px;

`;
const BodyContainer = styled(container)`

    // top:45px;
    width:97%;

`;

const TableBodyContainer = styled(container)`
    position: relative;
    top:13px;
    height:280px;
    overflow-y: scroll;
    width:100%;
`;

const LoginBox = styled(container)`
    height: 250px;

`;
const GrayBox = styled(container)`
    background-color: #d1d1d3;
    margin: 15px 0px;
    height: 40px;
    width: 80%;
    border-radius: 20px;
 `;



// img

const Img = styled.img`
    position: relative;
`;
const HomeImg = styled(Img)`
    height: 300px;
`;
const LoginImg = styled(Img)`
    height: 200px;
`;
const SmallImg = styled(Img)`
    height: 120px;
`;

// 
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
    height:80px;
`;


const LoginButton = styled.button`
    margin-top: 10px;
    height: 30px;
    width: 163px;
    background-color: ${mainColor};
    : active{
    background-color: #ba3b56;
}
`;
const HomeSpan = styled.span`
    font-size: 14px;
    color: ${Gray};
    position: relative;
    text-align: center;
`;
const GrayBoxMsg = styled.span`
    display:inline-block;
    position:relative;
    top:12px;
    cursor:pointer;
`;


const ErrorMsg = styled.span`
    display: inline-block;
    height: 10px;
    font-size:9px;
    position:relative;
    text-align: center;
    ${props =>
        css`

        // color:${Gray};
        animation-name: bckanim;
        animation-fill-mode:forwards, forwards;
        animation-timing-function: ease-in-out;
        animation-duration:3s;
        animation-delay:0s;

      @keyframes bckanim {
        0% {color:${mainColor}; font-weight:900;}
        50% {color:#f77994; fonte-weight:500;}
        100% { color:${Gray}; font-weight:400;}
      }
    `}
`;



const Table = styled.table`
      position:relative;
      margin-bottom: 20px;
      width:100%;
`;

const TableHead = styled.thead`

    `;



export {
    SearchInput, DefaultInput, Navbar, NavLi, Banner, SearchButton, HomeImg, BodyContainer, LoginBox, LoginForm
    , LoginNavLi, LoginButton, LoginNavBar, LoginImg, LoginNavLiClicked, mainColor, Gray,
    HomeSpan, Table, TableHead, TableBodyContainer, SearchForm,
    ErrorMsg, GrayBox, SmallImg, GrayBoxMsg

}