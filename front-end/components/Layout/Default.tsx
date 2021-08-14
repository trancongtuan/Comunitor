import React, { FC } from "react";
import { Navigation } from "@components/common/Navigation/Navigation";
import { Flex } from "@components/Flex/Flex";
import { Banner } from "@components/common/Banner/banner";

export const Layout: FC = ({ children }) => {
  return (
    <Flex flexDirection="column">
      <Navigation />
      <Banner />
      <main className="fit">{children}</main>
    </Flex>
  );
};
