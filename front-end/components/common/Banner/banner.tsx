import React, { FC } from "react";
import { Typography } from "@material-ui/core";
import { StylexContainer } from "./style";

export const Banner: FC = () => {
  return (
    <StylexContainer flexDirection="column">
      <Typography style={{ color: "white" }} variant="h4">
        ALL COLLECTIONS
      </Typography>
    </StylexContainer>
  );
};
