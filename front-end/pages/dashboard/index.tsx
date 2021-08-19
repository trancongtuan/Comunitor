import React, { Fragment, useEffect, useState, useRef } from "react";
import Image from "next/image";
import Loading from "@components/common/loading";
import { Layout } from "@components/Layout/Default";
import { InferGetStaticPropsType } from "next";
import { useDispatch } from "react-redux";
import { StyleChatContainer, StyleChatMessage, StyleButtonSend } from "./style";
import * as uuid from "uuid";
import io from "socket.io-client";
import { IMessage, IPayload } from "./type";
const socket = io("http://localhost:4001/chat");
export default function DashBoard({}: InferGetStaticPropsType<
  typeof getStaticProps
>) {
  const [text, setText] = useState<string>("");
  const [messages, setMessages] = useState<IMessage[]>([]);
  const messagesEndRef = useRef(null);
  const [name, setName] = useState<string>("TuanTC");

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const receivedMessage = (message: IPayload) => {
    const newMessage: IMessage = {
      id: uuid.v4(),
      name: message.name,
      text: message.text,
    };

    setMessages([...messages, newMessage]);
  };
  useEffect(scrollToBottom, [messages]);

  const sendMessage = () => {
    const message: IPayload = {
      name,
      text,
    };

    socket.emit("msgToServer", message);
    setText("");
  };

  useEffect(() => {
    socket.on("msgToClient", (message: IPayload) => {
      receivedMessage(message);
    });
  }, [text]);

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
            if (i.name === "other") {
              return (
                <div key={Math.random().toString(36)} className="message">
                  <p>{i.text}</p>
                  <span>{i.name}</span>
                </div>
              );
            } else {
              return (
                <div
                  key={Math.random().toString(36)}
                  className="message mess-right"
                >
                  <p>{i.text} </p>
                  <span>{i.name}</span>
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
                sendMessage();
              }
            }}
          ></input>
          <button onClick={() => sendMessage()}>Send</button>
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
