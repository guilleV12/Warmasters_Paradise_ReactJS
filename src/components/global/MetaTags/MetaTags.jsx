import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const MetaTags = ({ title, description, children }) => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{title} | Warmasters Paradise</title>
        <meta name="description" content={description} />
      </Helmet>

      {children}
    </HelmetProvider>
  );
};

export default MetaTags;
