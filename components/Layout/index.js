import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import styled from "styled-components";

const Layout = ({ children }) => {
  return (
    <Container>
      <Nav />
      {children}
      <Footer />
    </Container>
  );
};

export default Layout;

const Container = styled.div``;
