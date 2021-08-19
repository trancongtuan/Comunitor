import React, { Fragment, useEffect, useState, useRef } from "react";
import Image from "next/image";
import Loading from "@components/common/loading";
import { Layout } from "@components/Layout/Default";
import { InferGetStaticPropsType } from "next";
import { useDispatch } from "react-redux";
import Slider from "react-slick";
import { CenterFlex, Flex } from "@components/common/stories/Flex";
import { StyleChatContainer, StyledImageContainer } from "./style";
import Link from "@components/Link";

export default function Home({
  name,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <StyleChatContainer className="home">
      <Flex className="slide">
        <Slider {...settings}>
          <StyledImageContainer>
            <Flex className="slider-text">
              <h1 className="slider-text__first">
                Protects Sensitive Skin From Dryness
              </h1>
              <CenterFlex justifyContent="space-evenly">
                <Link href="/dashboard">view all</Link> |
                <Link href="/dashboard">view more</Link>
              </CenterFlex>
            </Flex>
            <Image
              src="/image-home.jpg"
              alt="Picture of the author"
              width={2000}
              quality={"100"}
              height={1000}
            />
          </StyledImageContainer>
          <div>
            <StyledImageContainer>
              <Flex className="slider-text">
                <h1 className="slider-text__first">
                  Protects Sensitive Skin From Dryness
                </h1>
                <CenterFlex justifyContent="space-evenly">
                  <Link href="/dashboard">view all</Link> |
                  <Link href="/dashboard">view more</Link>
                </CenterFlex>
              </Flex>
              <Image
                src="/home-image.jpg"
                alt="Picture of the author"
                width={2000}
                quality={"100"}
                height={1000}
              />
            </StyledImageContainer>
          </div>
          <div>
            <StyledImageContainer>
              <Flex className="slider-text">
                <h1 className="slider-text__first">
                  Protects Sensitive Skin From Dryness
                </h1>
                <CenterFlex justifyContent="space-evenly">
                  <Link href="/dashboard">view all</Link> |
                  <Link href="/dashboard">view more</Link>
                </CenterFlex>
              </Flex>
              <Image
                src="/home-three.jpg"
                alt="Picture of the author"
                width={2000}
                quality={"100"}
                height={1000}
              />
            </StyledImageContainer>
          </div>
        </Slider>
      </Flex>
    </StyleChatContainer>
  );
}

Home.Layout = Layout;

export async function getStaticProps() {
  return {
    props: {
      name: process.env.NEXT_PUBLIC_ANALYTICS_ID,
    },
  };
}
