import { Flex } from "@components/common/stories/Flex";
import { Grid, TextField } from "@material-ui/core";
import styled from "styled-components";

export const StyleChatContainer = styled.div`
display: flex;
width: 400px;
padding: 1rem;
border: 1px solid #ddd;
border-radius: 5px;
justify-content: space-between;
height: 600px;
flex-direction: column;
background-color: $greyColor;
.user-name {
  width: 100%;
  text-align: start;
  h2 {
    border-bottom: 1px solid #ddd;
    font-weight: 300;
    padding-bottom: 1rem;
  }
`;

export const StyleChatMessage = styled.div`
  height: 70%;
  display: flex;
  overflow-y: auto;
  align-content: flex-start;
  width: 100%;
  flex-direction: column;

  .message {
    padding-left: 0.5rem;
    max-width: 220px;
    margin-left: 0px;
    p {
      color: #b4b6be;
      font-size: 1rem;
      font-weight: 300;
      background-color: #250202;
      border-radius: 0px 10px 10px 10px;
      padding: 1rem;
    }

    span {
      color: #b4b6be;
      font-size: 0.6rem;
      padding-left: 0.5rem;
      font-weight: 200;
    }
  }
  .mess-right {
    display: flex;
    margin-left: auto;
    flex-direction: column;
    padding-right: 0.5rem;
    margin-right: 0px;
    max-width: 220px;
    p {
      background-color: red;
      text-align: end;
      color: white;
      border-radius: 10px 0px 10px 10px;
    }
    span {
      padding-left: 0rem;
      width: 100%;
      padding-right: 0.5rem;
      text-align: end;
    }
  }
`;

export const StyleButtonSend = styled.div`
  height: 50px;
  display: flex;
  width: 100%;
  input {
    background-color: #404450;
    color: wheat;
    width: 80%;
    padding-left: 1rem;
    text-decoration: none;
    border-radius: 5px 0px 0px 5px;
    border: none;
    &:focus {
      outline: none;
    }
  }
  button {
    background-color: $yellowColor;
    width: 20%;
    border-radius: 0px 5px 5px 0px;
    border: none;
    &:hover {
      cursor: pointer;
    }
  }
`;
