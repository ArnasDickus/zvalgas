import { articlesData } from '@constants/articles';
import React from 'react'
import styled from 'styled-components';
import { ArticleCard } from './utils/cards/article-card';




const HomePage = () => {
  return (
    <ContainerHome>
      <h3 className="home_title">Visi straipsniai</h3>
      <div className="articles_container"> 
        {
          articlesData?.map(article => {
            return (
              <div key={article?.id}>
                <ArticleCard imgLink={article?.imageLink}/>
              </div>
            )
          })
        }
      </div>
    </ContainerHome>
  )
}

export default HomePage

const ContainerHome = styled.div`
  padding-top: 50px;
  .home_title {
    font-style: normal;
    font-weight: 600;
    font-size: 44px;
    line-height: 53px;
    text-align: center;
    color: ${({ theme }) => theme.colors.black000 };
  }

  .articles_container {

  }
`;
