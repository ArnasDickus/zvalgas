import React from 'react';
import styled from 'styled-components';

interface IArticleCard {
    imgLink: string
}

const ArticleCard = (props: IArticleCard) => {
  const { imgLink } = props;
  return (
    <ContainerArticleCard>
      {/* {
        imgLink ?
      } */}
      <p>Article Card</p>
    </ContainerArticleCard>  
  )
};

export default ArticleCard;

const ContainerArticleCard = styled.div`
    
`;
