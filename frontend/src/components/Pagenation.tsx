import { Container, mainColor, Gray } from "../assets/styles/element";
import { Fragment } from "react";
import styled, { css } from 'styled-components';
import $ from 'jquery';
import store, { actionCreators } from "../redux/store";
import { getPost } from '../hook/getPost';
import { connect } from "react-redux";
import { kMaxLength } from "buffer";

let KEYforXpage = 10000;
const height = '19px';

let Default = function (page: number) {
    if (page % 5 === 0) return page - 5;
    else return Math.floor(page / 5) * 5;
};


function Pagenation({ setF5, initSearchOption, state }: any) {
    // const { setF5 } = props;
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

    return (
        <Fragment>
            {typeof postData === 'string' ? <F5 onClick={() => {
                initSearchOption('title', '30', 1, '');
                setF5(false);
            }}>새로고침</F5> :
                <div style={{
                    display: 'flex', position: 'absolute', top: '310px', width: '230px', height: `${height}`
                    , justifyContent: 'center',
                }}>
                    <Page onClick={(e) => { jumpPage(e, -4) }} current={false}>&lt;&lt;</Page>
                    {pageList.map(page => {

                        if (page.index <= totalPages) {

                            return <Page key={page.index} onClick={changePage} current={page.index === currentPage} >{page.index}</Page>

                        } else {

                            return <Page key={KEYforXpage++} current={false}>X</Page>;
                        }
                    })}
                    <Page onClick={(e) => { jumpPage(e, 6) }} current={false}>&gt;&gt;</Page>
                    <Page onClick={changePage} current={totalPages === currentPage}>{totalPages}</Page>
                    <JUMPInput type='number' name='jumpInput' onKeyDown={(e) => e.keyCode > 47 && e.keyCode < 58 ? true : false} ></JUMPInput>
                    <Page onClick={jumpPageByInput} current={false}>GO</Page>
                </div>}


        </Fragment>);

}

const mapStateToProps = (state: any, ownprops: any) => {
    return { state };
}


const mapDispatchToProps = (dispatch: any, ownprops: any) => {

    return { initSearchOption: (type: any, size: any, page: any, keyword: any) => dispatch(actionCreators.configSearchOption(type, size, page, keyword)), }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pagenation);

const changePage = async (event: any) => {
    const { searchOption } = store.getState();
    const newPage = parseInt(event.currentTarget.innerText);
    if (!newPage) {
        return;
    }
    await store.dispatch(actionCreators.configSearchOption(searchOption.type, searchOption.size, newPage, searchOption.keyWord))
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
    await store.dispatch(actionCreators.configSearchOption(searchOption.type, searchOption.size, newPage, searchOption.keyWord))
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
    await store.dispatch(actionCreators.configSearchOption(searchOption.type, searchOption.size, newPage, searchOption.keyWord))
    await getPost()
}

const table = document.querySelector('#table');
const Page = styled(Container) <{ current: boolean }> `
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
        :hover{
            background-color:${mainColor};
        }
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

const F5 = styled.div`
    display: inline-block;
    position: absolute;
    text-align:center;
    top : 310px;
    width : 230px;
    height:${height};
    background-color:${Gray};
    border-radius:3px;
    cursor:pointer;
    :hover{
        background-color:#A6A6BA;
    }
    :active{
        background-color:${mainColor}
    }

`;