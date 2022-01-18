import React, { ReactNode } from 'react'
import Footer from './components/footer';
import Header from './components/header';
import styled from 'styled-components';

interface ILayout  {
    children:  ReactNode
}

const Layout = (props: ILayout) => {
  const { children } = props;
  return (
    <LayoutContainer>
      <header className="header">
        <Header />
      </header>
      <main className="main">{children}</main>
      <footer className="footer">
        <Footer />
      </footer>
    </LayoutContainer>
  )
}

export default Layout

const LayoutContainer = styled.div`

.header {

}

.main {
   padding-bottom: 100px; 
}

.footer {
   bottom: 0;
   width: 100%;
   height: 100px;
   position: absolute;
}
`;
