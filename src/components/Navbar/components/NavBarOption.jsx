import React from "react";
import { Button } from "@mui/material";
import { memo } from "react";

const NavBarOption = ({ id, title, componentToScrollId }) => {
  const handleScreenScroll = () => {
    console.log(componentToScrollId);
    const element = document.getElementById(componentToScrollId);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Button onClick={handleScreenScroll}>
      <span>{id}.</span>
      {title}
    </Button>
  );
};

export default memo(NavBarOption);
