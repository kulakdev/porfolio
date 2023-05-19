import { NextPage } from "next";
import Image from "next/image";
import React, { useLayoutEffect, useRef } from "react";
import ArrowUpButton from "../components/ArrowUpButton";
import ProjectCard from "../components/ProjectCard";
import Wrapper from "../components/Wrapper";
import { images, FirstRow } from "../config/config";

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
    <Wrapper title="">
      <MyComponent />
      <div className="w-full h-[calc(100vh-212px)] flex flex-col justify-between">
        <div style={dotsStyle} className="grow">
          <div className="mt-[52px] mx-[52px] flex flex-row justify-between">
            {images.map((image: FirstRow, index: number) => (
              <ProjectCard key={index} link={image.picture} />
            ))}
          </div>
          <div className=" mt-[51px] mx-[52px] flex flex-row justify-between">
            <ProjectCard link="https://images.unsplash.com/photo-1675438321407-b458c45a71d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" />
            <ProjectCard link="https://images.unsplash.com/photo-1673212815531-42b55a640de0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" />
            <ProjectCard link="https://images.unsplash.com/photo-1674948839064-3686a14e72e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" />
          </div>
        </div>
        <div className="flex flex-row justify-between mb-[100px] mt-[75px]">
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
