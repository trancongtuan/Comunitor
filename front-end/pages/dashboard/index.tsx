import React, { Fragment, useEffect, useState, useRef } from "react";
import Image from "next/image";
import Loading from "@components/common/loading";
import { Layout } from "@components/Layout/Default";
import { InferGetStaticPropsType } from "next";
import { useDispatch } from "react-redux";
import { StyleChatContainer, StyleChatMessage, StyleButtonSend } from "./style";
export default function DashBoard({
  name,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([
    {
      username: "other",
      text: "hello",
    },
    {
      text: "how are you ?",
      username: "me",
    },
  ]);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  return (
    <Fragment>
      <StyleChatContainer className="chat">
        <div className="user-name">
          <h2>
            {"Tuantc"}{" "}
            <span style={{ fontSize: "0.7rem" }}>in Commerce room</span>
          </h2>
        </div>
        <StyleChatMessage className="chat-message">
          {messages.map((i) => {
            if (i.username === "other") {
              return (
                <div className="message">
                  <p>{i.text}</p>
                  <span>{i.username}</span>
                </div>
              );
            } else {
              return (
                <div className="message mess-right">
                  <p>{i.text} </p>
                  <span>{i.username}</span>
                </div>
              );
            }
          })}
          <div ref={messagesEndRef} />
        </StyleChatMessage>
        <StyleButtonSend className="send">
          <input
            placeholder="enter your message"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                // sendData();
              }
            }}
          ></input>
          <button>Send</button>
        </StyleButtonSend>
      </StyleChatContainer>
    </Fragment>
  );
}

DashBoard.Layout = Layout;

export async function getStaticProps() {
  return {
    props: {
      name: process.env.NEXT_PUBLIC_ANALYTICS_ID,
    },
  };
}
