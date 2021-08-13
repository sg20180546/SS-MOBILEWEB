import { Container, mainColor, Gray } from "../assets/styles/element";
import { Fragment } from "react";
import styled, { css } from 'styled-components';
import $ from 'jquery';
import store, { actionCreators } from "../redux/store";
import { getPost } from '../hook/getPost';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const height = '19px';

let Default = function (page: number) {
    if (page % 5 === 0) return page - 5;
    else return Math.floor(page / 5) * 5;
};


export default function Pagenation() {
    const { postData } = store.getState();
    const { currentPage, totalPages } = postData;
    const pageList = []
    for (var i = 0; i < 5; i++) {
        pageList[i] = { index: Default(currentPage) + i + 1 }
    }
    $('input[name="jumpInput"]').keypress((e) => {
        if (e.keyCode === 13) {
            jumpPageByInput(e);
        }
    })

    return (<div style={{
        display: 'flex', position: 'absolute', top: '310px', width: '230px', height: `${height}`
        , justifyContent: 'center',
    }}>
        <Page onClick={(e) => { jumpPage(e, -4) }} >&lt;&lt;</Page>
        {pageList.map(page => {
            if (page.index <= totalPages) {

                return <Page onClick={changePage} current={page.index === currentPage} >{page.index}</Page>

            } else {

                return <Page>X</Page>;
            }
        })}
        <Page onClick={(e) => { jumpPage(e, 6) }}>&gt;&gt;</Page>
        <Page onClick={changePage} current={totalPages === currentPage}>{totalPages}</Page>
        <JUMPInput type='number' name='jumpInput' onKeyDown={(e) => e.keyCode > 47 && e.keyCode < 58 ? true : false} ></JUMPInput>
        <Page onClick={jumpPageByInput} >GO</Page>
    </div>);

}


const changePage = async (event: any) => {
    const { searchOption } = store.getState();
    const newPage = parseInt(event.currentTarget.innerText);
    if (!newPage) {
        return;
    }
    await store.dispatch(actionCreators.configSearchOption(searchOption.type, searchOption.size, newPage, ''))
    await getPost()
    if (table) {
        table.scrollTop = 0;
    }
}

const jumpPage = async (event: any, direction: number) => {
    const { searchOption, postData } = store.getState();
    let newPage = Math.max(Default(postData.currentPage) + direction, 1);
    newPage = Math.min(postData.totalPages, newPage);
    if (!newPage) {
        return;
    }
    event.preventDefault();
    await store.dispatch(actionCreators.configSearchOption(searchOption.type, searchOption.size, newPage, ''))
    await getPost()
    if (table) {
        table.scrollTop = 0;
    }
}

const jumpPageByInput = async (event: any) => {
    const { searchOption } = store.getState();
    event.preventDefault();
    const newPage = $('input[name="jumpInput"]').val();
    if (!newPage) return;
    await store.dispatch(actionCreators.configSearchOption(searchOption.type, searchOption.size, newPage, ''))
    await getPost()
}

const table = document.querySelector('#table');
const Page = styled(Container) <{ current?: boolean }> `
    width: 10%;
    height: ${height};
    border: 1px solid ${Gray};
    line-height: 15px;
    font-size:5px;
    cursor:pointer;
    :hover{
        background-color:${Gray};
    }
    :active{
        background-color:#9D9EB1;
    }
    ${props =>
        props.current &&
        css`
        background-color:${mainColor};
        `}
`;

const JUMPInput = styled.input`
    width: 10%;
    height: ${height};
    border: 1px solid ${Gray};
    font-size:5px;
    ::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
      
`;