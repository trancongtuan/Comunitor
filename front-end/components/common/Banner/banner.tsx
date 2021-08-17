import React, { FC, useState } from "react";
import { Typography } from "@material-ui/core";
import { StylexContainer, StyledBreadcrumbs } from "./style";
import { useEffect } from "react";
import { readRecord } from "pages/utils/localStorageService";
import { useRouter } from "next/router";

export const Banner: FC = () => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  useEffect(() => {
    setTitle(router.pathname.substring(1, router.pathname.length));
    if (!readRecord("accessToken")) {
      router.push({ pathname: "auth/Login" });
    }
  }, []);

  return (
    <StylexContainer flexDirection="column">
      <Typography variant="h4">{title.toUpperCase()}</Typography>
      <StyledBreadcrumbs aria-label="breadcrumb">
        <Typography color="textPrimary">Home</Typography>
        <Typography color="textPrimary">Collection</Typography>
      </StyledBreadcrumbs>
    </StylexContainer>
  );
};
