import React from 'react';
import styled from 'styled-components';
import Card from './Card';


const Section = styled.section`
    display: flex;
    flex-wrap: wrap;
    padding: 0 200px;
    background-color: #fafafa;
`;

const PicturesContainer = ({photos}) => {

  return(
    <Section>
        {
        photos.map((photo, i) => 
        <Card 
            key={i} 
            img={photo.source}
            likes={photo.likes}
            comments={photo.comments}/>)
        }
    </Section>
  )
};

export default PicturesContainer;