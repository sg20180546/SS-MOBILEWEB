import React, { useState, useRef, useEffect } from "react";
import styled from 'styled-components';
import { mainColor } from "../assets/styles/element";
import { useChromeTab } from "../hook/useChromeTab";

export default function SsodamPosts({ key = 0, id = 0, title = 0 }) {
    const url = `http://www.ssodam.com/content/${id}`;
    const element = useChromeTab(url);
    return (
        <TableResource ref={element} key={key}>
            <PostNumber>{id}</PostNumber>
            <PostTitle>{title}</PostTitle>
        </TableResource>)
}



const TableResource = styled.tr`
    display:flex;
    position: relative;
    width: 100%;
    cursor: pointer;
    border-top: 1px dashed black;
    padding:10px;
    :hover{
        color:${mainColor};
    }
`;

const PostNumber = styled.th`
    width: 20%;
    font-size: 13px;
    line-height: 18px;
`;

const PostTitle = styled.th`
    width: 80%;
    text-align:left;
`;
