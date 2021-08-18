import { Breadcrumbs } from "@material-ui/core";
import styled from "styled-components";
import { Flex } from "@components/Flex/Flex";

export const StylexContainer = styled(Flex)`
  padding: 40px 0 40px 0;
  float: left;
  width: 100%;
  height: auto;
  text-align: center;
  position: relative;
  z-index: 1;
  background: url(//cdn.shopify.com/s/files/1/0433/5232/6300/files/breadcrumb-1.jpg?v=1602912370)
    center top no-repeat fixed;
  margin: 60px 0 80px 0;
  background-size: cover;
  &:before {
    position: absolute;
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: -1;
    background: #faf0e4;
    opacity: 0.95;
  }
`;
export const StyledBreadcrumbs = styled(Breadcrumbs)`
  display: flex;
  justify-content: center;
`;
