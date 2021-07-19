import React, { useState, useRef, useEffect } from "react";
import Proptypes from "prop-types";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const Name = styled.div`
    position: fixed;
    margin-bottom:10px;
    background-color:teal;
    display:flex;
`;



export default function BoardName({ names = ['전체게시판',] }) {


    return (
        <Name> {names.map((name, index) => (
            <h5 key={index}>{name}</h5>
        ))} </Name>
    );
}