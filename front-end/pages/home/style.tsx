import { Flex } from "@components/common/stories/Flex";
import { Grid, TextField } from "@material-ui/core";
import styled from "styled-components";

export const StyleChatContainer = styled.div`
  margin-top: 66px;
  .slick-track {
    height: 800px;
  }
  .slick-slider {
    width: 100%;
    img {
      width: 100%;
    }
  }
`;

export const StyledImageContainer = styled.div`
  display: flex !important;
  align-items: center;
  justify-content: center;
  .slider-text {

  }
  .slider-text {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    padding: 20px;
    width: 600px;
    margin: 30px ;
    position: absolute;
    align-self: center;
    text-align: center;
    font-size: 32px;
    z-index: 4;
    color: #ad8b8b;
    .slider-text__first {
      letter-spacing: 0;
      text-transform: none;
      font-family: 'Roboto';
      font-weight: 500;
    }
    a {
      font-family: 'Roboto';
      text-decoration: none;
      color: white;
    }
    a:hover {
      font-family: 'Roboto';
      text-decoration: none;
      color: #ad8b8b;
    }
  }
`;
