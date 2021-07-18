import React, { useState, useRef, useEffect } from "react";
import Proptypes from "prop-types";
import { Link } from "react-router-dom";

export default function SPosts({ id = 0, title = 0, Up = 0, postDate = 0, url = 0 }) {

    return (<a href='#' > <tr>
        <td>{id}</td>
        <td>{title}</td>
        <td>{Up}</td>
        <td>{postDate}</td>
    </tr></a>)
}




// SsodamPost.propTypes = {
//     id: Proptypes.number.isRequired,
//     title: Proptypes.string.isRequired,
//     UP: Proptypes.number.isRequired,
//     DATE: Proptypes.string.isRequired,
//     url: Proptypes.string.isRequired
// }
