import React from "react";
import Loader from "react-loader-spinner";

const PageLoader = () => (
  <Loader type="ThreeDots" color="#somecolor" height={100} width={100} timeout={3000} />
);

export default PageLoader;
