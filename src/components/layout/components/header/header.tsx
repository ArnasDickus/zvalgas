import React from 'react'
import styled from 'styled-components';
import Link from 'next/link'
import { routes } from '@constants/routes';
// import Image from 'next/image'
// import InstagramIcon from '@public/images/svg/instagram-icon.svg';
// import LinkedinIcon from '@public/images/svg/linkedin-icon.svg';
// import TwitterIcon from '@public/images/svg/twitter-icon.svg';

const Header = () => {
  return (
    <ContainerHeader>
      <div className="header_title_wrapper">
        <Link href={routes.home}>
          <a>
            <h1 className="header_title">Žvalgas</h1>
          </a>
        </Link>
      </div>
      {/* TODO add search Input */}
      {/* <div className="header_search">
        <input placeholder='Search value'/>
      </div> */}
      <nav className="nav_wrapper"> 
        <Link href={routes.statistics}>
          <a>Pagrindinis</a>
        </Link>
        <Link href={routes.articles}>
          <a>Straipsniai</a>
        </Link>
        {/* TODO add social media links */}
        {/* <a className='header_icon' href="https://www.instagram.com/" target="_blank" rel="noreferrer">
          <Image src={InstagramIcon} width={24} height={24} alt="Instagram" />
        </a>
        <a className='header_icon' href="https://linkedin.com/" target="_blank" rel="noreferrer">
          <Image src={LinkedinIcon} width={24} height={24} alt="Linkedin" />
        </a>
        <a className='header_icon' href="https://twitter.com/" target="_blank" rel="noreferrer">
          <Image src={TwitterIcon} width={24} height={24} alt="Twitter" />
        </a> */}
      </nav>
    </ContainerHeader>
  )
}

export default Header

const ContainerHeader = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-right: auto;
  margin-left:  auto;
  max-width: 1750px;
  padding-right: 10px;
  padding-left:  10px;
  padding-top: 20px;
  align-items: baseline;

  .header_icon {
    cursor: pointer;
  }

  .header_search {

  }

  .header_title_wrapper {
    padding-right: 20px;
  }

  .header_title {
    margin: 0
  }

  .nav_wrapper {
    display: flex;
    align-items: center;
    gap: 15px;
  }
`;
