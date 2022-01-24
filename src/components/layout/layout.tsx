import React, { ReactNode } from 'react'
import Footer from './components/footer';
import Header from './components/header';
import styled from 'styled-components';
import { HeroSection } from './components/hero-section';

interface ILayout  {
    children:  ReactNode
}

const Layout = (props: ILayout) => {
  const { children } = props;
  return (
    <LayoutContainer>
      <Header />
      <HeroSection />
      <main className="main">{children}</main>
      <Footer />
    </LayoutContainer>
  )
}

export default Layout

const LayoutContainer = styled.div`
   display: flex;
    flex-direction: column;
    min-height: 100vh; 

  .main {
     flex-grow: 1;
  }
`;
