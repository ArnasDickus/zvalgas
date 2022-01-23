import React from 'react'
import styled from 'styled-components';

const Footer = () => {
  return (
    <ContainerFooter>
      <p className="footer_title">Copyright</p>
    </ContainerFooter>
  )
}

export default Footer

const ContainerFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  height: 100%;
  color: white;

`;
