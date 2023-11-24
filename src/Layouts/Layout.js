import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer/Footer";
import Container from "./Container";

const Layout = (props) => {
  const children = props.children;
  return (
    <div>
      <Navbar />
      <Container>{children}</Container>
      <Footer />
    </div>
  );
};

export default Layout;
