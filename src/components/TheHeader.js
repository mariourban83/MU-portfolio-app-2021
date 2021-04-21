import React from "react";

import TheNavigation from "./TheNavigation";

const TheHeader = () => {
  return (
    <header>
      <img
        src={`${process.env.PUBLIC_URL}/assets/images/profilePic.png`}
        alt="myself"
      />

      <TheNavigation />

      <h1>
        <span>M</span>ario <span>U</span>rban
      </h1>
      <p>
        {" "}
        Fullstack <br />
        Web & Software Developer
      </p>
    </header>
  );
};

export default TheHeader;
