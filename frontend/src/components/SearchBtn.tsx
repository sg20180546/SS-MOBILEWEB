import getToken from "../hook/getToken";
import axios from 'axios';
import { SearchButton, Gray } from "../assets/styles/element";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Refresh } from "../hook/refresh";

export default function SearchBtn(props: any) {
    const { userStatus, keyWord, type, size, page, setPosts } = props;



    return (<SearchButton id="searchButton" >
        <FontAwesomeIcon style={{ color: Gray }} icon='search' size='xs' />
    </SearchButton>)
}


const handleSearch = async (userStatus: string, keyWord: string, type: string, size: string, page: string) => {
    if (userStatus !== 'login') {
        return;
    } else {
        const Access = (await getToken()).Access
        const response = await axios.get(process.env.REACT_APP_API_URL + 'v1/search' +
            `?query=${keyWord}&type=${type}&size=${size}&page=${page}`,
            {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${Access}`
                }
            }
        )
        switch (response.status) {
            case 200:
                paintBoard(response);
                break;
            case 401:
                await Refresh()
                // then setuserstatus
                break;
            case 404:
                break;
            default:
                break;
        }


    }
}

const paintBoard = (DATA: any) => {
    const { data: { currentItems } } = DATA;

}