import React from 'react';
import ErrorImg from '../assets/images/darth-vader.jpg'


function Error404() {
    return (
        <React.Fragment>
            <img src={ErrorImg} alt="Imagen error 404" />
        </React.Fragment>
    )
}



export default Error404;