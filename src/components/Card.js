import React from 'react';
import styled from 'styled-components';


const Div = styled.div`
    width: 293px;
    height: 293px;
    margin: 10px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const Card = ({img, likes, comments }) => {
    return (
        <Div>   
            <img alt="Photo shared by user" src={img}/>
        </Div>
    );
}

export default Card;