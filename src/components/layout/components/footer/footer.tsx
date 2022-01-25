import { maxWidthBreakpoints } from '@constants/breakpoints';
import React from 'react'
import styled from 'styled-components';
// import Image from 'next/image'
// import InstagramIcon from '@public/images/svg/instagram-icon.svg';
// import LinkedinIcon from '@public/images/svg/linkedin-icon.svg';
// import TwitterIcon from '@public/images/svg/twitter-icon.svg';

const Footer = () => {
  return (
    <ContainerFooter>
      <div>
        <p className="footer_copyright">
          <span className="footer_copyright_title">Žvalgas</span>
          <span className="footer_copyright_text"> 2022 Visos teisės saugomos.</span>
         
        </p>
      </div>
      <div>
        {/* <a className='header_icon' href="https://www.instagram.com/" target="_blank" rel="noreferrer">
          <Image src={InstagramIcon} width={24} height={24} alt="Instagram" />
        </a>
        <a className='header_icon' href="https://linkedin.com/" target="_blank" rel="noreferrer">
          <Image src={LinkedinIcon} width={24} height={24} alt="Linkedin" />
        </a>
        <a className='header_icon' href="https://twitter.com/" target="_blank" rel="noreferrer">
          <Image src={TwitterIcon} width={24} height={24} alt="Twitter" />
        </a> */}
      </div>
    </ContainerFooter>
  )
}

export default Footer

const ContainerFooter = styled.footer`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  padding: 29px 93px 31px 93px;
  background-color: ${({ theme }) => theme.colors.lightE5E };;
  height: 100%;
  color: ${({ theme }) => theme.colors.whiteFFF };
  border-top:  1px solid ${({ theme }) => theme.colors.darkE8E };

  .footer_copyright {
    font-family: Inter;
    font-style: normal;
    font-size: 16px;
    line-height: 19px;
    color: ${({ theme }) => theme.colors.black000 };
  }

  .footer_copyright_title {
    font-weight: bold;
  }

  @media ${maxWidthBreakpoints.tablet} {
     padding: 29px 10px 31px 10px;
  }

`;
