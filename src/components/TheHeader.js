import React from "react";

import TheNavigation from "./TheNavigation";

const TheHeader = () => {
  return (
    <header>
      <img
        src={`${process.env.PUBLIC_URL}/assets/images/profilePicture.svg`}
        alt="Developer icon"
      />

      <TheNavigation />

      <h1>
        <span>M</span>ario <span>U</span>rban
      </h1>
      <p>
        {" "}
        Web & Mobile Apps Developer
      </p>
    </header>
  );
};

export default TheHeader;
