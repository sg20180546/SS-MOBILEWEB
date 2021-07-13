import styled, { createGlobalStyle, css } from "styled-components";
import { normalize } from "styled-normalize";

const mainColor = "#f84e75"

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
    position: absolute;
    top: 20px;
    width: 163px;
    height: 20px;

  }
`;

const Navbar = styled.nav`{
    display: flex;
    position: fixed;
    width: 270px;
    margin-top: 15px;
    margin-bottom: 30px;
    align-items: center;
    justify-content: space-around;
    `;

const NavLi = styled.ol`
    font-size: 15px;
    color: #A1ABB6;
    padding-bottom: 8px;
    :hover{
        color: ${mainColor};
        border-bottom: 2px solid ${mainColor};
    };
`;

const LoginNavLi = styled(NavLi)`
    border-left: 1px solid rgba(0,0,0,0.5);
    margin: 10px;
    padding-left: 10px;
    font-size: 5px;
`;


const Banner = styled.div`
    position: relative;
    top:50px;
    display: flex;
    flex-direction: column;
    height: 10px;
    justify-content: center;
    align-items: center;
`;

const SearchButton = styled.button`
    position: absolute;
    left: 223px;
    top: 21px;
    height: 20px;
    width: 30px;
    border-radius:10px;
    background-color: ${mainColor};
    :active{
        background-color:#ba3b56;
    }
`;


const BodyContainer = styled.div`
    border-top: 1px dashed #B7B8CE;
    display:flex;
    position:relative;
    justify-content: center;
    align-items: center;
    height:200px;
    top:50px;
    width:100%;
    flex-direction: column;
`;
const HomeImg = styled.img`
    position:absolute;
    height: 200px;
`;


const LoginBox = styled.div`
height: 250px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

`;

const LoginForm = styled.form`
    display: flex;
    justify-content:center;
    align-items: center;
    flex-direction: column;

    `;

export {
    SearchInput, DefaultInput, Navbar, NavLi, Banner, SearchButton, HomeImg, BodyContainer, LoginBox, LoginForm
    , LoginNavLi
};