import React from "react";
import PageContainer from "../components/layout/PageContainer";
import Navbar from "../components/Navbar";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <PageContainer>{children}</PageContainer>
    </>
  );
};

export default DefaultLayout;
