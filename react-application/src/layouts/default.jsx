import React from "react";
import Navbar from "../components/layout/Navbar";
import PageContainer from "../components/layout/PageContainer";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <PageContainer>{children}</PageContainer>
    </>
  );
};

export default DefaultLayout;
