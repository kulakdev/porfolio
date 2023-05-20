import { NextPage } from "next";
import Image from "next/image";
import React, { useLayoutEffect, useRef } from "react";
import ArrowUpButton from "../components/ArrowUpButton";
import ProjectCard from "../components/ProjectCard";
import Wrapper from "../components/Wrapper";
import { firstRow, secondRow, CardTypes } from "../config/config";

const Index: NextPage = () => {
  const MyComponent = () => {
    const ref = useRef<HTMLHeadingElement>(null);
    // useLayoutEffect(() => {
    //   console.log("width", ref.current ? ref.current.offsetWidth : 0);
    // }, []);
    return <div ref={ref}></div>;
  };

  const dotsStyle: {
    background: string;
    backgroundImage: string;
    backgroundSize: string;
    backgroundPosition: string;
  } = {
    background: "#171717",
    backgroundImage: "radial-gradient(#656C75 1.1px, transparent 0)",
    backgroundSize: "25px 25px",
    backgroundPosition: "-35px -35px",
  };

  return (
    <Wrapper title="my projects">
      <MyComponent />
      <div className="w-full h-[calc(100vh-212px)] flex flex-col ">
        <div style={dotsStyle} className="pb-[50px] min-h-[700px] mt-auto">
          <div className="mt-[52px] mx-[52px] flex flex-row justify-between">
            {firstRow.map((image: CardTypes, index: number) => (
              <ProjectCard key={index} link={image.link} image={image.picture} />
            ))}
          </div>
          <div className=" mt-[51px] mx-[52px] flex flex-row justify-between">
            {secondRow.map((image: CardTypes, index: number) => (
              <ProjectCard key={index} link={image.link} image={image.picture} />
            ))}
          </div>
        </div>
        <div className="flex flex-row justify-between mb-[100px] pt-[75px] mt-auto">
          <h1 className="justify-self-end font-[Epilogue] font-bold text-[64px] leading-[72px]">
            about me
          </h1>
          <a>
            <ArrowUpButton />
          </a>
          <div className="justify-self-end font-[Epilogue] font-bold text-[64px] leading-[72px] text-transparent select-none">
            about me
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Index;
