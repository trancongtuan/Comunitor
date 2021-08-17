import { Flex } from "@components/common/stories/Flex";
import { Grid, TextField } from "@material-ui/core";
import styled from "styled-components";

export const StyleGutter = styled(Grid)`
  justify-content: center;
  height: 100vh;
  align-items: center;
`;

export const StyleContainer = styled(Grid)`
  background: url(https://scr.vn/wp-content/uploads/2020/07/%E1%BA%A2nh-n%E1%BB%81n-m%C3%A1y-t%C3%ADnh-ch%E1%BA%A5t-l%C6%B0%E1%BB%A3ng-cao-scaled-2048x1152.jpg);
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const StyleInput = styled(TextField)`
  label {
    color: black
  }
  input {
    background: white;
    border-radius: 6px;
  }
`;
