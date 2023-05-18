import { NextPage } from "next";
import React, { useLayoutEffect, useRef } from "react";
import Wrapper from "../components/Wrapper";

const Index: NextPage = () => {
  const MyComponent = () => {
    const ref = useRef<HTMLHeadingElement>(null);
    useLayoutEffect(() => {
      console.log("width", ref.current ? ref.current.offsetWidth : 0);
    }, []);
    return <div ref={ref}></div>;
  };

  const dotsStyle: {
    background: string;
    backgroundImage: string;
    backgroundSize: string;
    backgroundPosition: string;
  } = {
    background: "#171717",
    backgroundImage: "radial-gradient(#656C75 2px, transparent 0)",
    backgroundSize: "25px 25px",
    backgroundPosition: "-35px -35px",
  };

  return (
    <Wrapper title="">
      <MyComponent />
      <div className="w-full  flex flex-col" style={dotsStyle}>
        <div className="mt-[27px] ml-[2px] flex flex-row justify-between">
          <div className=" bg-grey-soft w-[400px] h-[275px] "></div>
          <div className=" bg-grey-soft w-[400px] h-[275px]"></div>
          <div className=" bg-grey-soft w-[400px] h-[275px] mr-[2px]"></div>
        </div>
        <div className="mt-[25px] ml-[2px] flex flex-row justify-between">
          <div className=" bg-grey-soft w-[400px] h-[275px] "></div>
          <div className=" bg-grey-soft w-[400px] h-[275px]"></div>
          <div className=" bg-grey-soft w-[400px] h-[275px] mr-[2px]"></div>
        </div>
        <h1 className="justify-self-end font-[Epilogue] font-bold text-[64px]">about me</h1>
      </div>
    </Wrapper>
  );
};

export default Index;
