import React from "react";
const PageContainer = ({ children }) => {
  return <div className="container-fluid bg-light min-vh-100">{children}</div>;
};
export default PageContainer;
