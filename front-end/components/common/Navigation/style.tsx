import { BottomNavigationAction } from "@material-ui/core";
import styled from "styled-components";
import { Flex } from "../stories/Flex";

export const StyledNav = styled(Flex)`
  width: 1230px;
  max-width: 100%;
  margin: auto;
  padding: 0 30px;
`;

export const StyledLi = styled.nav`
  display: flex;
  align-items: center;
  min-height: 65px;
  justify-content: space-between;
  ul:first-child {
    justify-content: flex-start;
    text-align: left;
  }
  ul {
    font-size: 0px;
    flex: 1;
    display: flex;
    list-style-type: none;
    flex-wrap: wrap;
    margin: 0;
    padding: 0px;
    font-size: 0px;
  }
  li {
    list-style-type: none;
  }
  a {
    text-decoration: none;
    display: block;
    font-weight: 500;
    line-height: 1.2;
    padding: 25px 15px;
    font-family: "Roboto";
    position: relative;
    text-transform: uppercase;
    font-size: 13px;
    color: #1a1a1a;
    border-radius: 0px;
    box-sizing: border-box;
  }
  a:active,
  a:hover {
    outline: 0;
    color: #ebbaa9;
  }
`;

export const StyleLogo = styled.div`
  flex-grow: 1;
  justify-content: center;
  text-align: center;
  img {
    border-style: none;
    border: 0;
    -ms-interpolation-mode: bicubic;
    vertical-align: middle;
    height: auto;
    max-width: 10%;
    cursor: pointer;
  }
`;
