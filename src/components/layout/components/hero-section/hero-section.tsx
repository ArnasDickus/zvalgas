import React from 'react';
import styled from 'styled-components';
import Image from 'next/image'
import HeroLayoutImage from '@public/images/layout/hero-layout.png'
import { maxWidthBreakpoints, minWidthBreakpoints } from '@constants/breakpoints';

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
  padding: 0 10px;
  gap: 100px;
  padding-top: 70px;

  .text_side {
    max-width: 600px;
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

  @media ${maxWidthBreakpoints.laptop} {
    flex-direction: column-reverse;
    gap: 0;

    .text_side_title {
    font-size: 40px;
     line-height: 50px;
    }
  }

  @media ${maxWidthBreakpoints.mobileS} {
    .text_side_title {
      font-size: 30px;
      line-height: 50px;
    }

    .text_side_subtitle {
      font-size: 20px;
    }
  }

`
