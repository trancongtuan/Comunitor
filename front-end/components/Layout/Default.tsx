import React, { FC } from "react";
import { Navigation } from "@components/common/Navigation/Navigation";
import { Flex } from "@components/Flex/Flex";
import { Banner } from "@components/common/Banner/banner";
import { useRouter } from "next/router";

export const Layout: FC = ({ children }) => {
  const router = useRouter();
  return (
    <Flex flexDirection="column">
      <Navigation />
      {router.pathname.substring(1, router.pathname.length) !== "home" ? (
        <Banner />
      ) : null}
      <main className="fit">{children}</main>
    </Flex>
  );
};
