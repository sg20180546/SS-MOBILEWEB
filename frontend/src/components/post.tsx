import React, { useState, useRef, useEffect } from "react";
import { Fragment } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { mainColor } from "../assets/styles/element";
import { useChromeTab } from "../hook/useChromeTab";
import { useMark } from "../hook/useMark";
// import store from "../redux/store";
function SsodamPosts({ key, id, title, searchKeyWord }: any) {
    const url = `http://www.ssodam.com/content/${id}`;
    const element = useChromeTab(url);
    const Mark = useMark(title, searchKeyWord);

    return (
        <TableResource ref={element} key={key}>
            <PostNumber key={key}>{id}</PostNumber>
            <PostTitle id={key} key={key} ref={Mark}>{title}</PostTitle>
        </TableResource>)
}

const mapStateToProps = (state: any, ownprops: any) => {
    return { searchKeyWord: state.searchOption.keyWord };
}

export default connect(mapStateToProps, null)(SsodamPosts);








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
