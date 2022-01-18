import React from 'react'
import styled from 'styled-components';
import Link from 'next/link'

const Header = () => {
  return (
    <ContainerHeader>
      <div className="header_title_wrapper">
        <Link href="/">
          <a>
            <h1 className="header_title">Žvalgas</h1>
          </a>
        </Link>
      </div>
      <nav className="nav_wrapper">
        <Link href="/statistics">
          <a>Statistika</a>
        </Link>
        <Link href="/articles">
          <a>Straipsniai</a>
        </Link>
      </nav>
    </ContainerHeader>
  )
}

export default Header

const ContainerHeader = styled.div`
  display: flex;
  margin-right: auto;
  margin-left:  auto;
  max-width: 960px;
  padding-right: 10px;
  padding-left:  10px;
  padding-top: 20px;

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
