import React, { FC } from "react";
import { BottomNavigation, AppBar, Toolbar } from "@material-ui/core";
import { StyledNav, StyledLi, StyleLogo } from "./style";
import { Flex } from "../stories/Flex";
import Link from "next/link";

export const Navigation: FC = () => {
  const [value, setValue] = React.useState<string>('');
  

  return (
    <AppBar style={{ backgroundColor: "#fff" }}>
      <StyledNav flexDirection="row">
        <Flex width="100%">
          <StyledLi>
            <ul>
              <li key="1">
                <Link href={`/dashboard`}>
                  <a className={value === '1' ? 'active' : ''} onClick={()=> setValue('1') }>Home</a>
                </Link>
              </li>
              <li key="2">
                <Link href={`/dashboard`}>
                  <a className={value === '2' ? 'active' : ''} onClick={()=> setValue('2')}>BATH SOAP</a>
                </Link>
              </li>
              <li key="3">
                <Link href={`/dashboard`}>
                  <a className={value === '3' ? 'active' : ''} onClick={()=> setValue('3')}>COLLECTIONS</a>
                </Link>
              </li>
            </ul>
            <StyleLogo>
              <Link href={`/dashboard`}>
                <img src="/icon-192x192.png" alt="" />
              </Link>
            </StyleLogo>
            <ul>
              <li key="5">
                <Link href={`/dashboard`}>
                  <a className={value === '4' ? 'active' : ''} onClick={()=> setValue('4')}>Page</a>
                </Link>
              </li>
              <li key="6">
                <Link href={`/dashboard`}>
                  <a className={value === '5' ? 'active' : ''} onClick={()=> setValue('5')}>News</a>
                </Link>
              </li>
              <li key="7">
                <Link href={`/dashboard`}>
                  <a className={value === '6' ? 'active' : ''} onClick={()=> setValue('6')}>Contact</a>
                </Link>
              </li>
            </ul>
          </StyledLi>
        </Flex>
      </StyledNav>
    </AppBar>
  );
};
