import { NextPage } from "next";
import Image from "next/image";
import React, { useLayoutEffect, useRef } from "react";
import ArrowUpButton from "../components/ArrowUpButton";
import ProjectCard from "../components/ProjectCard";
import Wrapper from "../components/Wrapper";

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
          <div className="mt-[27px] ml-[2px] flex flex-row justify-between">
            <ProjectCard link="https://images.unsplash.com/photo-1673720436284-a0af6c6e28cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" />
            <ProjectCard link="https://images.unsplash.com/photo-1674168531636-f44ecced6e13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" />
            <ProjectCard
              link="https://images.unsplash.com/photo-1673212815620-62e1f1824a5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
              className="mr-[2px]"
            />
          </div>
          <div className="mt-[25px] ml-[2px] flex flex-row justify-between">
            <div className=" bg-grey-soft w-[400px] h-[275px] "></div>
            <div className=" bg-grey-soft w-[400px] h-[275px]"></div>
            <div className=" bg-grey-soft w-[400px] h-[275px] mr-[2px]"></div>
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
