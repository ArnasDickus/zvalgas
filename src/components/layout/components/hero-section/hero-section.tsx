import React from 'react';
import styled from 'styled-components';
import Image from 'next/image'
import HeroLayoutImage from '@public/images/layout/hero-layout.png'

const HeroSection = () => {
  return (
    <ContainerHeroSection>
      <div className="text_side">
        <h2 className="text_side_title">Tapk geresniu piliečiu</h2>
        <p className="text_side_subtitle">Suprasdamas politika iš esmės</p>
      </div>
      <div className="image_side"> 
        <Image src={HeroLayoutImage} width={476} height={323} alt="Hero image" />
      </div>
    </ContainerHeroSection>
  )
    

};

export default HeroSection;

const ContainerHeroSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  .text_side {
    padding-right: 100px;
    max-width: 700px;
  }

  .text_side_title {
    font-size: 60px;
    line-height: 73px;
  }

  .text_side_subtitle {
    padding-top: 19px;
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 36px;
     color: ${({ theme }) => theme.colors.dark4A55 };
  }
`
