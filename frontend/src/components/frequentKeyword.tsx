import { Container, Gray, mainColor } from "../assets/styles/element";
import styled from "styled-components";
import { useRef, useEffect, Fragment } from "react";
import { connect } from 'react-redux';
// ----------------------
import { actionCreators } from "../redux/store";
import { getPost } from "../hook/getPost";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import store from "../redux/store";
function FrequentKeyWord({ state, setF5, initSearchOption, getFrequentKeyWords }: any) {

    useEffect(() => {
        getFrequentKeyWords(getfromLocalStorage());
    }, [])


    const first = addGetPostEvent({ setF5, initSearchOption })
    const second = addGetPostEvent({ setF5, initSearchOption });
    const third = addGetPostEvent({ setF5, initSearchOption });


    return (
        <Fragment>
            {NoRemeberUser() ? < div ></div> : <div style={{
                display: 'flex', flexDirection: 'column', position: 'absolute', border: `3px solid ${mainColor}`, borderRadius: '7px',
                width: '100px', height: '130px', left: '0px', top: '10px', justifyContent: 'center', alignItems: 'center',
                zIndex: 3
            }}>
                <div style={{ position: 'absolute', top: '0px', fontSize: '3px', borderBottom: `3px solid ${mainColor}`, padding: '3px' }}>자주찾은 검색어</div>
                <Fragment>
                    <Container id='container' style={{ position: 'relative', top: '10px', width: '100%', height: '59%' }}>

                        {state.length > 0 && <KeywordsContainer ref={first} >{state[0][0]}</KeywordsContainer>}
                        {state.length > 1 && <KeywordsContainer ref={second}>{state[1][0]}</KeywordsContainer>}
                        {state.length > 2 && <KeywordsContainer ref={third} >{state[2][0]}</KeywordsContainer>}
                    </Container>
                    <Delete onClick={() => {
                        localStorage.removeItem('keyWords')
                        getFrequentKeyWords([]);
                    }}><FontAwesomeIcon style={{ color: 'black', fontSize: '14px' }} icon='trash-alt' size='2x' /></Delete>
                </Fragment>
            </div>}
        </Fragment>
    )

}

function mapStateToProps(state: any, ownProps: any) {
    return { state: state.FrequentKeywords };
}
function mapDispatchToProps(dispatch: any, ownProps: any) {
    return {
        initSearchOption: (type: any, size: any, page: any, keyword: any) => dispatch(actionCreators.configSearchOption(type, size, page, keyword)),
        getFrequentKeyWords: (state: any[]) => dispatch(actionCreators.getFrequentKeywords(state))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FrequentKeyWord);


const addGetPostEvent = ({ setF5, initSearchOption }: any) => {

    const element = useRef<any>(null);
    useEffect(() => {
        if (element) {
            const { current } = element;
            current?.addEventListener('click', async () => {
                setF5(true);
                await saveFrequentKeyWord(current.innerText);
                await initSearchOption('title', '30', 1, current.innerText);
                getPost();
            })
            return () => current?.removeEventListener('click', async () => {
                setF5(true);
                await initSearchOption('title', '30', 1, current.innerText);
                await getPost();
            })
        }
    }, [store.getState().FrequentKeywords])

    return element;
}







export const saveFrequentKeyWord = (keyWord: string) => {
    if (NoRemeberUser()) {
        return;
    }
    const storageKeywords = localStorage.getItem('keyWords');
    if (typeof storageKeywords === 'string') {
        const current = JSON.parse(storageKeywords);

        if (checkKeyWordinStorage(current, keyWord)) {
            current[keyWord] += 1;
        } else {
            current[keyWord] = 1;
        }
        const stringCurrent = JSON.stringify(current);
        localStorage.setItem('keyWords', stringCurrent);
    } else {
        console.log('hey');
        const newKeyWordsObjects = { [keyWord]: 1 }
        localStorage.setItem('keyWords', JSON.stringify(newKeyWordsObjects));
    }
}


function checkKeyWordinStorage(object: object, keyWord: any) {
    for (var variable in object) {
        if (variable === keyWord) return true;
    }
    return false;
}

function getfromLocalStorage() {
    const storageKeywords = localStorage.getItem('keyWords');
    if (typeof storageKeywords === 'string') {
        const objStorageKeywords = JSON.parse(storageKeywords);
        var sortable = [];
        for (var keyword in objStorageKeywords) {
            sortable.push([keyword, objStorageKeywords[keyword]]);
        }
        sortable.sort((a, b) => b[1] - a[1]);
        return sortable;
    }
    return [];
}

const NoRemeberUser = () => {
    if (sessionStorage.getItem('Access')) {
        return true;
    }
    return false;
}


const KeywordsContainer = styled.div`
    font-size: 15px;
    height: 20px;
    display:inline-block;
    text-align:center;
    width:80%;
    margin:2px;
    background-color: ${Gray};
    cursor:pointer;
    border: 2px solid ${mainColor};
    :hover{
    background-color :${mainColor};
        }
                `;
const Delete = styled.div`
    position:relative;
    top:14px;
    font-size: 15px;
    height: 20px;
    display:inline-block;
    text-align:center;
    width:80%;
    background-color: ${Gray};
    cursor:pointer;
    border: 2px solid ${mainColor};
`;